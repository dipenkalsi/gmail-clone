import firebase from "firebase"
import { firebaseApp } from "./firebaseInit";
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()
  const db=firebaseApp.firestore()
  export {db , auth , provider,}
