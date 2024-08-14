import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Import the CSS file

const Support = () => {
  const navigate = useNavigate();

  return (
    <div className="support-container">
      <div className="support-card">
        <h2>Support</h2>
        <p>For support, please log in.</p>
        <button onClick={() => navigate("/login")} className="btn btn-primary">
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Support;
