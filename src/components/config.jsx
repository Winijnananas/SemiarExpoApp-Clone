// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9eXiNQD_vuRYZsvoihSMCfFwtOl9Y_-E",
  authDomain: "semiarauth.firebaseapp.com",
  projectId: "semiarauth",
  storageBucket: "semiarauth.appspot.com",
  messagingSenderId: "983002593580",
  appId: "1:983002593580:web:db6e4522ebac23474c1489"
};
// if(!firebase.app.lemgth){
//   firebase.initializeApp(firebaseConfig)
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const db = firebase.firestore();

// const usersCollection = db.collection("users");
// firebase.initializeApp(firebaseConfig);

//Initialize FireStore
export const db = getFirestore(app);


//Initialize Authentication
export const auth = getAuth(app);
