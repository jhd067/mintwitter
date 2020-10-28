import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB8uTuCsOtc1yS5nTGUJkwThmenj2ADV_o",
    authDomain: "twitter-app-c34ce.firebaseapp.com",
    databaseURL: "https://twitter-app-c34ce.firebaseio.com",
    projectId: "twitter-app-c34ce",
    storageBucket: "twitter-app-c34ce.appspot.com",
    messagingSenderId: "614515492118",
    appId: "1:614515492118:web:f944e1ce1690747081fc37"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {
    db,
    googleAuthProvider,
    firebase
}