// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzMK1tKXvcADiJOPZwFOhJJrIxpq6ufo0",
  authDomain: "netflixgptclone-bd6ad.firebaseapp.com",
  projectId: "netflixgptclone-bd6ad",
  storageBucket: "netflixgptclone-bd6ad.appspot.com",
  messagingSenderId: "726788740297",
  appId: "1:726788740297:web:96915c1d7a9e2f5984a918",
  measurementId: "G-75PCSG79K6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
