// External
import react, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";

// Style
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// Service
import { sendApiRequest } from "../../../API/ApiRequests";

// Types
import { StandardTask } from "../../../types/StandardTasks";

interface StandardTaskFormProps {
  data?: StandardTask;
  openForm?: boolean;
  handleCloseFunc?: () => void;
}

export default function StandardTaskForm(props: StandardTaskFormProps) {
  const { data, openForm, handleCloseFunc } = props;
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("Weekly");
  const [chargeNumber, setChargeNumber] = useState("");
  const [errorLabel, setErrorLabel] = useState("");
  const [type, setType] = useState("Create");

  const queryClient = useQueryClient();

  useEffect(() => {
    if (openForm && data !== undefined) {
      setOpen(true);
      setTitle(data?.title);
      setDescription(data?.description);
      setChargeNumber(data?.chargeNumber);
      setFrequency(data?.frequency);
      setType("Edit");
    }
  }, [data, openForm]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTitle("");
    setDescription("");
    setChargeNumber("");
    setErrorLabel("");
    setFrequency("Weekly");
  };

  const handleSave = () => {
    if (title !== "") {
      if (description !== "") {
        const standardTask: StandardTask = {
          title: title,
          description: description,
          frequency: frequency,
          chargeNumber: chargeNumber,
        };

        if (type === "Create") {
          createTask.mutate(standardTask);
        } else {
          updateTask.mutate(standardTask);
        }
        handleClose();
      } else {
        setErrorLabel("Please eneter a description");
      }
    } else {
      setErrorLabel("Please enter a title");
    }
  };

  const createTask = useMutation(
    (data: StandardTask) => sendApiRequest("/api/standardTasks", "POST", data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["standardTasks"], { exact: true });
      },
    }
  );

  const updateTask = useMutation(
    (updated: StandardTask) =>
      sendApiRequest(`/api/standardTasks/${data?._id}`, "PUT", updated),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["standardTasks"], { exact: true });
      },
    }
  );

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Create New Standard Task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{type} Standard Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            A Standard Task is able to be applied to all towns and is viable to
            all users
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            id="standard-select-currency-native"
            select
            label="Frequency"
            SelectProps={{
              native: true,
            }}
            variant="standard"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value="Weekly">Weekly</option>
            <option value="Bi-Weekly">Bi-Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Bi-Annually">Bi-Annually</option>
            <option value="Annually">Annually</option>
          </TextField>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Charge Number"
            type="text"
            fullWidth
            variant="standard"
            value={chargeNumber}
            onChange={(e) => setChargeNumber(e.target.value)}
          />
        </DialogContent>
        <p style={{ marginLeft: "12px", color: "red" }}>{errorLabel}</p>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
