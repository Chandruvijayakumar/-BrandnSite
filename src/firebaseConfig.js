// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCC_y7E-pb4zxBt_rgrbgQH4vC1C3kIN5o",
  authDomain: "brand-9d562.firebaseapp.com",
  projectId: "brand-9d562",
  storageBucket: "brand-9d562.appspot.com",
  messagingSenderId: "585088528771",
  appId: "1:585088528771:web:e8d0448679a98c0919c6b6",
  measurementId: "G-CYZL1XWPRH",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
