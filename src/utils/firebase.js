// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { FB_KEY } from "./Constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FB_KEY,
  authDomain: "netflixgpt-76493.firebaseapp.com",
  projectId: "netflixgpt-76493",
  storageBucket: "netflixgpt-76493.appspot.com",
  messagingSenderId: "530050058505",
  appId: "1:530050058505:web:eb7f81e1e06f64e9cb2bd8",
  measurementId: "G-42WLPVHRKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();