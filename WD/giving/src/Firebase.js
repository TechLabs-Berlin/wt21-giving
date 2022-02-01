// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBoWHmBxooDcKPR46umHYPeiILk4OgDBKQ",
  authDomain: "giving-e14dd.firebaseapp.com",
  databaseURL: "https://giving-e14dd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "giving-e14dd",
  storageBucket: "giving-e14dd.appspot.com",
  messagingSenderId: "318536562738",
  appId: "1:318536562738:web:8055646c60a153493fe42b",
  measurementId: "G-FP7GQM4Z1R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);