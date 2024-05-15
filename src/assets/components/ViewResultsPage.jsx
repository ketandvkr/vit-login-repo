import React from "react";
import styled from "styled-components";
import Navbar from "../navbar";
import Footer from "./Footer";
import ColorInversionFooter from "./ColorInversionFooter";

const PageContainer = styled.div`
  background-color: #64b5f6;
  padding: 20px;
`;

const ResultContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ResultHeader = styled.h2`
  margin-bottom: 20px;
`;

const ResultRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const ResultLabel = styled.span`
  font-weight: bold;
`;

const ViewResultsPage = () => {
  // Fake result data
  const results = [
    {
      Exam_id: 1,
      subject: "java",
      company: "Cognizant",
      submit_date: "03/02/2002",
      Assignment_last_date: "04/02/2002",
      score: 85,
      validity: "04/02/2002",
    },
  ];

  return (
    <>
      <PageContainer>
        <Navbar />
        <h2>View Results</h2>
        {results.map((result) => (
          <ResultContainer key={result.Exam_id}>
            <ResultHeader>{result.subject}</ResultHeader>
            <ResultRow>
              <ResultLabel>Score:</ResultLabel>
              <span>{result.score}</span>
              <span>{result.company}</span>
              <span>{result.submit_date}</span>
              <span>{result.Assignment_last_date}</span>
              <span>{result.validity}</span>

              {/* Add more spans here for other data */}
            </ResultRow>
          </ResultContainer>
        ))}
        <Footer />
      </PageContainer>
      <ColorInversionFooter />
    </>
  );
};

export default ViewResultsPage;
