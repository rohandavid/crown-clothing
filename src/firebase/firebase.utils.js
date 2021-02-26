import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA271DWy7qCUikSX-oHC1I7diPKhy_m2I4",
  authDomain: "crown-clothing-database-2927e.firebaseapp.com",
  databaseURL: "https://crown-clothing-database-2927e.firebaseio.com",
  projectId: "crown-clothing-database-2927e",
  storageBucket: "crown-clothing-database-2927e.appspot.com",
  messagingSenderId: "129529236960",
  appId: "1:129529236960:web:3017a3456f81885d21af85",
  measurementId: "G-CFRXQHBFX3"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
