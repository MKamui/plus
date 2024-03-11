
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMHoKjKCxMPFwxE7sXyZmXDnhkH8Rfufs",
  authDomain: "plusdarkside.firebaseapp.com",
  projectId: "plusdarkside",
  storageBucket: "plusdarkside.appspot.com",
  messagingSenderId: "820562724200",
  appId: "1:820562724200:web:f363f547ddce0c697b42dd"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export {app, auth}