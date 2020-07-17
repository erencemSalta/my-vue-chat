import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB_L33Y2Tc4T54obHlBbk1cZ64GGHr0jcU",
    authDomain: "vue-chat-1ff75.firebaseapp.com",
    databaseURL: "https://vue-chat-1ff75.firebaseio.com",
    projectId: "vue-chat-1ff75",
    storageBucket: "vue-chat-1ff75.appspot.com",
    messagingSenderId: "344511212893",
    appId: "1:344511212893:web:34bd340011aa93348d0cb4"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()
