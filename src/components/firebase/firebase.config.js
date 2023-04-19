// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHNYa2_QDtcWlaxqgfvQjVsabGIedk07Q",
  authDomain: "ema-jhon-df4e5.firebaseapp.com",
  projectId: "ema-jhon-df4e5",
  storageBucket: "ema-jhon-df4e5.appspot.com",
  messagingSenderId: "559640580125",
  appId: "1:559640580125:web:4368f586e251f232e076f4",
  measurementId: "G-1BR8H4L43R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;