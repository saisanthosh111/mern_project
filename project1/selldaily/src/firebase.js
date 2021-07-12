import firebase from 'firebase/app';
// import "firebase/auth"
require('firebase/auth');

const firebaseConfig = {
  apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'XXXXXXXXXXXXXXXXXXXXXXXX',
  projectId: 'XXXXXXXXXXXXXXXXXXXXX',
  storageBucket: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  messagingSenderId: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
  appId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig)
//   }

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
