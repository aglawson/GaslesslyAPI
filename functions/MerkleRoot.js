import {MerkleTree} from "merkletreejs";
import keccak256 from "keccak256";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, getDocs, where, setDoc, doc } from 'firebase/firestore/lite';
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

export const MerkleRoot = async (req) => {
    const contract = req.query.contract;

    const q = query(collection(db, "whitelists"), where("contract", "==", contract));
    const wlSnapshot = await getDocs(q);

    if(wlSnapshot.docs.length === 0) {
        throw('No contract found with that address');
    }

    let whitelist = wlSnapshot.docs[0].data().addresses;

    const leafNodes = whitelist.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});
    const root = merkleTree.getHexRoot();

    const result = {
        inputs: {contract: contract},
        output: {data: root},
        success: true
    }

    return result;
}