import React from "react";

import { Paper, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function TextCarousel() {
  const items = [
    {
      text: "Welcome to our website!",
    },
    {
      text: "Check out our latest products.",
    },
    {
      text: "Don't miss our special offers!",
    },
  ];

  return (
    <Carousel
      sx={{ width: "100%", height: "200px", backgroundColor: "inherit" }}
      onAutoPlay={true}
      indicators={false}
      animation="slide"
      navButtonsAlwaysVisible={false}
      cycleNavigation={true}
    >
      {items.map((item, index) => (
        <Paper
          key={index}
          sx={{ padding: 2, textAlign: "center", backgroundColor: "steelblue" }}
        >
          <Typography variant="h5">{item.text}</Typography>
        </Paper>
      ))}
    </Carousel>
  );
}

export default TextCarousel;
