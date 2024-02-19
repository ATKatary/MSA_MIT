import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_JOBS_API_Key,
//   authDomain: process.env.REACT_APP_FIREBASE_JOBS_Auth_Domain,
//   databaseURL: process.env.REACT_APP_FIREBASE_JOBS_Database_URL,
//   projectId: process.env.REACT_APP_FIREBASE_JOBS_Project_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_JOBS_Storage_Bucket,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_JOBS_Messaging_Sender_ID,
//   appId: process.env.REACT_APP_FIREBASE_JOBS_App_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_JOBS_Measurement_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyCbIwbOWaymRSGaqrf4VHc0labxqi9GA3U",
  authDomain: "mit-msa-job-postings.firebaseapp.com",
  databaseURL: "https://mit-msa-job-postings-default-rtdb.firebaseio.com",
  projectId: "mit-msa-job-postings",
  storageBucket: "mit-msa-job-postings.appspot.com",
  messagingSenderId: "677599411844",
  appId: "1:677599411844:web:cb03e33c1b4e65fe8eccd1",
  measurementId: "G-VK90R147RL"
};

const app = initializeApp(firebaseConfig, 'jobs-base');
console.log("jobs");
console.log(process.env.REACT_APP_FIREBASE_JOBS_Project_ID);
export default getDatabase(app);