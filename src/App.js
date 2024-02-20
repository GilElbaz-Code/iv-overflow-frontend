// App.js or your routing file
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import QuestionsFeedPage from "./pages/QuestionsFeedPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/feed" element={<QuestionsFeedPage />} />
      </Routes>
    </Router>
  );
};

export default App;
