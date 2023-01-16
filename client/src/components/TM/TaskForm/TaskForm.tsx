import react, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Axios from "axios";

export default function TaskForm() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    Axios.post("http://localhost:3005/addTodo", { name: "testing" })
      .then(() => {
        alert("it worked");
      })
      .catch(() => {
        alert("broken");
      });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create To Do
      </Button>
      <Dialog open={open} onClose={handleClose}>
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
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
