import { initializeApp } from "firebase/app"
import {
    getFirestore,
    doc,
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

export const streamRoom = (id, observer) => {
    const db = getFirestore();
    return onSnapshot(doc(db, "rooms", id), observer);
}

export const streamDeck = (id, observer) => {
    const db = getFirestore();
    return onSnapshot(doc(db, "decks", id), observer);
}

export const signUp = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
}

export const signIn = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
}

export const streamAuth = (observer) => {
    const auth = getAuth();
    return onAuthStateChanged(auth, observer);
}

export const getCurrentUser = () => {
    const auth = getAuth();
    return auth.currentUser;
}

export const signOut = () => {
    const auth = getAuth();
    return auth.signOut();
}