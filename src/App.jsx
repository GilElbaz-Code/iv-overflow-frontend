// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import QuestionsFeedPage from './pages/QuestionFeedPage';
import QuestionDetailsPage from './pages/QuestionDetailsPage';

const App = () => {
  // You need to manage and pass the questions data to the components
  const questions = [
    // Your questions data here
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/questions" element={<QuestionsFeedPage />} />
        <Route
          path="/questions/:questionId"
          element={<QuestionDetailsPage questions={questions} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
