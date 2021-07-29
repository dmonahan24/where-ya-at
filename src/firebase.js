import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCnCQnjaeN5QH3pYCJKEHDJcoAgmuuHE7s",
  authDomain: "where-ya-at-5e4e1.firebaseapp.com",
  projectId: "where-ya-at-5e4e1",
  storageBucket: "where-ya-at-5e4e1.appspot.com",
  messagingSenderId: "791723355629",
  appId: "1:791723355629:web:a152d8f733169592c84be4",
  measurementId: "G-7FZH025MLK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };