// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD9RnuJ18udUh_JkIxd9xGvx9mPwVxIOcc",
    authDomain: "carsrent-2233e.firebaseapp.com",
    projectId: "carsrent-2233e",
    storageBucket: "carsrent-2233e.firebasestorage.app",
    messagingSenderId: "324023646593",
    appId: "1:324023646593:web:e7d05c64e738fb0fbf5080",
    measurementId: "G-D9CTQFJ429",
  };

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export  { db };













