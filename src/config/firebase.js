import firebase from "firebase"
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCeXZvBfx-YS_hjF-eUBcD0mfsALbsE3OU",
    authDomain: "alimentador-fd89f.firebaseapp.com",
    projectId: "alimentador-fd89f",
    storageBucket: "alimentador-fd89f.appspot.com",
    messagingSenderId: "118264543560",
    appId: "1:118264543560:web:0d410218cf1ed85583db7d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);