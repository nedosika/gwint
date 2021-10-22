import { initializeApp } from "firebase/app"
import {
    getFirestore,
    doc,
    setDoc,
    onSnapshot
} from "firebase/firestore"
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCn4kAvi8r47hKLhIzJ5QjqmpKOom2MFNA",
    authDomain: "gwint-6b580.firebaseapp.com",
    databaseURL: "https://gwint-6b580-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gwint-6b580",
    storageBucket: "gwint-6b580.appspot.com",
    messagingSenderId: "784766108565",
    appId: "1:784766108565:web:dfe49096b45814678f6c9c",
    measurementId: "G-B8WTVZ1XC0"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export const streamRoom = (id, observer) =>
    onSnapshot(doc(db, "rooms", id), observer);

export const streamDeck = (id, observer) =>
    onSnapshot(doc(db, "decks", id), observer);

export const streamAuth = (observer) =>
    onAuthStateChanged(auth, observer);

export const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

export const signOut = () =>
    auth.signOut();

export const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

export const getCurrentUser = () =>
    auth.currentUser;

export const updateUser = (id, user) =>
    setDoc(doc(db, 'users', id), {...user});
