// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKO7_pIyHv2MMTrKaHeaWZ_EKO23j4D8Q",
  authDomain: "zineapp-a672b.firebaseapp.com",
  projectId: "zineapp-a672b",
  storageBucket: "zineapp-a672b.appspot.com",
  messagingSenderId: "471463933365",
  appId: "1:471463933365:web:2783da7444a7780a1b95fc",
  measurementId: "G-4FFH53SGQY",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
