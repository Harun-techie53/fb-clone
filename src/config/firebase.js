// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAtUxIxH5eaIjTOyTs6-Kqea9NJpgrHMrg",
    authDomain: "facebook-clone-1355e.firebaseapp.com",
    projectId: "facebook-clone-1355e",
    storageBucket: "facebook-clone-1355e.appspot.com",
    messagingSenderId: "404253468600",
    appId: "1:404253468600:web:ec399ddf0e23aaf6cd514d",
    measurementId: "G-4B87HT81ZF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};

export default db;