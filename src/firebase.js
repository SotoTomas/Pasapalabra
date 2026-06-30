// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrcoPwerFmNbzl6o4uvSw0qt1idkqGa5k",
  authDomain: "pasapalabra-arte.firebaseapp.com",
  projectId: "pasapalabra-arte",
  storageBucket: "pasapalabra-arte.firebasestorage.app",
  messagingSenderId: "505832108957",
  appId: "1:505832108957:web:7e67c679a804e86d71f574",
  measurementId: "G-7D7TXKK788"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);