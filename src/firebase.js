import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWVjtiJKN2aZ0VQfdPavWd_FhIUTR_rm8",
  authDomain: "whatsapp-clone-aca5d.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-aca5d.firebaseio.com",
  projectId: "whatsapp-clone-aca5d",
  storageBucket: "whatsapp-clone-aca5d.appspot.com",
  messagingSenderId: "127983503916",
  appId: "1:127983503916:web:3d5126cdeaba4cd5f0df89",
  measurementId: "G-ZT58FDZ534",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
