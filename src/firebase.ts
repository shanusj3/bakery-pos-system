import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from "firebase/auth";
// import "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBdhQmh7HDtL123P4bxQpdXRFqm-T1u744",
    authDomain: "baked-billing.firebaseapp.com",
    projectId: "baked-billing",
    storageBucket: "baked-billing.appspot.com",
    messagingSenderId: "202547837986",
    appId: "1:202547837986:web:40a27e1bd87911ae775e7b",
    measurementId: "G-5WRFFC12K3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// export const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);