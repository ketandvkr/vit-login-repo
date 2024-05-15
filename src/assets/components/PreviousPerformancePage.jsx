import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Navbar from "../navbar";
import Footer from "./Footer";

import heroImage from "../images/code.jpg";
import { colors } from "@mui/material";

const HeroContainer = styled.div`
  padding: 20px;
`;

const SubmissionContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SubmissionHeader = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: ${colors.blue[500]}; /* Use a color from the Material-UI theme */
`;

const SubmissionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const SubmissionLabel = styled.span`
  font-weight: bold;
`;

const PreviousPerformancePage = () => {
  // Fake submission data
  const submissions = [
    { id: 1, marks: 85, remark: "Well done" },
    { id: 2, marks: 78, remark: "Good effort" },
    { id: 3, marks: 92, remark: "Excellent work" },
    // Add more fake data as needed
  ];

  return (
    <Grid container spacing={2} sx={{ backgroundImage: `url(${heroImage})` }}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={8}>
        <HeroContainer>
          <SubmissionHeader>Previous Performance</SubmissionHeader>
          {submissions.map((submission) => (
            <SubmissionContainer key={submission.id}>
              <SubmissionHeader>Submission #{submission.id}</SubmissionHeader>
              <SubmissionRow>
                <SubmissionLabel>Marks:</SubmissionLabel>
                <span>{submission.marks}</span>
              </SubmissionRow>
              <SubmissionRow>
                <SubmissionLabel>Remark:</SubmissionLabel>
                <span>{submission.remark}</span>
              </SubmissionRow>
            </SubmissionContainer>
          ))}
        </HeroContainer>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default PreviousPerformancePage;
