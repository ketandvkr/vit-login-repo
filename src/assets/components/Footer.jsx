import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2),
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2">
        This is the footer. You can add your footer content here.
      </Typography>
    </Box>
  );
}

export default Footer;
