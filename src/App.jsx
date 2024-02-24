import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FeedPage from "./pages/FeedPage";
import QuestionPage from "./pages/QuestionPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<FeedPage />} />
        <Route path="/questions/:questionId" element={<QuestionPage />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
