import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import QuestionsFeedPage from "./pages/QuestionFeedPage";
import QuestionDetailsPage from "./pages/QuestionDetailsPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/questions" element={<QuestionsFeedPage />} />
        <Route
          path="/questions/:questionId"
          element={<QuestionDetailsPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
