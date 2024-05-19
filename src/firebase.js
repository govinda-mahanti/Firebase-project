// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBXk06NqfYoApOGTDZ5tpIMetGFKPQVYC8",
    authDomain: "app-efe42.firebaseapp.com",
    projectId: "app-efe42",
    storageBucket: "app-efe42",
    messagingSenderId: "66570595019",
    appId: "1:66570595019:web:9703a32e0439980541c94e",
    databaseURL: "https://app-efe42-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("signInWithPopup result:", result);  // Detailed logging
        if (result) {
            return result;
        } else {
            throw new Error('No result from signInWithPopup');
        }
    } catch (error) {
        console.error("Error during sign in with Google", error);
        throw error;
    }
};

const signUpWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        console.error("Error signing up with email and password", error);
        throw error;
    }
};

export { app, auth, db, signInWithGoogle, signUpWithEmailAndPassword };
export default app;
