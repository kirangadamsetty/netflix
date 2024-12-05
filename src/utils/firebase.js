// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR5ovDmh3i75CYLJnWUsv4D3t9ckmR_Q8",
  authDomain: "netflix-67bce.firebaseapp.com",
  projectId: "netflix-67bce",
  storageBucket: "netflix-67bce.firebasestorage.app",
  messagingSenderId: "400754687616",
  appId: "1:400754687616:web:6e6ca4a6f67f985a9c7065"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
