import dotenv from 'dotenv'
dotenv.config()
import { getFirestore, collection, query, getDocs, where, setDoc, doc } from 'firebase/firestore/lite'
import { initializeApp } from "firebase/app"

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

export const GetOwnedContracts = async (req) => {
    const wallet = req.query.wallet

    if(wallet === '' || wallet === undefined) {
        throw 'No wallet address sent'
    }

    let owned_contracts = []

    const userRef = collection(db, 'users')
    const q = query(userRef, where('wallet', '==', wallet.toLowerCase()))
    const userSnapshot = await getDocs(q)

    if(userSnapshot.docs.length !== 0) {
        for(let i = 0; i < userSnapshot.docs[0].data().owned_contracts.length; i++) {
            owned_contracts.push(userSnapshot.docs[0].data().owned_contracts[i])
        }
    } 

    const result = {
        inputs: {wallet: wallet},
        output: {data: owned_contracts},
        success: true
    }
    return result
}