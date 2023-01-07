import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkZ7qqzG35tbRDbHyMhKtG-FYZJVfhiEc",
  authDomain: "otp-login-75569.firebaseapp.com",
  projectId: "otp-login-75569",
  storageBucket: "otp-login-75569.appspot.com",
  messagingSenderId: "967724901724",
  appId: "1:967724901724:web:0601ad57986a2585d84d99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
