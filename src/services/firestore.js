import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { doc, onSnapshot } from "firebase/firestore";

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
//
initializeApp(firebaseConfig);
// const auth = firebase.auth();
export const db = getFirestore();

export const streamRoom = (id, observer) => {
    return onSnapshot(doc(db, "rooms", id), observer);
}