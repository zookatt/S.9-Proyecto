import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANb1J8ydfP5ui_Ya0aGuvks5_GbAng4qs",
  authDomain: "proyecto-final-87c58.firebaseapp.com",
  projectId: "proyecto-final-87c58",
  storageBucket: "proyecto-final-87c58.appspot.com",
  messagingSenderId: "622558266564",
  appId: "1:622558266564:web:f39c85c97349343ac57591"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};