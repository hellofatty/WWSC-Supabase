/** @format */

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrP2NU9MYfCvc9tFkB5X_4NL0ODKygHmg",
    authDomain: "wiser-website.firebaseapp.com",
    projectId: "wiser-website",
    storageBucket: "wiser-website.appspot.com",
    messagingSenderId: "536525066473",
    appId: "1:536525066473:web:fc8b2b017dbc4396136078",
    measurementId: "G-51NLPNKJX4",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// const appCheck = firebase.appCheck();
// // Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// // key is the counterpart to the secret key you set in the Firebase console.
// appCheck.activate(
//   '6LeCEA4qAAAAAFjKC1Is3IC_AnQAPS36UvBeE-5r',

//   // Optional argument. If true, the SDK automatically refreshes App Check
//   // tokens as needed.
//   true);

// init service
const projectFirestore = firebase.firestore();

// init auth
const projectAuth = firebase.auth();

// init storage
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
