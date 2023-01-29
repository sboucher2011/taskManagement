import { Box, Button, Typography, TextField, colors } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../theme/home";

import "./animation.css";

export const ContactContainer = styled(Box)(({ matches, theme }) => ({
  //   display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  background: Colors.white,
  //   [theme.breakpoints.down("sm")]: {
  //     flexDirection: "column",
  //     alignItems: "center",
  //   },
}));

export const ContactTitle = styled(Typography)(({ matches, theme }) => ({
  lineHeight: 1.5,
  fontSize: "35px",
  marginBottom: "20px",
  color: "black",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

export const ContactField = styled(TextField)(() => ({
  //   input: {
  //     color: Colors.primary,
  //   },
  ".MuiInputLabel-root": {
    color: Colors.black,
  },

  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.dark}`,
  },
}));
