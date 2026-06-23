import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0mEXO4fk-_aPy8TDKRAReabire9f4tR0",
  authDomain: "lumiere-studio-1c5db.firebaseapp.com",
  projectId: "lumiere-studio-1c5db",
  storageBucket: "lumiere-studio-1c5db.firebasestorage.app",
  messagingSenderId: "866395561711",
  appId: "1:866395561711:web:ef1f3e1a709b4a1919851a"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
