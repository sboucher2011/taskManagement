import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/system";
import { Avatar } from "@mui/material";

import { stringAvatar } from "../../../utils/StringAvatar";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import TownForm from "../TownForm/TownForm";
import StandardTaskForm from "../StandardTaskForm/StandardTaskForm";
import { ToDo } from "../../../views/TM/ToDo/ToDo";
import SideBarDrawer from "./SideBarDrawer";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function SideBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tab, setTab] = useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSetTab = (selectedCategory: string) => {
    setTab(selectedCategory);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction="row" justifyContent="space-between" spacing={4}>
            <Typography variant="h6" noWrap component="div">
              Monday January 16, 2023
            </Typography>
            <Container>
              <Typography variant="h6" noWrap component="div">
                Welcome, Janice
              </Typography>
              <Avatar {...stringAvatar("Janice Boucher")} />
            </Container>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <SideBarDrawer onCategorySelected={handleSetTab} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <SideBarDrawer onCategorySelected={handleSetTab} />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {tab === "" && (
          <>
            <EmployeeForm />
            <TownForm />
            <StandardTaskForm />{" "}
          </>
        )}
        {tab === "Tasks" && <ToDo />}
      </Box>
    </Box>
  );
}
