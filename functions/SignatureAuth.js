/**
 * @description This file contains logic to ensure that the wallet address sent
 * in a function call is owned by the originator of the function call. This is to
 * prevent updates and deployments from being performed on behalf of a wallet who 
 * did not request it. 
 */
import { initializeApp } from "firebase/app";
import { ethers } from "ethers";
import { getFirestore, collection, query, getDocs, where, setDoc, doc } from 'firebase/firestore/lite';
0
const firebaseConfig = {
    apiKey: process.env.fb_key,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

const fb = initializeApp(firebaseConfig);
const db = getFirestore(fb);

export const SignatureAuth = async(req) => {
    // signature and message are required to recover the 
    // original signer
    const signature = req.query.signature;
    const address = req.query.wallet;
    const message = req.query.message;

    // Retrieve all used signatures from DB 
    const sigRef = collection(db, 'Signatures');
    const q = query(sigRef);
    const sigSnapshot = await getDocs(q);

    let usedSignatures = sigSnapshot.docs[0].data().usedSignatures;

    // Make sure provided signature has not already been used
    if(usedSignatures.includes(signature)) return false;

    // Recover originator of signature
    const recover = ethers.utils.verifyMessage(message, signature)

    // Ensure recovered address is equal to 'address'
    if(recover !== address) return false;

    // Add signature to DB to prevent reuse
    usedSignatures.push(signature);
    await setDoc(doc(sigRef, 'UsedSignatures'), {
        usedSignatures: usedSignatures,
    });

    // If all checks are passed, return true
    return true;

}