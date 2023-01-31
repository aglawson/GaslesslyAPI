/**
 * @description This file contains the logic necessary to deploy an NFT smart contract.
 * It takes in the details about the NFT collection - detailed in index.js, uses a wallet
 * signature to verify that 'wallet' is the original sender of the call. Once the NFT 
 * smart contract is deployed, ownership is transferred from the deployer wallet to the
 * function caller.
 */
import { ethers } from 'ethers';
import  {deploy_nft_abi, nft_bytecode}  from '../abi.js';
import dotenv from 'dotenv'
import { GetProvider } from './GetProvider.js';
dotenv.config();
import { getFirestore, collection, query, getDocs, where, setDoc, doc } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";

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

export const DeployNFT = async (req) => {
    let wallet = req.query.wallet;
    const network = req.query.network

    const provider = GetProvider(network);

    if(wallet === '' || wallet === undefined) {
        throw('No wallet address sent');
    }

    // Enforce lower case to simplify DB queries 
    wallet = wallet.toLowerCase();

    // NFT Details
    const name = req.query.name;
    const symbol = req.query.symbol;
    const maxSupply = req.query.maxSupply;
    const price = req.query.price;
    const whitelist_price = req.query.whitelist_price;

    // Make sure all required parameters were sent
    if(!name || !symbol || !maxSupply || !price || !whitelist_price) {
        throw ('Please send values for: name, symbol, maxSupply, price, whitelist_price');
    }

    // Initialize contract deployer
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    // Initialize smart contract
    const NFT_Factory = new ethers.ContractFactory(deploy_nft_abi, nft_bytecode, signer);
    const deployed_nft = await NFT_Factory.connect(signer).deploy(name, symbol, maxSupply, price, whitelist_price);
    
    await deployed_nft.deployed();

    // Transfer ownership to function caller - deployer wallet retains admin access on contract to update
    // state, whitelist, URI on contract owner's behalf
    const transfer_ownership = await deployed_nft.connect(signer).transferOwnership(wallet);
    await transfer_ownership.wait(1);

    const result = {
        inputs: {wallet: wallet},
        output: {data: deployed_nft.address},
        success: true
    }

    // Add smart contract address to user object
    const userRef = collection(db, 'users');
    const q = query(userRef, where('wallet', '==', wallet));
    const userSnapshot = await getDocs(q);

    if(userSnapshot.docs.length === 0) {
        await setDoc(doc(userRef, wallet), {
            owned_contracts: [deployed_nft.address],
            wallet: wallet
        });

    } else {
        let contracts = userSnapshot.docs[0].data().owned_contracts;
        contracts.push(deployed_nft.address);

        await setDoc(doc(userRef, wallet), {
            owned_contracts: contracts,
            wallet: wallet
        });
    }

    return result;
}