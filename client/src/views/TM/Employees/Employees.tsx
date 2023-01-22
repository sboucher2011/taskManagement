// External
import { FC, ReactElement } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

// Types
import { User } from "../../../types/User";

// Services
import { sendApiRequest } from "../../../API/ApiRequests";

// Components
import EmployeeForm from "../../../components/TM/EmployeeForm/EmployeeForm";

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
    <>
      <EmployeeForm />
      <h2>Employees </h2>
      {isLoading ?? <p>Loading ...</p>}
      {data &&
        data.map((user) => (
          <div key={user._id}>
            <h3>
              {user.firstName} {user.lastName}
            </h3>
            <button onClick={() => deleteUser(user._id!)}>DELETE</button>
          </div>
        ))}
    </>
  );
};
