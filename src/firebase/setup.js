import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBnT689fPAzx4UAv7ySS_TgSURcc3xWOOg",
  authDomain: "plantsbeauty-a37b9.firebaseapp.com",
  projectId: "plantsbeauty-a37b9",
  storageBucket: "plantsbeauty-a37b9.firebasestorage.app",
  messagingSenderId: "584731514027",
  appId: "1:584731514027:web:2be70899b8b85e789b53ee",
  measurementId: "G-6YPQ2K9ZSN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);