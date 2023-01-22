// External
import { FC, ReactElement } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

// Types
import { Town } from "../../../types/Town";

// Services
import { sendApiRequest } from "../../../API/ApiRequests";

// Components
import TownForm from "../../../components/TM/TownForm/TownForm";

export const Towns: FC = (): ReactElement => {
  const { isLoading, data } = useQuery("towns", async () => {
    return await sendApiRequest<Town[]>("/api/towns", "GET");
  });

  const queryClient = useQueryClient();

  const { mutate: deleteTown } = useMutation(
    (id: string) => sendApiRequest(`/api/towns/${id}`, "DELETE", {}),
    {
      onSettled: () => {
        queryClient.invalidateQueries("towns");
      },
    }
  );

  return (
    <>
      <TownForm />
      <h2>Towns </h2>
      {isLoading ?? <p>Loading ...</p>}
      {data &&
        data.map((town) => (
          <div key={town._id}>
            <h3>{town.name}</h3>
            <button onClick={() => deleteTown(town._id!)}>DELETE</button>
          </div>
        ))}
    </>
  );
};
