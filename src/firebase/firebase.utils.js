import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDW1ZT1k3TpvQUEftiQ4tjp-u1_OGM_1WU",
    authDomain: "crwn-db-84021.firebaseapp.com",
    projectId: "crwn-db-84021",
    storageBucket: "crwn-db-84021.appspot.com",
    messagingSenderId: "96337333854",
    appId: "1:96337333854:web:97af79990f01b692e92ecf",
    measurementId: "G-TQRHG6FV9Z"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ pormpt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;