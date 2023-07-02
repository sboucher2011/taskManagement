// External
import { FC, ReactElement } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

// Style
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// Types
import { Town } from "../../../types/Town";

// Services
import { sendApiRequest } from "../../../API/ApiRequests";

// Components
import TownForm from "../../../components/TM/TownForm/TownForm";
import TownCard from "../../../components/TM/TownCard/TownCard";
import TownDetailInfo from "../../../components/TownDetail/TownDetailInfo";
import { TownDetailTable } from "../../../components/TownDetail/TownDetailTable";
import { Button } from "@mui/material";

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

  return (
    <>
      {town && (
        <>
          <TownDetailInfo town={town} />
          <Button
            variant="contained"
            color="success"
            endIcon={<AddCircleOutlineIcon />}
            sx={{ marginLeft: "12px" }}
            onClick={() => console.log("add")}
          >
            Add Standard Task to Town
          </Button>
          <TownDetailTable />
        </>
      )}
    </>
  );
}

export default TownDetail;
