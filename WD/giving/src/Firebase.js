import firebase from 'firebase';

const firebaseConfig = {
  authDomain: "giving-e14dd.firebaseapp.com",
  databaseURL: "https://giving-e14dd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "giving-e14dd",
  storageBucket: "giving-e14dd.appspot.com",
  messagingSenderId: "318536562738",
  appId: "1:318536562738:web:8055646c60a153493fe42b",
  measurementId: "G-FP7GQM4Z1R"
};

firebase.initializeApp(firebaseConfig);

export default firebase;