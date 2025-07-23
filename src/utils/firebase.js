// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBbypsO72jeEnkmAnpSMjrq9vkL1EKkVU",
  authDomain: "netflix-gpt-2025-4c67e.firebaseapp.com",
  projectId: "netflix-gpt-2025-4c67e",
  storageBucket: "netflix-gpt-2025-4c67e.firebasestorage.app",
  messagingSenderId: "757416514923",
  appId: "1:757416514923:web:292047f6be2eda7f74a82e",
  measurementId: "G-ZCWC2YB7GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);