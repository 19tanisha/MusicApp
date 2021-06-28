import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgWRSLJ_2tLwZ_Ql-f8s6SH6Q9ZRgra1o",
  authDomain: "music-app-fbf54.firebaseapp.com",
  projectId: "music-app-fbf54",
  storageBucket: "music-app-fbf54.appspot.com",
  messagingSenderId: "828283593190",
  appId: "1:828283593190:web:06df0754fef8e5783d7627",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
