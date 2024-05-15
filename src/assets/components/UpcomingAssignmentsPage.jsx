import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Navbar from "../navbar";
import Footer from "./Footer";

import heroImage from "../images/background1.jpg";

const PageContainer = styled.div`
  background-image: url(${heroImage});
  padding: 20px;
  background-size: cover;
`;

const AssignmentContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AssignmentHeader = styled.h2`
  margin-bottom: 20px;
`;

const AssignmentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const AssignmentLabel = styled.span`
  font-weight: bold;
`;

const StyledGrid = styled(Grid)`
  && {
    background-image: url(${heroImage});
    padding: 10px;
  }
`;

const UpcomingAssignmentsPage = () => {
  // Fake assignment data
  const assignments = [
    { id: 1, name: "Essay", dueDate: "2024-04-30" },
    { id: 2, name: "Presentation", dueDate: "2024-05-05" },
    { id: 3, name: "Project", dueDate: "2024-05-10" },
    // Add more fake data as needed
  ];

  return (
    <PageContainer>
      <Navbar sx={{ possition: "floated" }} />
      <AssignmentHeader>Upcoming Assignments</AssignmentHeader>
      <StyledGrid container spacing={2}>
        {assignments.map((assignment) => (
          <Grid item xs={8} key={assignment.id}>
            <AssignmentContainer>
              <AssignmentHeader>{assignment.name}</AssignmentHeader>
              <AssignmentRow>
                <AssignmentLabel>Due Date:</AssignmentLabel>
                <span>{assignment.dueDate}</span>
              </AssignmentRow>
            </AssignmentContainer>
          </Grid>
        ))}
      </StyledGrid>
      <Footer />
    </PageContainer>
  );
};

export default UpcomingAssignmentsPage;
