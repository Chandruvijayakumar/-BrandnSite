import React, { useState, useRef } from "react";
import {
  auth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "./firebaseConfig";

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");

  const recaptchaRef = useRef(null);

  const handleSendOTP = () => {
    const recaptcha = new RecaptchaVerifier(recaptchaRef.current, {}, auth);

    signInWithPhoneNumber(auth, phoneNumber, recaptcha)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        console.log("OTP sent");
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
      });
  };

  const handleVerifyOTP = () => {
    const credential = auth.PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );

    auth
      .signInWithCredential(credential)
      .then((result) => {
        console.log("Phone number verified:", result.user);
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
      });
  };

  return (
    <div className="text-center mt-5">
      <h2>Phone Number Authentication</h2>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handleSendOTP}>Send OTP</button>
      <div ref={recaptchaRef}></div>
      <input
        type="text"
        placeholder="Enter OTP"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />
      <button onClick={handleVerifyOTP}>Verify OTP</button>
    </div>
  );
};

export default PhoneAuth;
