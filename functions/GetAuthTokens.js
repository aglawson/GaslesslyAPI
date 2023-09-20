import { getFirestore, collection, query, getDocs, where, setDoc, doc } from 'firebase/firestore/lite'
import dotenv from 'dotenv'
import { InitializeFirebase } from "./InitializeFirebase.js"
dotenv.config()

export async function GetAuthTokens(req) {
    const wallet = req.query.wallet
    const app = await InitializeFirebase();
    const db = getFirestore(app)

    const docRef = collection(db, 'faucet_users')
    const q = query(docRef, where("wallet", "==", wallet))
    const docs = await getDocs(q)

    if(docs.docs.length === 0) {
        return null
    }

    console.log(docs.docs[0].data())
    if(!docs.docs[0].data().oauth_token || !docs.docs[0].data().oauth_token_secret) {
        return null
    }

    const auth_tokens = {
        oauth_token: docs.docs[0].data().oauth_token,
        oauth_token_secret: docs.docs[0].data().oauth_token_secret,
        twitter_id: docs.docs[0].data().twitter_id
    }

    return auth_tokens

}