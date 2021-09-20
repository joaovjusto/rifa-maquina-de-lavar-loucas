import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC7u40cYH1Zf9bxwsT1G0kG6BZGFZEvy5M",
  authDomain: "rifa-mae-de-cinco.firebaseapp.com",
  projectId: "rifa-mae-de-cinco",
  storageBucket: "rifa-mae-de-cinco.appspot.com",
  messagingSenderId: "835611088979",
  appId: "1:835611088979:web:065ae3ea607a3c143dcea6"
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();

const FirebaseStorage = firebase.storage();

// collection references
const numbersCollection = db.collection("numbers");
// const citiesCollection = db.collection("cities");

// export utils/refs
export { numbersCollection, FirebaseStorage };
