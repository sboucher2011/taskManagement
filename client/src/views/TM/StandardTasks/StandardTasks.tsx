// External
import React, { useState, FC, ReactElement } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

// Styles
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

// Services
import { sendApiRequest } from "../../../API/ApiRequests";

// Types
import { StandardTask } from "../../../types/StandardTasks";
import StandardTaskForm from "../../../components/TM/StandardTaskForm/StandardTaskForm";

export const StandardTasks: FC = (): ReactElement => {
  const [selectionModel, setSelectionModel] = useState<GridRowId[]>([]);

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 230 },
    { field: "description", headerName: "Description", width: 400 },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
  ];

  const { isLoading, data: rows } = useQuery("standardTasks", async () => {
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
    <div>
      <StandardTaskForm />
      {isLoading && <p>Loading...</p>}
      {rows && (
        <Box
          sx={{
            flexGrow: 1,
            marginLeft: "12px",
            marginTop: "25px",
            marginRight: "12px",
            width: "100%",
          }}
        >
          <Paper sx={{ width: "100%", mb: 2 }}>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                getRowId={(row) => row._id}
                checkboxSelection
                selectionModel={selectionModel}
                hideFooterSelectedRowCount
                onSelectionModelChange={(selection) => {
                  if (selection.length > 1) {
                    const selectionSet = new Set(selectionModel);
                    const result = selection.filter(
                      (s) => !selectionSet.has(s)
                    );

                    setSelectionModel(result);
                  } else {
                    setSelectionModel(selection);
                  }
                }}
              />
            </div>
          </Paper>
        </Box>
      )}
    </div>
  );
};
