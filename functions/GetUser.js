import { getFirestore, collection, query, getDocs, where, setDoc, doc } from 'firebase/firestore/lite'
import dotenv from 'dotenv'
import { initializeApp } from "firebase/app"
dotenv.config()

export async function GetUser(req) {
    const wallet = req.query.wallet
    const firebaseConfig = {
        apiKey: process.env.fb_key,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
        measurementId: process.env.measurementId
    }
    const app = initializeApp(firebaseConfig)    
    const db = getFirestore(app)

    const docRef = collection(db, 'faucet_users')
    const q = query(docRef, where("wallet", "==", wallet))
    const docs = await getDocs(q)

    console.log('user lookup for wallet: ', wallet, docs.docs[0])

    if(docs.docs.length === 0) {
        return null
    }

    return docs.docs[0].data()

}