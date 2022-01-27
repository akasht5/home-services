// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZQUUk12nQXk-R0Abgy-7011z-Uq5xcYA",
    authDomain: "home-services-e6ba5.firebaseapp.com",
    projectId: "home-services-e6ba5",
    storageBucket: "home-services-e6ba5.appspot.com",
    messagingSenderId: "77210110236",
    appId: "1:77210110236:web:b06f2596cfdae5de15d2d9"
  };
  

// Initialize Firebase    
firebase.initializeApp(firebaseConfig);

// Firestore Database
let db = firebase.firestore();