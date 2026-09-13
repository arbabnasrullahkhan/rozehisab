import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore, enableIndexedDbPersistence, collection, addDoc, getDocs, query, where, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyA96woK4KuQtIHWWGGF8b556ea20XPZ76w",
    authDomain: "roz-e-hisab.firebaseapp.com",
    projectId: "roz-e-hisab",
    storageBucket: "roz-e-hisab.firebasestorage.app",
    messagingSenderId: "776423119730",
    appId: "1:776423119730:web:19c78561f4826224771beb",
    measurementId: "G-17Q9D41WNR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Enable Offline Data (Offline-First Capability)
enableIndexedDbPersistence(db).catch((err) => {
    console.warn("Offline persistence not enabled:", err.code);
});

export { auth, db, provider, collection, addDoc, getDocs, query, where, orderBy, serverTimestamp, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut };