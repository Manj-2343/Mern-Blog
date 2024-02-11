// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ||
    "AIzaSyDSiDNvI9vGOIDIjdEK0DR2yk0dZvYRTls",
  authDomain: "mern-blog-bd235.firebaseapp.com",
  projectId: "mern-blog-bd235",
  storageBucket: "mern-blog-bd235.appspot.com",
  messagingSenderId: "755088197680",
  appId: "1:755088197680:web:ca9318abbfcfbde7da05f5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
