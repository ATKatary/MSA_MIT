import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_JOBS_API_Key,
  authDomain: process.env.REACT_APP_FIREBASE_JOBS_Auth_Domain,
  databaseURL: process.env.REACT_APP_FIREBASE_JOBS_Database_URL,
  projectId: process.env.REACT_APP_FIREBASE_JOBS_Project_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_JOBS_Storage_Bucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_JOBS_Messaging_Sender_ID,
  appId: process.env.REACT_APP_FIREBASE_JOBS_App_ID,
  measurementId: process.env.REACT_APP_FIREBASE_JOBS_Measurement_ID
};

const app = initializeApp(firebaseConfig, 'jobs-base');
export default getDatabase(app);