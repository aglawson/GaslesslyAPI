/**
 * @description Returns a cryptographic proof to show that a given 
 * wallet address is in the whitelist associated with a smart contract.
 */
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

export const MerkleProof = async (req) => {
    const contract = req.query.contract;
    const address = req.query.wallet;

    // Retrieve whitelist associated with contract address
    const q = query(collection(db, "whitelists"), where("contract", "==", contract));
    const wlSnapshot = await getDocs(q);

    // If no contract exists for that address in DB
    if(wlSnapshot.docs.length === 0) {
        throw('No contract found with that address');
    }

    // If wallet address is not on the whitelist
    let whitelist = wlSnapshot.docs[0].data().addresses;
    if(!whitelist.includes(address)) {
        throw('Wallet provided is not on whitelist')
    }

    // Create mapping of leaves and construct merkle tree
    const leafNodes = whitelist.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});
    
    // Hash wallet address using keccak256 hashing algorithm and 
    // get proof that this hash is a member of the tree
    const leaf = keccak256(address);
    const proof = merkleTree.getHexProof(leaf);

    // result.output.data will be used in smart contract call to prove to
    // smart contract that the tx sender is on the whitelist
    const result = {
        inputs: {contract: contract, wallet: address},
        output: {data: proof},
        success: true
    }

    return result;
}