// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwCybYIHihxapfA1pMcaoDvJzBo9lW8Lc",
  authDomain: "netflix-react-jz.firebaseapp.com",
  projectId: "netflix-react-jz",
  storageBucket: "netflix-react-jz.appspot.com",
  messagingSenderId: "826025993969",
  appId: "1:826025993969:web:9418927b20855277856b50",
  measurementId: "G-RGX15LE6ED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);