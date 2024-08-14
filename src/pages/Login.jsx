// src/pages/Login.jsx
import React, { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebaseConfig";

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in with Google:", result.user);
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log("reCAPTCHA solved");
        },
        "expired-callback": () => {
          console.log("reCAPTCHA expired");
        },
      },
      auth
    );
  };

  const handleSendOtp = async () => {
    setUpRecaptcha();
    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        window.recaptchaVerifier
      );
      setVerificationId(confirmationResult.verificationId);
      console.log("OTP sent");
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential);
      console.log("Phone number verified");
      navigate("/");
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  useEffect(() => {
    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
      }
    };
  }, []);

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="card-content front">
          <h2>Login</h2>
          <button onClick={handleGoogleSignIn} className="login-button">
            Sign in with Google
          </button>
          <div id="recaptcha-container"></div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={handleSendOtp} className="login-button">
              Send OTP
            </button>
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button onClick={handleVerifyOtp} className="login-button">
              Verify OTP
            </button>
          </div>
        </div>
        <div className="card-content back">
          {/* Optional: Add content for the back of the card if needed */}
        </div>
      </div>
    </div>
  );
};

export default Login;
