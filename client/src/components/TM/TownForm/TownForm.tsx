// External
import react, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

// Style
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// Service
import { sendApiRequest } from "../../../API/ApiRequests";

//Types
import { Town } from "../../../types/Town";

export default function TownForm() {
  const [open, setOpen] = useState(false);
  const [errorLabel, setErrorLabel] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [pocName, setPocName] = useState("");
  const [pocPhone, setPocPhone] = useState("");
  const [pocEmail, setPocEmail] = useState("");

  const queryClient = useQueryClient();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setErrorLabel("");
    setName("");
    setImageUrl("");
    setPocEmail("");
    setPocName("");
    setPocPhone("");
    setOpen(false);
  };

  const handleSave = () => {
    if (name !== "") {
      if (pocName !== "") {
        if (pocPhone !== "") {
          if (pocEmail !== "") {
            const town: Town = {
              name: name,
              imageUrl: imageUrl,
              pocName: pocName,
              pocPhone: pocPhone,
              pocEmail: pocEmail,
            };

            createTown.mutate(town);
            handleClose();
          } else {
            setErrorLabel("Please enter a point of contact email address");
          }
        } else {
          setErrorLabel("Please enter a point of contact phone number");
        }
      } else {
        setErrorLabel("Please eneter a point of contact name");
      }
    } else {
      setErrorLabel("Please enter a town name");
    }
  };

  const createTown = useMutation(
    (data: Town) => sendApiRequest("/api/towns", "POST", data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["towns"], { exact: true });
      },
    }
  );

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create New Town
      </Button>
      <Dialog open={open}>
        <DialogTitle>Create New Town</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Town Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Point of Contact Name"
            type="text"
            fullWidth
            variant="standard"
            value={pocName}
            onChange={(e) => setPocName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Point of Contact Phone Number"
            type="text"
            fullWidth
            variant="standard"
            value={pocPhone}
            onChange={(e) => setPocPhone(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Point of Contact Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={pocEmail}
            onChange={(e) => setPocEmail(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Upload Image"
            type="text"
            fullWidth
            variant="standard"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
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
