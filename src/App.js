// App.js or your routing file
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DummyPage from "./pages/DummyPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dummy" element={<DummyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
