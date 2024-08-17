import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNavbar from "../components/Navbar"; // Import Navbar

const CreateLogo = () => {
  const [brandName, setBrandName] = useState("");
  const [slogan, setSlogan] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSubmit = () => {
    // Store values in localStorage
    localStorage.setItem("brandName", brandName);
    localStorage.setItem("slogan", slogan);

    // Display alert
    alert("Your logo details have been submitted successfully!");

    // Reset form
    setBrandName("");
    setSlogan("");
  };

  return (
    <>
      <AppNavbar />
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
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Enter your brand name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="slogan">Slogan (optional)</label>
              <input
                type="text"
                id="slogan"
                value={slogan}
                onChange={(e) => setSlogan(e.target.value)}
                placeholder="Enter your slogan"
              />
            </div>
            <button className="btn-submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateLogo;
