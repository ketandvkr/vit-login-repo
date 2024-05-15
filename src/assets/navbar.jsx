// Navbar.jsx
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import ResponsiveDrawer from "./components/ResponsiveDrawer";

const Navbar = () => {
  const location = useLocation();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              student portal
            </Typography>
            <Button
              color="inherit"
              component={NavLink}
              to="/"
              style={{
                color: location.pathname === "/" ? "red" : "inherit",
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/contact"
              style={{
                color: location.pathname === "/contact" ? "red" : "inherit",
              }}
            >
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <ResponsiveDrawer
        state={state}
        setState={setState}
        toggleDrawer={toggleDrawer}
      />
    </div>
  );
};

export default Navbar;
