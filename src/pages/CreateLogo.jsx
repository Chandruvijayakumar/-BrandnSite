import React from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import "../App.css"; // Import the App.css file

const CreateLogo = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLoginClick = () => {
    // Navigate to Gmail login page
    navigate("/login"); // Use navigate instead of history.push
  };

  return (
    <div className="create-logo-container">
      <div className="split-box">
        {/* Left Side */}
        <div className="split-left">
          <h2>Brand ID</h2>
          <p>Create your unique brand identity with ease.</p>
          <button className="btn" onClick={handleLoginClick}>
            Login with Google
          </button>
        </div>

        {/* Right Side */}
        <div className="split-right">
          <div className="form-group">
            <label htmlFor="brandName">Brand Name</label>
            <input
              type="text"
              id="brandName"
              placeholder="Enter your brand name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="slogan">Slogan (optional)</label>
            <input type="text" id="slogan" placeholder="Enter your slogan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLogo;
