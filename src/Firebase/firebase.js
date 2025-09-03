// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUkleVDwc94EuYz-Sb4FjEdfR_FdboU58",
  authDomain: "moviepix-4adf5.firebaseapp.com",
  projectId: "moviepix-4adf5",
  storageBucket: "moviepix-4adf5.firebasestorage.app",
  messagingSenderId: "415430768184",
  appId: "1:415430768184:web:1c40bd0136c08473ac58cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// For Auth
export const auth = getAuth(app);

// For Firestore
export const db = getFirestore(app);
