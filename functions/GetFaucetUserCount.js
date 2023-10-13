import { getFirestore, collection, query, getDocs, where, setDoc, doc } from 'firebase/firestore/lite';
import dotenv from 'dotenv';
import { initializeApp } from "firebase/app";
dotenv.config();

export async function GetFaucetUserCount(req) {
    const firebaseConfig = {
        apiKey: process.env.fb_key,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
        measurementId: process.env.measurementId
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const docRef = collection(db, 'faucet_users');
    const docs = await getDocs(docRef);
    
    return docs.docs.map(doc => doc.data()).length
}