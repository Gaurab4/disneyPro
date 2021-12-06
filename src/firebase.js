import  firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDkgKlbxS4g-VYozhVnyYIXsqA-8tgB_ws",
  authDomain: "disney-pro-788cf.firebaseapp.com",
  projectId: "disney-pro-788cf",
  storageBucket: "disney-pro-788cf.appspot.com",
  messagingSenderId: "44908594989",
  appId: "1:44908594989:web:656df96f9cddbd18c8b5a4",
  measurementId: "G-XDK3SK6J46"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};
export default db;