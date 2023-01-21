// External
import { FC, ReactElement } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Todo } from "../../../interfaces/Todo";
import { sendApiRequest } from "../../../API/ApiRequests";
import TaskForm from "../../../components/TM/TaskForm/TaskForm";

export const ToDo: FC = (): ReactElement => {
  const { error, isLoading, data } = useQuery("todos", async () => {
    return await sendApiRequest<Todo[]>("/api/todo", "GET");
  });

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
      <TaskForm />
      <h2>My To Do's </h2>
      {isLoading ?? <p>Loading ...</p>}
      {error ?? (
        <p>
          There was an error collection your to do's please try again later ...
        </p>
      )}
      {data &&
        data.map((todo) => (
          <div key={todo._id}>
            <h3>{todo.title}</h3>
            <button onClick={() => deleteTodo(todo._id!)}>DELETE</button>
          </div>
        ))}
    </>
  );
};
