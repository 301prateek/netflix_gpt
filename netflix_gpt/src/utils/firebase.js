// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfyvob6pudVw18A7nD_Mxq_5gaW0dLwSg",
  authDomain: "netflixgpt-f9d78.firebaseapp.com",
  projectId: "netflixgpt-f9d78",
  storageBucket: "netflixgpt-f9d78.firebasestorage.app",
  messagingSenderId: "33028192760",
  appId: "1:33028192760:web:6c736c72c52aa730303e0d",
  measurementId: "G-S36K7M3HZ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//authentication
import { getAuth, onAuthStateChanged } from "firebase/auth";
export const auth = getAuth(app);
