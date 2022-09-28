import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD7WZdYefOkV_U36BPNu3igcStS_KDNi0s",
  authDomain: "stack-overflow-clone-faf32.firebaseapp.com",
  projectId: "stack-overflow-clone-faf32",
  storageBucket: "stack-overflow-clone-faf32.appspot.com",
  messagingSenderId: "856212842557",
  appId: "1:856212842557:web:6a7674a4df04ec51e46254",
  measurementId: "G-H3GBW81R7Y"

};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};