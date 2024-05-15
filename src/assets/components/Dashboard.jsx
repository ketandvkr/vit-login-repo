import React, { useState } from "react";
import Navbar from "../navbar";
import { NavLink } from "react-router-dom";

import {
  ThemeProvider,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "./style.css"; // Import the CSS file for styles

import ColorInversionFooter from "./ColorInversionFooter";

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", // Adjust primary color as needed
    },
    secondary: {
      main: "#3f51b5", // Adjust secondary color as needed
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Adjust font family as needed
  },
  backgroundColor: {
    paper: "#f5f5f5",
    border: "1px solid black", // Adjust paper background color as needed
  },
});

const mockStudents = [
  {
    SrNumber: 1,
    StudentName: "Student Name 1",
    Title: "Title 1",
    Marks: 85,
    Remarks: "Good",
  },
  {
    SrNumber: 2,
    StudentName: "Student Name 2",
    Title: "Title 2",
    Marks: 90,
    Remarks: "Excellent",
  },
  {
    SrNumber: 3,
    StudentName: "Student Name 3",
    Title: "Title 3",
    Marks: 75,
    Remarks: "Average",
  },
  {
    SrNumber: 4,
    StudentName: "Student Name 4",
    Title: "Title 4",
    Marks: 80,
    Remarks: "Above Average",
  },
  {
    SrNumber: 5,
    StudentName: "Student Name 5",
    Title: "Title 5",
    Marks: 95,
    Remarks: "Excellent",
  },
  {
    SrNumber: 6,
    StudentName: "Student Name 6",
    Title: "Title 6",
    Marks: 70,
    Remarks: "Average",
  },
];

const Dashboard = () => {
  const [companyResult, setCompanyResult] = useState("");
  const [assignmentType, setAssignmentType] = useState("");

  const handleCompanyResultChange = (event) => {
    setCompanyResult(event.target.value);
  };

  const handleAssignmentTypeChange = (event) => {
    setAssignmentType(event.target.value);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Live Exam - Assignment Details
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          style={{
                            border: "1px solid black",
                            fontWeight: "bold",
                          }}
                        >
                          Sr.no
                        </TableCell>
                        <TableCell
                          style={{
                            border: "1px solid black",
                            fontWeight: "bold",
                          }}
                        >
                          Company Name
                        </TableCell>
                        <TableCell
                          style={{
                            border: "1px solid black",
                            fontWeight: "bold",
                          }}
                        >
                          Assignment detail
                        </TableCell>
                        <TableCell
                          style={{
                            border: "1px solid black",
                            fontWeight: "bold",
                          }}
                        >
                          Date
                        </TableCell>
                        <TableCell
                          style={{
                            border: "1px solid black",
                            fontWeight: "bold",
                          }}
                        >
                          Validity
                        </TableCell>
                        <TableCell
                          style={{
                            border: "1px solid black",
                            fontWeight: "bold",
                          }}
                        >
                          Accept
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {mockStudents.map((student) => (
                        <TableRow key={student.SrNumber}>
                          <TableCell style={{ border: "1px solid black" }}>
                            {student.SrNumber}
                          </TableCell>
                          <TableCell style={{ border: "1px solid black" }}>
                            {student.StudentName}
                          </TableCell>
                          <TableCell style={{ border: "1px solid black" }}>
                            {student.Title}
                          </TableCell>
                          <TableCell style={{ border: "1px solid black" }}>
                            {student.Marks}
                          </TableCell>
                          <TableCell style={{ border: "1px solid black" }}>
                            {student.Remarks}
                          </TableCell>
                          <TableCell style={{ border: "1px solid black" }}>
                            <Button
                              variant="contained"
                              color="primary"
                              component={NavLink}
                              to="/multiplechoice"
                            >
                              Accept
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Result Summary
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          style={{
                            border: "1px solid black",
                            fontWeight: "bold",
                          }}
                        >
                          Sr.no
                        </TableCell>
                        <TableCell
                          style={{
                            border: "1px solid black",
                            fontWeight: "bold",
                          }}
                        >
                          Student Name
                        </TableCell>
                        <TableCell
                          style={{
                            border: "1px solid black",
                            fontWeight: "bold",
                          }}
                        >
                          Assignment Detail
                        </TableCell>
                        <TableCell
                          style={{
                            border: "1px solid black",
                            fontWeight: "bold",
                          }}
                        >
                          Marks
                        </TableCell>
                        <TableCell
                          style={{
                            border: "1px solid black",
                            fontWeight: "bold",
                          }}
                        >
                          View Result
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {mockStudents.map((student) => (
                        <TableRow key={student.SrNumber}>
                          <TableCell style={{ border: "1px solid black" }}>
                            {student.SrNumber}
                          </TableCell>
                          <TableCell style={{ border: "1px solid black" }}>
                            {student.StudentName}
                          </TableCell>
                          <TableCell style={{ border: "1px solid black" }}>
                            {student.Title}
                          </TableCell>
                          <TableCell style={{ border: "1px solid black" }}>
                            {student.Marks}
                          </TableCell>
                          <TableCell style={{ border: "1px solid black" }}>
                            <Button
                              variant="contained"
                              color="primary"
                              component={NavLink}
                              to="/view-result"
                            >
                              Viwe result
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
      <ColorInversionFooter />
    </>
  );
};

export default Dashboard;
