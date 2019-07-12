import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBnfWkOuWkXzy7cT-c6bWbQcha-QjRzLbU",
    authDomain: "raman-fashion.firebaseapp.com",
    databaseURL: "https://raman-fashion.firebaseio.com",
    projectId: "raman-fashion",
    storageBucket: "",
    messagingSenderId: "275734803524",
    appId: "1:275734803524:web:6419504ae88a7a16"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    'prompt': 'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;