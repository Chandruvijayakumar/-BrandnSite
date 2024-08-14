// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Support from "./pages/Support";
import Login from "./pages/Login";
import CreateLogo from "./pages/CreateLogo"; // Import the CreateLogo component
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-logo" element={<CreateLogo />} />
      </Routes>
    </Router>
  );
}

export default App;
