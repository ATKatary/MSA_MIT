import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_REFERRAL_API_Key,
    authDomain: process.env.REACT_APP_FIREBASE_REFERRAL_Auth_Domain,
    databaseURL: process.env.REACT_APP_FIREBASE_REFERRAL_Database_URL,
    projectId: process.env.REACT_APP_FIREBASE_REFERRAL_Project_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_REFERRAL_Storage_Bucket,
    messagingSenderId: process.env.REACT_APP_FIREBASE_REFERRAL_Messaging_Sender_ID,
    appId: process.env.REACT_APP_FIREBASE_REFERRAL_App_ID,
    measurementId: process.env.REACT_APP_FIREBASE_REFERRAL_Measurement_ID
};

const app = initializeApp(firebaseConfig, 'referrals-base');
console.log(process.env.REACT_APP_FIREBASE_REFERRAL_Project_ID);
export default getDatabase(app);