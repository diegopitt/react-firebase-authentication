import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

var config = {
  apiKey: "AIzaSyBqVAgBBqgGCVccBKFVOcy79Pz8N3kPgAU",
  authDomain: "sample-project-3b97e.firebaseapp.com",
  databaseURL: "https://sample-project-3b97e.firebaseio.com",
  projectId: "sample-project-3b97e",
  storageBucket: "sample-project-3b97e.appspot.com",
  messagingSenderId: "397590531474",
  appId: "1:397590531474:web:e2d9c36d9f20b2aa"
};
firebase.initializeApp(config);

export { firebase };
