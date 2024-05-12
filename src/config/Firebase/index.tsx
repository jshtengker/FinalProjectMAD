/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDLdzJO76npkOG0QO3aQ1U5KbkQTE58Ltc',
  authDomain: 'finalprojectmad-87982.firebaseapp.com',
  projectId: 'finalprojectmad-87982',
  storageBucket: 'finalprojectmad-87982.appspot.com',
  messagingSenderId: '264702627250',
  appId: '1:264702627250:web:d5064e01218d00553468ab',
  databaseURL: 'https://finalprojectmad-87982-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;