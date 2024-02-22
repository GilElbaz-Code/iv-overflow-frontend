import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import QuestionsFeedPage from "./pages/QuestionsFeedPage";
import QuestionDetailPage from "./pages/QuestionDetailsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/feed" element={<QuestionsFeedPage />} />
        <Route
          path="/questions/:questionTitle"
          element={<QuestionDetailPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
