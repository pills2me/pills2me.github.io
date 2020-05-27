import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyCL77U2-Ydsxi3MmPlQqZLfkTq7EBAhhic",
    authDomain: "pills2me-ac2b4.firebaseapp.com",
    databaseURL: "https://pills2me-ac2b4.firebaseio.com",
    projectId: "pills2me-ac2b4",
    storageBucket: "pills2me-ac2b4.appspot.com",
    messagingSenderId: "70010492478",
    appId: "1:70010492478:web:fd5e94755a1511af57e36f",
    measurementId: "G-BQDTNC1XZL"
};
firebase.initializeApp(config);
console.log("Firebase Initialized");

export default firebase;