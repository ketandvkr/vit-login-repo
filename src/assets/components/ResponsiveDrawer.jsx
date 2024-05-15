import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const ResponsiveDrawer = ({ state, toggleDrawer }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "#F5F5DC",
      }}
      role="presentation"
      onClick={handleDrawerClose} // Close the drawer when an item is clicked
      onKeyDown={handleDrawerClose} // Close the drawer when an item is clicked
    >
      <List>
        {[
          { text: "Accept Assignment Page", path: "/accept-assignment" },
          { text: "Previous Performance Page", path: "/previous-performance" },
          { text: "Upcoming Assignments Page", path: "/upcoming-assignments" },
          { text: "View Result Page", path: "/view-result" },
          { text: "multiplechoice", path: "/multiplechoice" },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button
        sx={{ backgroundColor: "#E6E6FA", fontWeight: "bold" }} // Apply styling here
        onClick={handleDrawerOpen} // Open the drawer when the button is clicked
      >
        Student Corner
      </Button>
      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose} // Close the drawer when it is swiped away
        onOpen={handleDrawerOpen} // Open the drawer when it is swiped
      >
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
};

export default ResponsiveDrawer;
