// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { child, get, getDatabase } from "firebase/database"
import { ref, set } from 'firebase/database';
import { getAuth } from "firebase/auth";
import storesInfo from "../Models/\bstoresInfo";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APPKRY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
};
// fetch() 공혁준데이터
export const getGongchelin = async (): Promise<storesInfo[]> => {
    const snapshot = await get(child(ref(db), `Gongchelin`))
    if (snapshot.exists()) {
        const result = snapshot.val()
        return Object.values(result)
    } else {
        console.log("No data available");
        return []
    }
}

// fetch() 풍자데이터
export const getFoogja = async (): Promise<storesInfo[]> => {
    const snapshot = await get(child(ref(db), `Foogja`))
    if (snapshot.exists()) {
        const result = snapshot.val()
        return Object.values(result)
    } else {
        console.log("No data available");
        return []
    }
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase(app)

export { db, auth, ref, set}