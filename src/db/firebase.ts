// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getDatabase} from "firebase/database"
import { ref } from 'firebase/database';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APPKRY,
    // apiKey: "AIzaSyCqkeTOpgylf_Zv2w3oQ1pLUTnEFF0EpBE",
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,

    // projectId: process.env.REACT_APP_PROJECTID,
    projectId: "gongchelin-34240",
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase(app)

export {db,  auth}