import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBvwygtmMVnp4U7ObztDT1A09lqJr1evSo",
    authDomain: "poll-nation-app.firebaseapp.com",
    databaseURL: "https://poll-nation-app-default-rtdb.firebaseio.com",
    projectId: "poll-nation-app",
    storageBucket: "poll-nation-app.appspot.com",
    messagingSenderId: "856033133577",
    appId: "1:856033133577:web:2b4ef9861644a3a1e0a4d8",
    measurementId: "G-T81M04WKF3"};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
