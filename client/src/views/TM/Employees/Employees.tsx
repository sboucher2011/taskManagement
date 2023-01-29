// External
import { FC, ReactElement } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

// Style
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Types
import { User } from "../../../types/User";

// Services
import { sendApiRequest } from "../../../API/ApiRequests";

// Components
import EmployeeForm from "../../../components/TM/EmployeeForm/EmployeeForm";
import EmployeeCard from "../../../components/TM/EmployeeCard/EmployeeCard";

export const Employees: FC = (): ReactElement => {
  const { isLoading, data } = useQuery("users", async () => {
    return await sendApiRequest<User[]>("/api/users", "GET");
  });

  const queryClient = useQueryClient();

  const { mutate: deleteUser } = useMutation(
    (id: string) => sendApiRequest(`/api/users/${id}`, "DELETE", {}),
    {
      onSettled: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );

  return (
    <div>
      <h2>Employees </h2>
      <EmployeeForm />
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
            data.map((user, index) => (
              <div key={user._id} style={{ paddingTop: "12px" }}>
                <Grid
                  item
                  xs={2}
                  sx={{ padding: "4px" }}
                  sm={4}
                  md={4}
                  key={index}
                >
                  <EmployeeCard
                    employee={user}
                    handleRemoveEmployee={() => deleteUser(user._id!)}
                  />
                </Grid>
              </div>
            ))}
        </Grid>
      </Box>
    </div>
  );
};
