// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI-qVylw7aGp93FrY7c4MJvYv55n4WzVQ",
  authDomain: "text-analyser-afb0e.firebaseapp.com",
  projectId: "text-analyser-afb0e",
  storageBucket: "text-analyser-afb0e.appspot.com",
  messagingSenderId: "516424540700",
  appId: "1:516424540700:web:4c7dbba9df702ac31635d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
