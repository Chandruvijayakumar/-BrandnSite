// src/pages/Support.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Import the App.css file to apply styles

const Support = () => {
  const navigate = useNavigate();

  return (
    <div className="support-container">
      <h2 className="support-title">Support</h2>
      <p className="support-subtitle">For support, please log in.</p>
      <button className="support-button" onClick={() => navigate("/login")}>
        Go to Login
      </button>
    </div>
  );
};

export default Support;
