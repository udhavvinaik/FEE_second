// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg0x1kyfBYtcCTko5Baw5QYyAfdIMm0do",
  authDomain: "feesecond-8e228.firebaseapp.com",
  projectId: "feesecond-8e228",
  storageBucket: "feesecond-8e228.appspot.com",
  messagingSenderId: "410099777413",
  appId: "1:410099777413:web:5748792665f045249d0eec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;