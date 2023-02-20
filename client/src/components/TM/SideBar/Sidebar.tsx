// External
import React, { useEffect, useState } from "react";
import moment from "moment";

// Style
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

import StandardTaskForm from "../StandardTaskForm/StandardTaskForm";

// Components
import { ToDo } from "../../../views/TM/ToDo/ToDo";
import Towns from "../../../views/TM/Towns/Towns";
import TownDetail from "../../../views/TM/Towns/TownDetail";
import { Employees } from "../../../views/TM/Employees/Employees";
import SideBarDrawer from "./SideBarDrawer";
import { StandardTasks } from "../../../views/TM/StandardTasks/StandardTasks";
import { Town } from "../../../types/Town";

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
  const [day, setDay] = useState("");
  const [selectedTown, setSelectedTown] = useState<Town | undefined>(undefined);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const day = moment().day();

    if (day === 1) {
      setDay("Monday");
    }
    if (day === 2) {
      setDay("Tuesday");
    }
    if (day === 3) {
      setDay("Wednesday");
    }
    if (day === 4) {
      setDay("Thursday");
    }
    if (day === 5) {
      setDay("Friday");
    }
    if (day === 6) {
      setDay("Saturday");
    }
    if (day === 7) {
      setDay("Sunday");
    }
  }, []);

  const handleTownSelected = (townSelected: Town) => {
    setSelectedTown(townSelected);
    setTab("Details");
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
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" noWrap component="div">
              {day}, {moment().format("MMMM DD, YYYY")}
            </Typography>
            <Container sx={{ display: "flex" }}>
              <Typography variant="h6" noWrap component="div">
                Welcome, Janice
              </Typography>
              <Avatar
                style={{ marginLeft: "8px" }}
                {...stringAvatar("Janice Boucher")}
              />
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
        style={{ background: "rgb(224, 223, 220)" }}
      >
        <Toolbar />
        {tab === "" && <>put something here??</>}
        {tab === "Tasks" && <ToDo />}
        {tab === "Town Management" && (
          <Towns handleSelectDetail={(x) => handleTownSelected(x)} />
        )}
        {tab === "Employees" && <Employees />}
        {tab === "Standard Tasks" && <StandardTasks />}
        {tab === "Details" && <TownDetail town={selectedTown} />}
      </Box>
    </Box>
  );
}
