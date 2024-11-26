import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCY7hjCYwIVT_HT-ZF02r5QFmUANVZ1lv8",
  authDomain: "to-do-list-7645a.firebaseapp.com",
  projectId: "to-do-list-7645a",
  storageBucket: "to-do-list-7645a.firebasestorage.app",
  messagingSenderId: "453803789380",
  appId: "1:453803789380:web:0f783c59f02c72c54bc011",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
