import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../navbar";
import Footer from "./Footer";
import { Grid } from "@mui/material"; // Import Grid component from Material-UI
import Slide from "@mui/material/Slide"; // Import Slide component from Material-UI

const PageContainer = styled.div`
  background-color: #64b5f6;
  padding: 20px;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AcceptAssignmentPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust delay time as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Slide direction="down" in={!isLoading} timeout={1000} unmountOnExit lazy>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <PageContainer>
            {!isLoading && <Navbar />}

            <h2>Accept Assignment</h2>

            {!isLoading && (
              <FormContainer>
                <InputGroup>
                  <Label>Assignment Name:</Label>
                  <Input type="text" placeholder="Enter assignment name" />
                </InputGroup>
                <InputGroup>
                  <Label>Accepting Date:</Label>
                  <Input type="date" />
                </InputGroup>
                <InputGroup>
                  <Label>Last Date to Accept:</Label>
                  <Input type="date" />
                </InputGroup>
                <Button>Submit</Button>
                <div align="center"></div>
              </FormContainer>
            )}
          </PageContainer>
          {!isLoading && <Footer />}
        </Grid>
      </Slide>
    </>
  );
};

export default AcceptAssignmentPage;
