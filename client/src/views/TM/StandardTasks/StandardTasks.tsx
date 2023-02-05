// External
import React, { useState, ReactElement, FC, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

// Types
import { StandardTask } from "../../../types/StandardTasks";

// Components
import StandardTaskForm from "../../../components/TM/StandardTaskForm/StandardTaskForm";

// Services
import { sendApiRequest } from "../../../API/ApiRequests";

export const StandardTasks: FC = (): ReactElement => {
  const { isLoading, data } = useQuery("standardTasks", async () => {
    return await sendApiRequest<StandardTask[]>("/api/standardTasks", "GET");
  });

  const updateStandardTask = useMutation(
    (updated: StandardTask) =>
      sendApiRequest(`/api/standardTasks/${updated._id}`, "PUT", updated),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["standardTasks"], { exact: true });
      },
    }
  );

  const queryClient = useQueryClient();

  const { mutate: deleteStandardTask } = useMutation(
    (id: string) => sendApiRequest(`/api/standardTasks/${id}`, "DELETE", {}),
    {
      onSettled: () => {
        queryClient.invalidateQueries("standardTasks");
      },
    }
  );

  return (
    <>
      <h2>Standard Tasks</h2>
      <StandardTaskForm />
      {isLoading && <p>Loading...</p>}
      {data && <div></div>}
    </>
  );
};
