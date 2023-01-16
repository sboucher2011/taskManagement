import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { darken, lighten } from "polished";

export const DrawerWidth = 250;

export const Colors = {
  primary: "#1976D1",
  secondary: "#231651",
  success: "#6DA34D",
  info: "#00a2ff", //Old
  danger: "#FF5722", //Old
  warning: "#FFC107", //Old
  dark: "#3C362A",
  light: "#C9C9C9",
  muted: "#abafb3", //Old
  border: "#DDDFE1", //Old
  inverse: "#2F3D4A", //Old
  shaft: "#333", //Old
  ///////////////
  // Grays
  ///////////////
  dim_grey: "#696969",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_gray: "rgb(230,230,230)",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
      styleOverrides: {
        tooltip: {
          background: Colors.primary,
        },
        arrow: {
          color: Colors.primary,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: DrawerWidth,
          background: Colors.primary,
          color: Colors.secondary,
          borderRadius: "0px 100px 0px 0px",
          borderRight: `1px solid ${Colors.primary}`,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: lighten(0.2, Colors.primary),
        },
      },
    },
  },
});

export default theme;
