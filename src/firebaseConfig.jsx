
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCxZNmf2A-pxmgJaLO6kBr2VcCEJsRIApk",
    authDomain: "lab-217b8.firebaseapp.com",
    projectId: "lab-217b8",
    storageBucket: "lab-217b8.appspot.com",
    messagingSenderId: "730047333788",
    appId: "1:730047333788:web:21b6c70a73bd6ec6d57459",
    measurementId: "G-2S3P0PQH46"
  
  };
  

// Initialize Firebase

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH=getAuth(FIREBASE_APP)
export const db=getFirestore(FIREBASE_APP)