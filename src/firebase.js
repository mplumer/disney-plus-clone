import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBn6xGdtrvhsAv6vqATIXaBhZCLoySar9M",
  authDomain: "not-disney-plus.firebaseapp.com",
  databaseURL: "https://not-disney-plus-default-rtdb.firebaseio.com",
  projectId: "not-disney-plus",
  storageBucket: "not-disney-plus.appspot.com",
  messagingSenderId: "817021249854",
  appId: "1:817021249854:web:0a2d87d70d25f9e421646f",
  measurementId: "G-HWLR3Z6MME"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const analytics = getAnalytics(app);

export { auth, provider, storage, analytics };
export default db;
