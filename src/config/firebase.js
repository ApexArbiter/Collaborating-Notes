// firebase.js (or config/firebase.js)
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDuAjSmbGEAVzEKgIRhp89y0KNHWgW_n7Q",
    authDomain: "fir-auth-4d276.firebaseapp.com",
    projectId: "fir-auth-4d276",
    storageBucket: "fir-auth-4d276.appspot.com",
    messagingSenderId: "834551167410",
    appId: "1:834551167410:web:a5f8afb733b77234a48cab",
    measurementId: "G-3FDVCQDQKX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

// Correct export syntax for ES modules
export { analytics, auth, firestore, storage };
