// FIREBASE IMPORTS

import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// YOUR FIREBASE CONFIG

const firebaseConfig = {

    apiKey: "AIzaSyBMwku1ayb7Xsx-ZP6twXnYnIbhhZgb2WM",
    authDomain: "pianofortypist.firebaseapp.com",
    projectId: "pianofortypist",

    storageBucket: "pianofortypist.firebasestorage.app",
    messagingSenderId: "239631451993",
    appId: "1:239631451993:web:4bebe5ff8799c35ca66e48",
};

// INITIALIZE

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
