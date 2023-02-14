// External
import React, { useState, FC, ReactElement } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

// Styles
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// Services
import { sendApiRequest } from "../../../API/ApiRequests";

// Types
import { StandardTask } from "../../../types/StandardTasks";
import StandardTaskForm from "../../../components/TM/StandardTaskForm/StandardTaskForm";
import { Button } from "@mui/material";

export const StandardTasks: FC = (): ReactElement => {
  const [selectionModel, setSelectionModel] = useState<GridRowId[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");

  const [openForm, setOpenForm] = useState(false);
  const [selectedStandardTask, setSelectedStandardTask] = useState<
    StandardTask | undefined
  >(undefined);

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 230 },
    { field: "description", headerName: "Description", width: 400 },
    { field: "chargeNumber", headerName: "Charge Number", width: 400 },
    { field: "frequency", headerName: "Frequency", width: 400 },
  ];

  const { isLoading, data: rows } = useQuery("standardTasks", async () => {
    return await sendApiRequest<StandardTask[]>("/api/standardTasks", "GET");
  });

  const handleEditTask = (taskid: string) => {
    const selectedTask = rows!.filter((row) => row._id === taskid);
    setSelectedStandardTask(selectedTask[0]);
    setOpenForm(true);
  };

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
      <StandardTaskForm
        openForm={openForm}
        data={selectedStandardTask}
        handleCloseFunc={() => {
          setOpenForm(false);
          setSelectedStandardTask(undefined);
        }}
      />
      {selectedId && (
        <Box sx={{ marginTop: "12px" }}>
          <Button
            variant="contained"
            color="warning"
            endIcon={<EditIcon />}
            onClick={() => handleEditTask(selectedId)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            endIcon={<DeleteIcon />}
            sx={{ marginLeft: "12px" }}
            onClick={() => deleteStandardTask(selectedId)}
          >
            Delete
          </Button>
        </Box>
      )}

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
                    setSelectedId(result.toString());
                    setSelectionModel(result);
                  } else {
                    setSelectedId(selection.toString());
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
