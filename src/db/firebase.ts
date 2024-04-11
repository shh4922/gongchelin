// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getDatabase} from "firebase/database"
import { ref } from 'firebase/database';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCqkeTOpgylf_Zv2w3oQ1pLUTnEFF0EpBE",
    authDomain: "gongchelin-34240.firebaseapp.com",
    databaseURL: "https://gongchelin-34240-default-rtdb.firebaseio.com",
    projectId: "gongchelin-34240",
    storageBucket: "gongchelin-34240.appspot.com",
    messagingSenderId: "197848190812",
    appId: "1:197848190812:web:13c8f5341551c788973b99",
    measurementId: "G-342Y95XE9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase(app)

export {db,  auth}