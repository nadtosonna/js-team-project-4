// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import getRefs from './common/refs';
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { onClickLibrary } from './make-header';

// console.log(onClickLibrary(e));

const {
  header,
  headerContainer,
  home,
  logoLink,
  logoIcon,
  library,
  authBackdrop,
} = getRefs();

// import {} from './ui';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCGHvQeYYSLBpUvEQhdSHM15NJqrdM7sp4',
  authDomain: 'filmoteka-ad008.firebaseapp.com',
  databaseURL:
    'https://filmoteka-ad008-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-ad008',
  storageBucket: 'filmoteka-ad008.appspot.com',
  messagingSenderId: '1010745339163',
  appId: '1:1010745339163:web:e809231364ec491c2bf7be',
};

const authForm = document.querySelector('.auth-form');

const signInBtn = authForm.elements.signIn;
const registerBtn = authForm.elements.register;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function loginEmailPassword(e) {
  e.preventDefault();
  const loginEmail = authForm.elements.mail.value;
  const loginPassword = authForm.elements.password.value;
  console.log(loginEmail);

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    authBackdrop.classList.add('auth-form-hidden');
    document.body.classList.toggle('body-overflow');
    console.log(userCredential.user);
  } catch (error) {
    console.log(error);
  }
}

async function createAcount(e) {
  e.preventDefault();
  const loginEmail = authForm.elements.mail.value;
  const loginPassword = authForm.elements.password.value;
  console.log(loginEmail);
  console.log(loginPassword);

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(userCredential.user);
  } catch (error) {
    console.log(error);
    // showLoginError(error);
  }
}

export async function monitorAuthState() {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('user', user);
      const userId = user.uid;
      //   console.log(userId);
      return userId;
    } else {
      authBackdrop.classList.remove('auth-form-hidden');
      document.body.classList.toggle('body-overflow');
      console.log('no user');
    }
  });
}

signInBtn.addEventListener('click', loginEmailPassword);
registerBtn.addEventListener('click', createAcount);
