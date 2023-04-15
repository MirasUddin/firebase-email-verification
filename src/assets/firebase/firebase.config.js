// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqV4UKXTqAVzURgvMmFqa1jBRIkisYZn0",
  authDomain: "email-password-auth-a9e29.firebaseapp.com",
  projectId: "email-password-auth-a9e29",
  storageBucket: "email-password-auth-a9e29.appspot.com",
  messagingSenderId: "695674769380",
  appId: "1:695674769380:web:e96ddcc98219d9328641f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;