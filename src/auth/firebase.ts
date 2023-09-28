import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUREaAcKFAuT_bt4L8dP2jqdmAXgzMhSI",
  authDomain: "airflow-system.firebaseapp.com",
  projectId: "airflow-system",
  storageBucket: "airflow-system.appspot.com",
  messagingSenderId: "1049008453327",
  appId: "1:1049008453327:web:ee0564463a8792d3bda9ba",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
