import { initializeApp } from "firebase/app";
import { ethers } from "ethers";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  setDoc,
  doc,
} from "firebase/firestore/lite";
0;
const firebaseConfig = {
  apiKey: process.env.fb_key,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const fb = initializeApp(firebaseConfig);
const db = getFirestore(fb);

export const SignatureAuth = async (req) => {
  const signature = req.query.signature;
  const address = req.query.wallet;
  const message = req.query.message;

  const sigRef = collection(db, "Signatures");
  const q = query(sigRef);
  const sigSnapshot = await getDocs(q);

  let usedSignatures = sigSnapshot.docs[0].data().usedSignatures;

  if (usedSignatures.includes(signature)) return false;

  // Make sure you arrayify the message if you want the bytes to be used as the message
  const recover = ethers.utils.verifyMessage(message, signature);

  if (recover !== address) return false;

  usedSignatures.push(signature);
  await setDoc(doc(sigRef, "UsedSignatures"), {
    usedSignatures: usedSignatures,
  });

  return true;
};
