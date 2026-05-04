import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJ-4_kA9Lc_F697mkoKKHtd9HFKDqkPns",
  authDomain: "wardi115.firebaseapp.com",
  projectId: "wardi115",
  storageBucket: "wardi115.firebasestorage.app",
  messagingSenderId: "309073220807",
  appId: "1:309073220807:web:e9cac3503fd2919e185ae2",
  measurementId: "G-8JJWRX85GL",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
