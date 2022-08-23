import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBaS5okE14IiVNAk8AXfTuIvnPKMVWNdj4",
    authDomain: "newsapp-80780.firebaseapp.com",
    databaseURL: "https://newsapp-80780-default-rtdb.firebaseio.com",
    projectId: "newsapp-80780",
    storageBucket: "newsapp-80780.appspot.com",
    messagingSenderId: "211921173493",
    appId: "1:211921173493:web:ffc3764e1c615f10ad3ebc"
  };



  firebase.initializeApp(firebaseConfig);

  export default firebase;