// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3UoeuUjnT0CwowRRcN8ZR1HEvcxqtjc0",
  authDomain: "write-match.firebaseapp.com",
  projectId: "write-match",
  storageBucket: "write-match.appspot.com",
  messagingSenderId: "135291893117",
  appId: "1:135291893117:web:dfa6fd5d24e3205ae24814",
  measurementId: "G-QLJ1JZRS4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);