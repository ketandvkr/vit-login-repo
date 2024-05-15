import React from "react";
import { Paper, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function StaffDetailsCarousel() {
  const staff = [
    {
      name: "John Doe",
      position: "Senior Developer",
      background: "Bachelor's Degree in Computer Science",
      experience: "5+ years of experience in web development",
    },
    {
      name: "Jane Smith",
      position: "Marketing Manager",
      background: "Master's Degree in Marketing",
      experience: "10+ years of experience in marketing and branding",
    },
    {
      name: "Alice Johnson",
      position: "Graphic Designer",
      background: "Degree in Visual Arts",
      experience: "7+ years of experience in graphic design and illustration",
    },
  ];

  return (
    <Carousel
      sx={{ width: "100%", height: "300px" }}
      autoPlay={true}
      indicators={false}
      animation="slide"
      navButtonsAlwaysVisible={false}
      cycleNavigation={true}
    >
      {staff.map((staffMember, index) => (
        <Paper key={index} sx={{ padding: 2, textAlign: "center" }}>
          <Typography variant="h5">{staffMember.name}</Typography>
          <Typography variant="subtitle1">{staffMember.position}</Typography>
          <Typography variant="body1">{staffMember.background}</Typography>
          <Typography variant="body2">{staffMember.experience}</Typography>
        </Paper>
      ))}
    </Carousel>
  );
}

export default StaffDetailsCarousel;
