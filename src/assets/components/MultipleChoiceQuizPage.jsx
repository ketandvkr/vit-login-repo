import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Box,
} from "@mui/material";
import ColorInversionFooter from "./ColorInversionFooter";
import Navbar from "../navbar";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  // Add more questions as needed
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff6f00",
    },
  },
});

const MultipleChoiceQuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [timeUp, setTimeUp] = useState(false);

  // Timer effect
  useEffect(() => {
    if (timeLeft === 0 || submitted) {
      setTimeUp(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  // Handle option select
  const handleOptionSelect = (option) => {
    if (!submitted) {
      setSelectedOptions({
        ...selectedOptions,
        [currentQuestionIndex]: {
          selected: option,
          correct: option === questions[currentQuestionIndex].correctAnswer,
        },
      });
    }
  };

  // Handle next question
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  // Handle submission
  const handleSubmit = () => {
    setSubmitted(true);
    // Calculate score
    let newScore = 0;
    for (const key in selectedOptions) {
      if (selectedOptions[key]?.correct) {
        newScore++;
      }
    }
    setScore(newScore);
  };

  // Check if question is submitted
  const isQuestionSubmitted = () => {
    return submitted || selectedOptions[currentQuestionIndex];
  };

  // Format time
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        <div style={{ padding: "20px" }}>
          <Typography variant="h4" gutterBottom>
            Multiple Choice Quiz
          </Typography>
          <Box width={100} textAlign="center" boxShadow={10} p={2}>
            <Typography
              variant="body1"
              gutterBottom
              border={1}
              borderRadius={1}
            >
              Time Left: {formatTime(timeLeft)}
            </Typography>
          </Box>

          <Card
            variant="outlined"
            style={{
              marginTop: "20px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <CardContent style={{ padding: "20px" }}>
              <Typography variant="body1">
                {questions[currentQuestionIndex].question}
              </Typography>
              <RadioGroup
                name={`question_${currentQuestionIndex}`}
                value={selectedOptions[currentQuestionIndex]?.selected || ""}
                onChange={(event) => handleOptionSelect(event.target.value)}
                disabled={submitted || timeUp}
              >
                {questions[currentQuestionIndex].options.map(
                  (option, optionIndex) => (
                    <FormControlLabel
                      key={optionIndex}
                      value={option}
                      control={<Radio />}
                      label={option}
                      disabled={isQuestionSubmitted() || timeUp}
                    />
                  )
                )}
              </RadioGroup>
              {isQuestionSubmitted() && (
                <Typography
                  variant="body2"
                  style={{
                    color: selectedOptions[currentQuestionIndex]?.correct
                      ? "green"
                      : "red",
                  }}
                >
                  {`Your answer: ${
                    selectedOptions[currentQuestionIndex]?.selected ||
                    "No answer"
                  }`}
                </Typography>
              )}
            </CardContent>
          </Card>
          <div style={{ marginTop: "20px" }}>
            {currentQuestionIndex < questions.length - 1 && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNextQuestion}
                disabled={timeUp}
              >
                Next
              </Button>
            )}
            {currentQuestionIndex === questions.length - 1 && !submitted && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={timeUp}
              >
                Submit All
              </Button>
            )}
          </div>
          {timeUp && (
            <Alert severity="info" style={{ marginTop: "20px" }}>
              Time's up! You can no longer proceed.
            </Alert>
          )}
          <div style={{ marginTop: "20px" }}>
            {submitted && <Typography variant="h6">Score: {score}</Typography>}
          </div>
        </div>
      </ThemeProvider>
      <ColorInversionFooter />
    </>
  );
};

export default MultipleChoiceQuizPage;
