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
            data.map((town, index) => (
              <div key={town._id} style={{ paddingTop: "12px" }}>
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  sx={{ padding: "4px" }}
                  key={index}
                >
                  <TownCard
                    town={town}
                    handleRemoveTown={() => deleteTown(town._id!)}
                  />
                </Grid>
              </div>
            ))}
        </Grid>
      </Box>
    </>
  );
};
