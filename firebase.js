import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBMwku1ayb7Xsx-ZP6twXnYnIbhhZgb2WM",
  authDomain: "pianofortypist.firebaseapp.com",
  projectId: "pianofortypist",
  storageBucket: "pianofortypist.firebasestorage.app",
  messagingSenderId: "239631451993",
  appId: "1:239631451993:web:4bebe5ff8799c35ca66e48",
  measurementId: "G-W1TLTJT9V6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { auth, db };
