
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCcjgi6lXalS50OjMsKB5l72Y707JCrAdI",
    authDomain: "chatingmaster-7bc21.firebaseapp.com",
    projectId: "chatingmaster-7bc21",
    storageBucket: "chatingmaster-7bc21.appspot.com",
    messagingSenderId: "186366274155",
    appId: "1:186366274155:web:338e5dbb7487c8873e1f2e"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };