// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

// Authentication
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Firestore
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    addDoc,
    collection,
    getDocs,
    updateDoc,
    deleteDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyBQ7j2A1hYTB2wDG5tuz3L99_w6FTU57iU",

    authDomain: "edukrok-5e9d1.firebaseapp.com",

    projectId: "edukrok-5e9d1",

    storageBucket: "edukrok-5e9d1.firebasestorage.app",

    messagingSenderId: "800549846114",

    appId: "1:800549846114:web:eab6f7b3de57a9a074a53b"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export {

    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,

    doc,
    getDoc,
    setDoc,

    collection,
    addDoc,
    getDocs,

    updateDoc,
    deleteDoc,

    serverTimestamp

};
