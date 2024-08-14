// src/components/GoogleSignIn.js
import React from "react";
import { auth, provider, signInWithPopup } from "../firebaseConfig";

const GoogleSignIn = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // Handle the result here, e.g., store user information
      console.log("User signed in:", result.user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return <button onClick={handleGoogleSignIn}>Sign in with Google</button>;
};

export default GoogleSignIn;
