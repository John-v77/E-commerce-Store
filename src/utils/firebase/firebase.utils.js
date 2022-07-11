// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuQ7fuNHJf3NqGxLiDkggqSEyG2gzjsPE",
  authDomain: "general-auth-db-app.firebaseapp.com",
  projectId: "general-auth-db-app",
  storageBucket: "general-auth-db-app.appspot.com",
  messagingSenderId: "556876488378",
  appId: "1:556876488378:web:83a3f7c51aa835e5422c83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
