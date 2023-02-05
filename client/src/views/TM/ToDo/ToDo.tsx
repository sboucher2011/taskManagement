// External
import React, { useState, ReactElement, FC, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useMutation, useQuery, useQueryClient } from "react-query";

// Types
import { Todo } from "../../../types/Todo";
import { ColumnNames } from "../../../types/ColumnNames";

// Components
import TaskForm from "../../../components/TM/TaskForm/TaskForm";
import ToDoCard from "../../../components/TM/ToDoCard/ToDoCard";

// Services
import { sendApiRequest } from "../../../API/ApiRequests";

export const ToDo: FC = (): ReactElement => {
  let columnsFromBackend: ColumnNames[] = [];
  const { isLoading, data } = useQuery("todos", async () => {
    return await sendApiRequest<Todo[]>("/api/todo", "GET");
  });

  const [openForm, setOpenForm] = useState(false);
  const [selectedToDo, setSelectedToDo] = useState<Todo | undefined>(undefined);

  useEffect(() => {
    if (data) {
      setColumns([
        {
          title: "Backlog",
          items: data.filter((todo) => todo.status === "Backlog"),
        },
        {
          title: "To do",
          items: data.filter((todo) => todo.status === "To do"),
        },
        {
          title: "In Progress",
          items: data.filter((todo) => todo.status === "In Progress"),
        },
        {
          title: "Done",
          items: data.filter((todo) => todo.status === "Done"),
        },
      ]);
    }
  }, [data]);

  const handleEditTodo = (todo: Todo) => {
    setSelectedToDo(todo);
    setOpenForm(true);
  };

  const [columns, setColumns] = useState<ColumnNames[]>(
    data ? columnsFromBackend : []
  );

  const onDragEnd = (result: any, columns: ColumnNames[], setColumns: any) => {
    if (!result.destination) return;
    const { source, destination } = result;

    console.log(source, destination);
    let move = false;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      data?.map((todo) => {
        if (todo.status === sourceColumn.title && move === false) {
          let updatedTodo: Todo = {
            title: todo.title,
            description: todo.description,
            status: destColumn.title,
            _id: todo._id,
          };
          move = true;
          updateTask.mutate(updatedTodo);
        }
      });

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const updateTask = useMutation(
    (updated: Todo) =>
      sendApiRequest(`/api/todo/${updated._id}`, "PUT", updated),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"], { exact: true });
      },
    }
  );

  const queryClient = useQueryClient();

  const { mutate: deleteTodo } = useMutation(
    (id: string) => sendApiRequest(`/api/todo/${id}`, "DELETE", {}),
    {
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  return (
    <>
      <h2>My To Do's </h2>
      <TaskForm
        openForm={openForm}
        handleCloseFunc={() => {
          setOpenForm(false);
          setSelectedToDo(undefined);
        }}
        data={selectedToDo}
      />
      {isLoading && <p>Loading...</p>}
      {data && (
        <div
          style={{ display: "flex", justifyContent: "center", height: "100%" }}
        >
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  key={columnId}
                >
                  <h2>{column.title}</h2>
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                                ? "lightblue"
                                : "lightgrey",
                              padding: 4,
                              width: 290,
                              minHeight: 500,
                            }}
                          >
                            {column.items.map((item: any, index: number) => {
                              return (
                                <Draggable
                                  key={item._id}
                                  draggableId={item._id!}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        <ToDoCard
                                          toDo={item}
                                          handleRemoveTodo={() =>
                                            deleteTodo(item._id!)
                                          }
                                          handleEditTodo={() =>
                                            handleEditTodo(item)
                                          }
                                        />
                                      </div>
                                      // <div
                                      //   ref={provided.innerRef}
                                      //   {...provided.draggableProps}
                                      //   {...provided.dragHandleProps}
                                      //   style={{
                                      //     userSelect: "none",
                                      //     padding: 16,
                                      //     margin: "0 0 8px 0",
                                      //     minHeight: "50px",
                                      //     backgroundColor: snapshot.isDragging
                                      //       ? "#263B4A"
                                      //       : "#456C86",
                                      //     color: "white",
                                      //     ...provided.draggableProps.style,
                                      //   }}
                                      // >
                                      //   {item.title}
                                      // </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
        </div>
      )}
    </>
  );
};
