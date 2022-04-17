// Import the functions you need from the SDKs you need
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAabWy_riE2IA5EZCvP2ZIBg7iqdVXlfYk",
    authDomain: "doctor-hoffman.firebaseapp.com",
    projectId: "doctor-hoffman",
    storageBucket: "doctor-hoffman.appspot.com",
    messagingSenderId: "813408011081",
    appId: "1:813408011081:web:1d7d5fee258d3ab6721098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth