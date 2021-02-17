import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { initialize } from 'workbox-google-analytics';

const config = {
  apiKey: "AIzaSyBhGn7kgLsq-2Ojsvbr8NzNQVyFHLmaryw",
  authDomain: "crwn-db-ab5df.firebaseapp.com",
  projectId: "crwn-db-ab5df",
  storageBucket: "crwn-db-ab5df.appspot.com",
  messagingSenderId: "1026299558695",
  appId: "1:1026299558695:web:b1de80d523595f4ff2c702",
  measurementId: "G-P2HZKFMH64"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;