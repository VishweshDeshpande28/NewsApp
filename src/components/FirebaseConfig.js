// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import News from "./News";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function StartFirebase(){
  const firebaseConfig = {
    apiKey: "AIzaSyBaS5okE14IiVNAk8AXfTuIvnPKMVWNdj4",
    authDomain: "newsapp-80780.firebaseapp.com",
    databaseURL: "https://newsapp-80780-default-rtdb.firebaseio.com",
    projectId: "newsapp-80780",
    storageBucket: "newsapp-80780.appspot.com",
    messagingSenderId: "211921173493",
    appId: "1:211921173493:web:ffc3764e1c615f10ad3ebc"
  };

  const Newsapp = initializeApp(firebaseConfig);
  return getDatabase(News);
}

export default StartFirebase;