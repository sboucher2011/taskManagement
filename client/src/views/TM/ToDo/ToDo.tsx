// External
import { FC, ReactElement } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

// Style
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Types
import { Todo } from "../../../types/Todo";

// Services
import { sendApiRequest } from "../../../API/ApiRequests";

// Components
import TaskForm from "../../../components/TM/TaskForm/TaskForm";
import ToDoCard from "../../../components/TM/ToDoCard/ToDoCard";

export const ToDo: FC = (): ReactElement => {
  const { isLoading, data } = useQuery("todos", async () => {
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
      <h2>My To Do's </h2>
      <TaskForm />

      <Box
        sx={{
          flexGrow: 1,
          marginLeft: "12px",
          marginTop: "25px",
          marginRight: "12px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {isLoading ?? <p>Loading ...</p>}
          {data &&
            data.map((todo, index) => (
              <div key={todo._id} style={{ paddingTop: "12px" }}>
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  sx={{ padding: "4px" }}
                  key={index}
                >
                  <ToDoCard
                    toDo={todo}
                    handleRemoveTodo={() => deleteTodo(todo._id!)}
                  />
                </Grid>
              </div>
            ))}
        </Grid>
      </Box>
    </>
  );
};
