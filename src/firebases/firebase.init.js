// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOc4dMe4UAeKHKvz0F6JaNmdUn0b7xcLs",
  authDomain: "and-password.firebaseapp.com",
  projectId: "and-password",
  storageBucket: "and-password.appspot.com",
  messagingSenderId: "1050007225942",
  appId: "1:1050007225942:web:de26d1f06727c4673c5df7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;