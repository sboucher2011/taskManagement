// External
import { FC, ReactElement } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

// Style
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Types
import { Town } from "../../../types/Town";

// Services
import { sendApiRequest } from "../../../API/ApiRequests";

// Components
import TownForm from "../../../components/TM/TownForm/TownForm";
import TownCard from "../../../components/TM/TownCard/TownCard";

interface TownDetailProps {
  town: Town | undefined;
}

function TownDetail(props: TownDetailProps) {
  const { town } = props;
  //   const { isLoading, data } = useQuery("towns", async () => {
  //     return await sendApiRequest<Town[]>("/api/towns", "GET");
  //   });

  //   const queryClient = useQueryClient();

  //   const { mutate: deleteTown } = useMutation(
  //     (id: string) => sendApiRequest(`/api/towns/${id}`, "DELETE", {}),
  //     {
  //       onSettled: () => {
  //         queryClient.invalidateQueries("towns");
  //       },
  //     }
  //   );

  return <>{town ? <h2>{town.name}</h2> : <h2>NONE</h2>}</>;
}

export default TownDetail;
