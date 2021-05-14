import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBNpx7WXP0dsv6orOY_5dDaIkVNOLPL-Cw",
  authDomain: "lets-meet-eeab4.firebaseapp.com",
  projectId: "lets-meet-eeab4",
  storageBucket: "lets-meet-eeab4.appspot.com",
  messagingSenderId: "1087674829484",
  appId: "1:1087674829484:web:2fd18b4d44ede84066ed09",
  measurementId: "G-VQWEYT2ZXP"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const database=firebaseApp.firestore();

export default database;