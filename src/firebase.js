import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoOZUzbk6alFKNo7RQW0b53Wt6KC-itSw",
  authDomain: "e-commerce-c08a3.firebaseapp.com",
  projectId: "e-commerce-c08a3",
  storageBucket: "e-commerce-c08a3.appspot.com",
  messagingSenderId: "1089745403346",
  appId: "1:1089745403346:web:15c65e2145b6cb0ae6dc0b",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };
// export default firebase;
