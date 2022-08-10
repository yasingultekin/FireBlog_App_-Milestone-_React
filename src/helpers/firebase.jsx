// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toastSuccessNotify, toastErrorNotify } from "./toastNotify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGİNG_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    toastSuccessNotify("Yeni Kayıt Başarıyla Oluşturuldu. Hoş Geldiniz!");
    navigate("/");
  } catch (err) {
    toastErrorNotify("Kayıt Oluşturulamadı. Lütfen yeniden deneyiniz!");
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    toastSuccessNotify("Hoş Geldiniz!");
    navigate("/");
  } catch (err) {
    // toastErrorNotify("Giriş yapılamadı. Lütfen yeniden deneyin!");
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};

export const logOut = (navigate) => {
  signOut(auth);
  navigate("login");
  toastSuccessNotify("Başarıyla çıkış yapıldı!");
};

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      toastSuccessNotify("Hoş Geldiniz!");
      navigate("/");
    })
    .catch((err) => {
      // toastErrorNotify("Giriş yapılamadı. Lütfen yeniden deneyin!");
    });
};

export default app;
