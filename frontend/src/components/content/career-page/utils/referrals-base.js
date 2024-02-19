import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_REFERRAL_API_Key,
//     authDomain: process.env.REACT_APP_FIREBASE_REFERRAL_Auth_Domain,
//     databaseURL: process.env.REACT_APP_FIREBASE_REFERRAL_Database_URL,
//     projectId: process.env.REACT_APP_FIREBASE_REFERRAL_Project_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_REFERRAL_Storage_Bucket,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_REFERRAL_Messaging_Sender_ID,
//     appId: process.env.REACT_APP_FIREBASE_REFERRAL_App_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_REFERRAL_Measurement_ID
// };

// REACT_APP_FIREBASE_REFERRAL_API_Key = AIzaSyCKjqo8DeVASpa4VmIv2eUjUssUY91GGKE
// REACT_APP_FIREBASE_REFERRAL_Auth_Domain = mit-msa-referral-listings.firebaseapp.com
// REACT_APP_FIREBASE_REFERRAL_Database_URL = https://mit-msa-referral-listings-default-rtdb.firebaseio.com
// REACT_APP_FIREBASE_REFERRAL_Project_ID = mit-msa-referral-listings
// REACT_APP_FIREBASE_REFERRAL_Storage_Bucket = mit-msa-referral-listings.appspot.com
// REACT_APP_FIREBASE_REFERRAL_Messaging_Sender_ID = 591260098256
// REACT_APP_FIREBASE_REFERRAL_App_ID = 1:591260098256:web:286915d7c6e564a0e348d5
// REACT_APP_FIREBASE_REFERRAL_Measurement_ID = G-FFMM0E93RT

const firebaseConfig = {
    apiKey: "AIzaSyCKjqo8DeVASpa4VmIv2eUjUssUY91GGKE",
    authDomain: "mit-msa-referral-listings.firebaseapp.com",
    databaseURL: "https://mit-msa-referral-listings-default-rtdb.firebaseio.com",
    projectId: "mit-msa-referral-listings",
    storageBucket: "mit-msa-referral-listings.appspot.com",
    messagingSenderId: "591260098256",
    appId: "1:591260098256:web:286915d7c6e564a0e348d5",
    measurementId: "G-FFMM0E93RT"
};

const app = initializeApp(firebaseConfig, 'referrals-base');
console.log(process.env.REACT_APP_FIREBASE_REFERRAL_Project_ID);
export default getDatabase(app);