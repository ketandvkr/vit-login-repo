import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./assets/components/Layout";
import HomePage from "./assets/components/HomePage";
import ContactPage from "./assets/components/Contact";
import LogReg from "./assets/components/LogReg";
import DashboardPage from "./assets/components/Dashboard";
import PasswordResetForm from "./assets/components/PasswordResetForm";
import ResponsiveDrawer from "./assets/components/ResponsiveDrawer";
import UpcomingAssignmentsPage from "./assets/components/UpcomingAssignmentsPage";
import PreviousPerformancePage from "./assets/components/PreviousPerformancePage"; // Import the PreviousPerformancePage component
import AcceptAssignmentPage from "./assets/components/AcceptAssignmentPage";
import ViewResultsPage from "./assets/components/ViewResultsPage";
import MultipleChoiceQuizPage from "./assets/components/MultipleChoiceQuizPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogReg />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
        <Route path="/LogReg" element={<LogReg />} />
        <Route path="/ResponsiveDrawer" element={<ResponsiveDrawer />} />
        <Route
          path="//upcoming-assignments"
          element={<UpcomingAssignmentsPage />}
        />
        <Route path="/accept-assignment" element={<AcceptAssignmentPage />} />
        <Route
          path="/previous-performance" // Corrected path
          element={<PreviousPerformancePage />}
        />
        <Route path="/password-reset" element={<PasswordResetForm />} />

        <Route path="/view-result" element={<ViewResultsPage />} />

        <Route path="/multiplechoice" element={<MultipleChoiceQuizPage />} />

        <Route path="/layout" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<HomePage />} />
        </Route>

        {/* Add a standalone route for "/contact" */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
