// External
import { useState } from "react";
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
}
export default function TaskForm(props: TaskFormProps) {
  const { data } = props;
  const [open, setOpen] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorLabel, setErrorLabel] = useState("");

  const queryClient = useQueryClient();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTodoTitle("");
    setDescription("");
    setErrorLabel("");
  };

  const handleSave = () => {
    if (todoTitle !== "") {
      if (description !== "") {
        const todo: Todo = {
          title: todoTitle,
          description: description,
        };

        createTask.mutate(todo);
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

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Create To Do
      </Button>
      <Dialog open={open}>
        <DialogTitle>Create To Do</DialogTitle>
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
