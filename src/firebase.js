
  import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAuIL_i6cPA_Hme_-MarFxg7wJr3QJioQA",
    authDomain: "loging-6e2a9.firebaseapp.com",
    projectId: "loging-6e2a9",
    storageBucket: "loging-6e2a9.appspot.com",
    messagingSenderId: "139176614876",
    appId: "1:139176614876:web:8fa49f41cd900127564d19",
    measurementId: "G-G3Q7ZM72MN"
      };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };