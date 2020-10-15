import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyC4cntvlPim6MgYT67Je4I-3V-vzNoyEXI",
    authDomain: "cordial-chat.firebaseapp.com",
    databaseURL: "https://cordial-chat.firebaseio.com",
    projectId: "cordial-chat",
    storageBucket: "cordial-chat.appspot.com",
    messagingSenderId: "102392523425",
    appId: "1:102392523425:web:43a682d4231b64cc721ee0",
    measurementId: "G-5PM62HDKP7"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig)
const db = firebaseapp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}

export default db;