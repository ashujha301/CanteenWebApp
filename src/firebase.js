import firebase from "firebase/app";
import "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkZ7qqzG35tbRDbHyMhKtG-FYZJVfhiEc",
  authDomain: "otp-login-75569.firebaseapp.com",
  projectId: "otp-login-75569",
  storageBucket: "otp-login-75569.appspot.com",
  messagingSenderId: "967724901724",
  appId: "1:967724901724:web:0601ad57986a2585d84d99",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// var firebaseConfig = {
//     apiKey: "",
//     authDomain: "",
//     projectId: "",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: ""
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

export default firebase;
