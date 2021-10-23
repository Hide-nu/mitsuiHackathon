import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0KWAb7zjMd7NzrRRbumtRUYP7HhxXVbU",
  authDomain: "mitstuihackathon.firebaseapp.com",
  projectId: "mitstuihackathon",
  storageBucket: "mitstuihackathon.appspot.com",
  messagingSenderId: "846991822398",
  appId: "1:846991822398:web:270f173a9bce8ec3abcb6f",
  measurementId: "G-3P7PQ4GENZ"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp)
