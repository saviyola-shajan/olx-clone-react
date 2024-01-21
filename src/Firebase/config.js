import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBvKeOhKKomhN5r8nLwClZErmaljogyVmI",
    authDomain: "olx-clone-f5ec5.firebaseapp.com",
    projectId: "olx-clone-f5ec5",
    storageBucket: "olx-clone-f5ec5.appspot.com",
    messagingSenderId: "308308465558",
    appId: "1:308308465558:web:09d9f4e8381cda0653efb7",
    measurementId: "G-3DRQSCJRW4"
  };
 
  firebase.initializeApp(firebaseConfig);  
  
  export default firebase