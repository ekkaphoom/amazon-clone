import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "xxxxxx",
  authDomain: "clone-xxx.firebaseapp.com",
  projectId: "clone-xxx",
  storageBucket: "clone-xxx.appspot.com",
  messagingSenderId: "451583977677",
  appId: "1:451583977677:web:11e9e1af9c0f91ad7ee184"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { db, auth };

