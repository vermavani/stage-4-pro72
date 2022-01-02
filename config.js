import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyB1uoiQg_cSTAW6NW4NQlKxkN0041unnC0",
  authDomain: "e-library-da40c.firebaseapp.com",
  projectId: "e-library-da40c",
  storageBucket: "e-library-da40c.appspot.com",
  messagingSenderId: "473678716679",
  appId: "1:473678716679:web:a5be87886fa7443a16afa2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
