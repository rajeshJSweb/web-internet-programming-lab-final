// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-nznq-49dKk7wLc7dguJej5XqSYdb-8Y",
  authDomain: "simple-login-ui-92980.firebaseapp.com",
  projectId: "simple-login-ui-92980",
  storageBucket: "simple-login-ui-92980.appspot.com",
  messagingSenderId: "1062019897591",
  appId: "1:1062019897591:web:3b18b9f63dd04378cb9bf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;