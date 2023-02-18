import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/database"

const firebaseConfig = {
  // apiKey: "AIzaSyA1AzIkkca6Byc8W2L5eNfZYt5wKCeUz0M",
  // authDomain: "canteenwebapp-48222.firebaseapp.com",
  // projectId: "canteenwebapp-48222",
  // storageBucket: "canteenwebapp-48222.appspot.com",
  // messagingSenderId: "4763667233",
  // appId: "1:4763667233:web:9f1769290e45f3accc4c60",
  // measurementId: "G-2MHCV8JT59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

export default app;

