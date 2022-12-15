import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA74ZvfzfZVmopLVsbl88Y02CUaXNWGgwk",
  authDomain: "roblox-29707.firebaseapp.com",
  projectId: "roblox-29707",
  storageBucket: "roblox-29707.appspot.com",
  messagingSenderId: "1025034692104",
  appId: "1:1025034692104:web:628690bd4a9e9bf83293bd",
};

  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.auth()
