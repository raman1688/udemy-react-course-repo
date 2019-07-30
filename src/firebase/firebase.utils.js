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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;
      const userRef = firestore.doc(`/users/${userAuth.uid}`);
      const snapshot = await userRef.get();
      if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user ', error);
        }
      }
      return userRef;
  }

  export const addCollectionandDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
    return await batch.commit();
  }

  export const convertCollectionsSnapshotToMap = (collectionSnapshot) => {
    const transformedCollection = collectionSnapshot.docs.map(doc => {
      const {title, items} = doc.data();
      return {
        id: doc.id,
        routeName: encodeURI(title.toLowerCase()),
        title,
        items
      }
    });
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    } , {});

  }

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged( userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    });
  }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({
    'prompt': 'select_account'
  });

  export default firebase;