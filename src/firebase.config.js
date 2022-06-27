// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBg8B8NfpqzXANIdcP4FwFVfSzlKWvZTMw",
  authDomain: "house-market-app-419b6.firebaseapp.com",
  projectId: "house-market-app-419b6",
  storageBucket: "house-market-app-419b6.appspot.com",
  messagingSenderId: "1033931119695",
  appId: "1:1033931119695:web:76749b21428152885e1e3a",
  measurementId: "G-VBWH0BJ42V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()