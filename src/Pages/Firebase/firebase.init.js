import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBsokSy9Qcvv3N4hcdCriCxaKP2AFugXWY",
    authDomain: "sedanmela.firebaseapp.com",
    projectId: "sedanmela",
    storageBucket: "sedanmela.appspot.com",
    messagingSenderId: "509042897770",
    appId: "1:509042897770:web:65b150db34720f0bf0eb13"
  };
const initializeFirebase = () => {
    initializeApp(firebaseConfig)
}

// Initialize Firebase
export default initializeFirebase;