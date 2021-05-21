import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBn6xGdtrvhsAv6vqATIXaBhZCLoySar9M",
  authDomain: "not-disney-plus.firebaseapp.com",
  projectId: "not-disney-plus",
  storageBucket: "not-disney-plus.appspot.com",
  messagingSenderId: "817021249854",
  appId: "1:817021249854:web:915a414c26c4280821646f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
