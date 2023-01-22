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

// Types
import { User } from "../../../types/User";

export default function EmployeeForm() {
  const [open, setOpen] = useState(false);
  const [errorLabel, setErrorLabel] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [title, setTitle] = useState("");
  const [role, setRole] = useState("");

  const queryClient = useQueryClient();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setErrorLabel("");
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmailAddress("");
    setCity("");
    setTitle("");
    setRole("");
    setAddress("");
    setOpen(false);
  };

  const handleSave = () => {
    if (firstName !== "") {
      if (lastName !== "") {
        if (emailAddress !== "") {
          if (phoneNumber !== "") {
            if (address !== "") {
              if (city !== "") {
                if (title !== "") {
                  const user: User = {
                    firstName: firstName,
                    lastName: lastName,
                    emailAddress: emailAddress,
                    phoneNumber: phoneNumber,
                    address: address,
                    city: city,
                    state: state,
                    title: title,
                    role: role,
                  };

                  createTask.mutate(user);
                  handleClose();
                } else {
                  setErrorLabel("Please enter a title");
                }
              } else {
                setErrorLabel("Please enter a city");
              }
            } else {
              setErrorLabel("Please enter an address");
            }
          } else {
            setErrorLabel("Please enter a phone number");
          }
        } else {
          setErrorLabel("Please enter an email address");
        }
      } else {
        setErrorLabel("Please eneter a first name");
      }
    } else {
      setErrorLabel("Please enter a last name");
    }
  };

  const createTask = useMutation(
    (data: User) => sendApiRequest("/api/users", "POST", data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"], { exact: true });
      },
    }
  );

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create New Employee
      </Button>
      <Dialog open={open}>
        <DialogTitle>Create New Employee</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="City"
            type="text"
            fullWidth
            variant="standard"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            id="standard-select-currency-native"
            select
            label="State"
            SelectProps={{
              native: true,
            }}
            variant="standard"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </TextField>
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
            id="standard-select-currency-native"
            select
            SelectProps={{
              native: true,
            }}
            variant="standard"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Employee">Employee</option>
            <option value="Manager">Manager</option>
            <option value="Supervisor">Supervisor</option>
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
