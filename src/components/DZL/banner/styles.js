import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../theme/home";

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  background: Colors.light,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 420,
  padding: "30px",
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "800px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  lineHeight: 1.5,
  fontSize: "35px",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const BannerShopButton = styled(Button)(({ theme }) => ({
  padding: "20px 0px",
  color: Colors.white,
  background: Colors.primary,
  fontWeight: "bold",
  fontSize: "16px",
  "&:hover": {
    background: Colors.secondary,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 0px",
    fontSize: "14px",
  },
}));
