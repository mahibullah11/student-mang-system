// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQBpIsa6KFA5fI_eQQ6pANxx2YiJPLveE",
  authDomain: "studnetmanasystem.firebaseapp.com",
  projectId: "studnetmanasystem",
  storageBucket: "studnetmanasystem.appspot.com",
  messagingSenderId: "714938149536",
  appId: "1:714938149536:web:3c744896ec843e1b52f7c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}