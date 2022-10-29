// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX_OX4e21cvEJf5LLsgE2urg2viykWwdk",
  authDomain: "news-portal-fabdc.firebaseapp.com",
  projectId: "news-portal-fabdc",
  storageBucket: "news-portal-fabdc.appspot.com",
  messagingSenderId: "18488103933",
  appId: "1:18488103933:web:21dbd7c4250b7c6a797f94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;