// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6IM2mhi_5hZjTOwVYOxIN6sWnzsu20FQ",
  authDomain: "login-8e902.firebaseapp.com",
  projectId: "login-8e902",
  storageBucket: "login-8e902.firebasestorage.app",
  messagingSenderId: "750888760175",
  appId: "1:750888760175:web:cbd06a647fd62bd0712e9a"
};

// Initialize Firebase
if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig);
}
const auth=firebase.auth();
export  {auth}