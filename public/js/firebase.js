// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCJLaP7GzHtC_HYa1illzJNyWcLU-Qy5Mc",
  authDomain: "sos-zombie.firebaseapp.com",
  projectId: "sos-zombie",
  storageBucket: "sos-zombie.appspot.com",
  messagingSenderId: "1034684356014",
  appId: "1:1034684356014:web:917da60c05456a2b62e43f",
  measurementId: "G-0F3JYL5BN5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const saveRescue = (date, time, latitude, longitude) => {
  addDoc(collection(db, "Rescates"), {
    fecha: date,
    hora: time,
    latitud: latitude,
    longitud: longitude,
  });
};
