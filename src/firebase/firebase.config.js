// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS-SZX-qjdhyOX6qAOyKD1CGoKpKaJf-A",
    authDomain: "book-buffet-new.firebaseapp.com",
    projectId: "book-buffet-new",
    storageBucket: "book-buffet-new.appspot.com",
    messagingSenderId: "233473932684",
    appId: "1:233473932684:web:01ce0f7c60a5488d61eaa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth