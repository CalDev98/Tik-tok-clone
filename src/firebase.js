import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyANCe3LtjzmLDGGpFpMzUFUDsLCt-aEw9E",
    authDomain: "tik-tok-clone-f3e1d.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-f3e1d.firebaseio.com",
    projectId: "tik-tok-clone-f3e1d",
    storageBucket: "tik-tok-clone-f3e1d.appspot.com",
    messagingSenderId: "990344121531",
    appId: "1:990344121531:web:e4b117e089b3bc491aad9e",
    measurementId: "G-FPKF6N1341"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;