import './app.css'
import App from './App.svelte'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhVzIbyS8zG1Su0xTTZ1jbCqLkAO_HMm0",
  authDomain: "personal-website-46a49.firebaseapp.com",
  projectId: "personal-website-46a49",
  storageBucket: "personal-website-46a49.appspot.com",
  messagingSenderId: "258594875840",
  appId: "1:258594875840:web:c7217f867527bb70ad8025",
  measurementId: "G-XQ3SX9PY6P"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const app = new App({
  target: document.getElementById('app')
})

export default app
