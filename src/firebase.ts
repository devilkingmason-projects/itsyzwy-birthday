import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3UwZTZpRewwU6w0M61A98pE4P__8ZYNU",
  authDomain: "itsyzwy-birthday.firebaseapp.com",
  projectId: "itsyzwy-birthday",
  storageBucket: "itsyzwy-birthday.firebasestorage.app",
  messagingSenderId: "1086674659064",
  appId: "1:1086674659064:web:174efc32d696ff5f92fd0d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);