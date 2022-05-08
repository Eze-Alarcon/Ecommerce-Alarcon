import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "first-ecommerce-be064.firebaseapp.com",
  projectId: "first-ecommerce-be064",
  storageBucket: "first-ecommerce-be064.appspot.com",
  messagingSenderId: "227287992325",
  appId: "1:227287992325:web:e58796a53e26587b81f46c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db