import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyAFZWUbq8ILcQRvriZwFjZx2F9n17oND_w",
  authDomain: "react-fitzen-a5d29.firebaseapp.com",
  projectId: "react-fitzen-a5d29",
  storageBucket: "react-fitzen-a5d29.appspot.com",
  messagingSenderId: "843806875811",
  appId: "1:843806875811:web:e68130ce5ed34f0ada1f16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;