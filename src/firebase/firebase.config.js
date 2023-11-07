// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZyn3iHA6SVbN7zID8Zyb22i_y--C07-w",
    authDomain: "book-buffet-project.firebaseapp.com",
    projectId: "book-buffet-project",
    storageBucket: "book-buffet-project.appspot.com",
    messagingSenderId: "877602028466",
    appId: "1:877602028466:web:31f7c9f3f340699bcac2ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth