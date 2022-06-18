// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCS4OxJsoDjKe_sqJwJRGngeTPb_aWYFok",
    authDomain: "book-buddy-a6537.firebaseapp.com",
    projectId: "book-buddy-a6537",
    storageBucket: "book-buddy-a6537.appspot.com",
    messagingSenderId: "482883699973",
    appId: "1:482883699973:web:15f721a05ebf027837a36c"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;