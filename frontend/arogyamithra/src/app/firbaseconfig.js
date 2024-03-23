// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4npgYmS_hPMRTQU9UX3l0slIiewVLgBo",
  authDomain: "arogyamitra-be29f.firebaseapp.com",
  projectId: "arogyamitra-be29f",
  storageBucket: "arogyamitra-be29f.appspot.com",
  messagingSenderId: "651513819179",
  appId: "1:651513819179:web:51bb2d01c3eeb08081ba6e",
  measurementId: "G-EC6JCCMXWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app}