import { getFirestore, collection, query, getDocs, where, setDoc, doc, updateDoc } from 'firebase/firestore/lite'
import dotenv from 'dotenv'
import { InitializeFirebase } from "./InitializeFirebase.js"
dotenv.config()

export const UpdateUser = async (req) => {
    const app = await InitializeFirebase();
    const db = getFirestore(app)

    const wallet = req.query.wallet
    const attribute = req.query.attribute
    const value = req.query.value

    const docRef = collection(db, 'faucet_users')
    const q = query(docRef, where("wallet", "==", wallet))
    const docs = await getDocs(q)

    if(docs.docs.length === 0) throw 'User not found';

    await setDoc(doc(docRef, wallet), {
        [attribute]: value
    }, {merge: true})

    return docs.docs[0].data()
}