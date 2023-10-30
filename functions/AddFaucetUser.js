import dotenv from 'dotenv'
dotenv.config()
import { getFirestore, collection, query, getDocs, where, setDoc, doc } from 'firebase/firestore/lite'
import { initializeApp } from "firebase/app"
import { SignatureAuth } from './SignatureAuth.js'

const firebaseConfig = {
    apiKey: process.env.fb_key,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
}

const fb = initializeApp(firebaseConfig)
const db = getFirestore(fb)

export const AddFaucetUser = async (req) => {
    const wallet = req.query.wallet
    console.log('wallet param', wallet)
    // const handle = req.query.handle

    // const verify = await SignatureAuth(req)
    // if(!verify) {
    //     throw 'invalid signature'
    // }

    const userRef = collection(db, 'faucet_users')
    const q = query(userRef, where('wallet', '==', wallet))
    const userSnapshot = await getDocs(q)

    if(userSnapshot.docs.length == 0) {
        await setDoc(doc(userRef, wallet), {
            // handle: handle,
            wallet: wallet
        });
    } else {
        throw 'user already exists';
    }

    const result = {
        success: true
    }
    
    return result
}