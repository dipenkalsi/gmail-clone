import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAnL-h2k_-fDYbGSV-awDMV46KDD-BVkdM",
    authDomain: "clone-f4060.firebaseapp.com",
    projectId: "clone-f4060",
    storageBucket: "clone-f4060.appspot.com",
    messagingSenderId: "589742685619",
    appId: "1:589742685619:web:b7d0591afdc891871a9fc6"
  };

export const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();