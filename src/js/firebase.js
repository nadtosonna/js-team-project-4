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
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { authNotiflixSettings } from './common/notiflix-settings';

// console.log(onClickLibrary(e));

const {
  header,
  headerContainer,
  home,
  logoLink,
  logoIcon,
  library,
  authBackdrop,
  nawList,
  logoutBtn,
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

const signInBtn = document.querySelector('.sign-in');
const registerBtn = document.querySelector('.register');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function loginEmailPassword(e) {
  e.preventDefault();
  const loginEmail = authForm.elements.mail.value;
  const loginPassword = authForm.elements.password.value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );

    authBackdrop.classList.add('auth-form-hidden');
    document.body.classList.toggle('body-overflow');
    console.log(userCredential.user);
    Notify.success(`successful`, authNotiflixSettings);
    removeInput();
  } catch (error) {
    Notify.failure(`${error.message}`, authNotiflixSettings);
  }
}

async function createAcount(e) {
  e.preventDefault();
  const loginEmail = authForm.elements.mail.value;
  const loginPassword = authForm.elements.password.value;

  try {
    await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    Notify.success(`Registration was successful! `, authNotiflixSettings);
    removeInput();
    logoutBtn.classList.remove('is-hidden-logout');
    authBackdrop.classList.add('auth-form-hidden');
    document.body.classList.remove('body-overflow');
  } catch (error) {
    Notify.failure(`${error.message}`, authNotiflixSettings);
  }
}

export function monitorAuthState() {
  onAuthStateChanged(auth, user => {
    if (user) {
      logoutBtn.classList.remove('is-hidden-logout');
      return;
    }

    if (library.classList.contains('current')) {
      authBackdrop.classList.remove('auth-form-hidden');
      document.body.classList.add('body-overflow');
    }
    // console.log('no user');
  });
}

monitorAuthState();
signInBtn.addEventListener('click', loginEmailPassword);
registerBtn.addEventListener('click', createAcount);

logoutBtn.addEventListener('click', e => {
  signOut(auth);
  logoutBtn.classList.add('is-hidden-logout');
});

function removeInput() {
  const mailInput = document.querySelector('.auth-form-mail');
  const passwordInput = document.querySelector('.auth-form-password');
  mailInput.value = '';
  passwordInput.value = '';
}
