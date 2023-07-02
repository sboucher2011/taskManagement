// External
import { FC, ReactElement, useEffect, useState } from "react";

// Style
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

// Types
import { User } from "../../../types/User";

// Services
import { sendApiRequest } from "../../../API/ApiRequests";
import { Container, Stack } from "@mui/system";

// Components

export const LogIn: FC = (): ReactElement => {
  const [isLogIn, setIsLogIn] = useState<boolean>(true);
  const [errorLabel, setErrorLabel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isEnabeled, setIsEnabeled] = useState<boolean>(true);

  const handleButtonPress = () => {
    setIsLogIn(!isLogIn);
  };

  useEffect(() => {
    if (email !== "") {
      if (password !== "") {
        setIsEnabeled(false);
      } else {
        setIsEnabeled(true);
      }
    } else {
      setIsEnabeled(true);
    }
  }, [email, password]);

  const handleSignIn = () => {
    console.log(email + " " + password);
    setIsEnabeled(false);
    setErrorLabel("");
  };

  return (
    <Container sx={{ width: "100%" }}>
      <Box
        display="flex"
        component={Stack}
        justifyContent="center"
        alignItems="center"
      >
        <h2>Log In </h2>
        <Stack spacing={3} width={350}>
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            defaultValue={password}
            type="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            disabled={isEnabeled}
            onClick={handleSignIn}
          >
            Log In
          </Button>
          <Typography variant={"h5"} lineHeight={2} sx={{ color: "red" }}>
            {errorLabel}
          </Typography>
        </Stack>
        <Typography
          variant={"h5"}
          lineHeight={2}
          sx={{ color: "black" }}
          onClick={handleButtonPress}
        >
          Don't have an account?
        </Typography>
      </Box>
    </Container>
  );
};
