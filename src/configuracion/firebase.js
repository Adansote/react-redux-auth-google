
//import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore"
import 'firebase/storage';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCjJdI5XcExb-FXHytbUqvHwBzUN8QxwKA",
  authDomain: "react2-redux-auth-2022.firebaseapp.com",
  projectId: "react2-redux-auth-2022",
  storageBucket: "react2-redux-auth-2022.appspot.com",
  messagingSenderId: "595642340500",
  appId: "1:595642340500:web:bdc38a464d9c7a52da5081"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const auth = getAuth(app)
//export { firebaseConfig, auth, app };

firebase.initializeApp(firebaseConfig);

// Obtener instancia de autenticación
export const auth = firebase.auth();

const  db = firebase.firestore()
//const storage = getStorage();
//const storage = firebase.firestore()
const storage = firebase.storage()
export { db, storage };
export default firebase;

