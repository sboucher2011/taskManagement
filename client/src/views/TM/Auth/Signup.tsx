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

export const Signup: FC = (): ReactElement => {
  const [errorLabel, setErrorLabel] = useState<string>("");
  const [emailSU, setEmailSU] = useState<string>("");
  const [passwordSU, setPasswordSU] = useState<string>("");
  const [passwordVerifySU, setPasswordVerifySU] = useState<string>("");
  const [loginCode, setLoginCode] = useState<string>("");
  const [isEnabeledSU, setIsEnabeledSU] = useState<boolean>(true);

  useEffect(() => {
    if (emailSU !== "") {
      if (passwordSU !== "") {
        setIsEnabeledSU(false);
      } else {
        setIsEnabeledSU(true);
      }
    } else {
      setIsEnabeledSU(true);
    }
  }, [emailSU, passwordSU]);

  const handleSignUp = () => {
    console.log(emailSU + " " + passwordSU);
    setIsEnabeledSU(false);
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
        <h2>Sign Up </h2>
        <Stack spacing={3} width={350}>
          <TextField
            required
            id="standard-required"
            label="Email"
            defaultValue={emailSU}
            variant="standard"
            onChange={(e) => setEmailSU(e.target.value)}
          />
          <TextField
            required
            id="standard-required"
            label="Password"
            defaultValue={passwordSU}
            variant="standard"
            onChange={(e) => setPasswordSU(e.target.value)}
          />
          <TextField
            required
            id="standard-required"
            label="Password Verification"
            defaultValue={passwordVerifySU}
            variant="standard"
            onChange={(e) => setPasswordVerifySU(e.target.value)}
          />
          <TextField
            required
            id="standard-required"
            label="Login Code"
            defaultValue={loginCode}
            variant="standard"
            onChange={(e) => setLoginCode(e.target.value)}
          />
          <Button
            variant="contained"
            disabled={isEnabeledSU}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Typography variant={"h5"} lineHeight={2} sx={{ color: "red" }}>
            {errorLabel}
          </Typography>
        </Stack>
        <Typography
          variant={"h5"}
          lineHeight={2}
          sx={{ color: "black" }}
          //   onClick={handleButtonPress}
        >
          Already have an account?
        </Typography>
      </Box>
    </Container>
  );
};
