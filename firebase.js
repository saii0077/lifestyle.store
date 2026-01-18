// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDb6LBmEX0vb3LfGMARtrVYmh3i2wbwrbc",
  authDomain: "lifestyle-store-98e35.firebaseapp.com",
  projectId: "lifestyle-store-98e35",
  storageBucket: "lifestyle-store-98e35.appspot.com",
  messagingSenderId: "684989971062",
  appId: "1:684989971062:web:89bac1fe98000c68323d57"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
