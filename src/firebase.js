import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyBQb4Qpqv8IuwVfogZMFstGzraZMm-4L3I",
  authDomain: "canteenwebapp-f706b.firebaseapp.com",
  projectId: "canteenwebapp-f706b",
  storageBucket: "canteenwebapp-f706b.appspot.com",
  messagingSenderId: "992348472642",
  appId: "1:992348472642:web:a136609eb456e44ce5f4db",
  measurementId: "G-FVSPD6N5V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

export default app;

