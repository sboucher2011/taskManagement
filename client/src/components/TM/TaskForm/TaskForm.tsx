// External
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";

//Style
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
import { Todo } from "../../../types/Todo";

interface TaskFormProps {
  data?: Todo;
  openForm?: boolean;
  handleCloseFunc?: () => void;
}
export default function TaskForm(props: TaskFormProps) {
  const { data, openForm, handleCloseFunc } = props;
  const [open, setOpen] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoStatus, setTodoStatus] = useState("Backlog");
  const [description, setDescription] = useState("");
  const [errorLabel, setErrorLabel] = useState("");
  const [type, setType] = useState("Create");

  const queryClient = useQueryClient();

  useEffect(() => {
    if (openForm && data !== undefined) {
      setOpen(true);
      setTodoTitle(data?.title);
      setDescription(data?.description);
      setTodoStatus(data?.status);
      setType("Edit");
    }
  }, [data, openForm]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (handleCloseFunc) {
      handleCloseFunc();
    }
    setOpen(false);
    setTodoTitle("");
    setDescription("");
    setErrorLabel("");
    setTodoStatus("Backlog");
  };

  const handleSave = () => {
    if (todoTitle !== "") {
      if (description !== "") {
        const todo: Todo = {
          title: todoTitle,
          description: description,
          status: todoStatus,
        };

        if (type === "Create") {
          createTask.mutate(todo);
        } else {
          updateTask.mutate(todo);
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
    (data: Todo) => sendApiRequest("/api/todo", "POST", data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"], { exact: true });
      },
    }
  );

  const updateTask = useMutation(
    (updated: Todo) => sendApiRequest(`/api/todo/${data?._id}`, "PUT", updated),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"], { exact: true });
      },
    }
  );

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Create To Do
      </Button>
      <Dialog open={open}>
        <DialogTitle>{type} To Do</DialogTitle>
        <DialogContent>
          <DialogContentText>
            A To Do is a private task that can only be seen by you.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setTodoTitle(e.target.value)}
            value={todoTitle}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <TextField
            id="standard-select-currency-native"
            select
            SelectProps={{
              native: true,
            }}
            variant="standard"
            value={todoStatus}
            onChange={(e) => setTodoStatus(e.target.value)}
          >
            <option value="Backlog">Backlog</option>
            <option value="To do">To do</option>
            <option value="In Progress">In Progress</option>
          </TextField>
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
