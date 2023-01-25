import express from 'express'
export const router = express.Router()
const app = express()
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config();
import { ethers } from 'ethers';
import { Network, Alchemy } from "alchemy-sdk";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, getDocs, where, setDoc, doc } from 'firebase/firestore/lite';

import { NFTBalance } from './functions/NFTBalance.js'
import { TokenBalance } from './functions/TokenBalance.js'
import { GoerliRelay } from './functions/GoerliRelay.js'
import { GetSelector } from './functions/GetSelector.js'
import { GetEncodedParams } from './functions/GetEncodedParams.js'
import { GetRelayNonce } from './functions/GetRelayNonce.js'
import { OwnedNFTs } from './functions/OwnedNFTs.js'
import { ContractOwners } from './functions/ContractOwners.js'
import { MerkleProof } from './functions/MerkleProof.js'
import { MerkleRoot } from './functions/MerkleRoot.js'
import { DeployNFT } from './functions/DeployNFT.js'
import { AppendWhitelist } from './functions/AppendWhitelist.js'

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

const settings = {
    apiKey: process.env.ALCHEMY_KEY, 
    network: Network.ETH_MAINNET
};
  
const alchemy = new Alchemy(settings);
  
router.use(bodyParser.json())

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
const goerli_provider = new ethers.providers.JsonRpcProvider(process.env.RPC_GOERLI);

router.get('/nft_balance', async (req, res) => {
    try{
        const result = await NFTBalance(req);

        res.json(result);
    } catch (error) {
        console.log(error);
    }
});

router.get('/token_balance', async (req, res) => { 
    try {
        const result = await TokenBalance(req);

        res.json(result);
    } catch(err) {
        res.json({success: false, error: err});
    }

});

router.get('/eth_balance', async (req, res) => {
    const wallet = req.query.wallet;
    
    let error = {errors: []};

    if(wallet === "" || wallet === undefined) {
        error.errors.push("Invalid or empty wallet address");
        return;
    }
    if(error.errors.length > 0) {
        res.json({
            errors: error,
            success: false
        });
    }

    /**
     * @todo: add logic to get eth balance here
     */

    const result = {
        inputs: {wallet: wallet},
        output: {data: 0},
        success: true
    }

    res.json(result);
})

router.get('/goerli_relay', async (req, res) => {
    !auth(req) ? res.status(401).send('Access Denied') : console.log('authorized');
    try{
        const result = await GoerliRelay(req);

        res.json(result);
    } catch(error) {
        res.json({success: false, errors: error});
    }
})

router.get('/get_selector', async (req, res) => {
    try{
       const result = await GetSelector(req);

        res.json(result);
    } catch(error) {
        res.send(error);
    }
})

router.get('/get_encoded_params', async (req, res) => {
    try{
        const result = await GetEncodedParams(req);

        res.json(result);
    } catch(error) {
        res.send(error);
    }
})

router.get('/get_relay_nonce', async (req, res) => {
    try{
        const result = await GetRelayNonce(req);

        res.json(result);
    } catch (error) {
        res.send(error);
    }
})

router.get('/owned_nfts', async(req, res) => {
    try{
        const result = await OwnedNFTs(req);

        res.json(result);
    } catch (error) {
        res.json({success: false, error: error})
    }
});

router.get('/contract_owners', async (req, res) => {
    try{
        const result = await ContractOwners(req);

        res.json(result);
    } catch (error) {
        res.json({success: false, error: error})
    }
})

function auth(req) {
    if(!process.env.API_KEYS.split(',').includes(req.query.api_key)) return false;
    return true;
}

router.get('/merkle_proof', async (req, res) => {
    try{
        const result = await MerkleProof(req);

        res.json(result);
    } catch (error) {
        res.json({error: error, success: false});
    }
})

router.get('/merkle_root', async (req, res) => {
    try{
        const result = await MerkleRoot(req);

        res.json(result);
    } catch (error) {
        res.json({error: error, success: false});
    }
})

router.get('/deploy_nft', async (req, res) => {
    try{
        const result = await DeployNFT(req);

        res.json(result);
    } catch (error) {
        res.json({error: error, success: false});
    }
})

router.get('/test_firestore', async (req, res) => {
    try{
        const wallet = req.query.wallet;
        const q = query(collection(db, "users"), where("wallet", "==", wallet));
        const userSnapshot = await getDocs(q)
        if(userSnapshot.empty){
            res.send('empty');
            return;
        }
        const users = userSnapshot.docs;
        let result = [];
        users.forEach(doc => {
            result.push(doc.data())
        })
        res.json(result);
    } catch(error) {
        console.log(error);
        res.send(error);
    }
})

router.get('/test_firestore_write', async (req, res) => {
    try{
        const wallet = req.query.wallet;
        const usersRef = collection(db, 'users');
        const q = query(collection(db, "users"), where("wallet", "==", wallet));
        const userSnapshot = await getDocs(q);

        let owned_contracts = userSnapshot.docs[0].data().owned_contracts;
        owned_contracts.push('test');
        await setDoc(doc(usersRef, wallet), {
            wallet: wallet,
            owned_contracts: owned_contracts
        });

        res.send('write successful');
    } catch(error) {
        console.log(error);
        res.send(error);
    }
})

router.get('/append_whitelist', async (req, res) => {
    try{
        const result = await AppendWhitelist(req);

        res.json(result);
    } catch(error) {
        console.log(error);
        res.json({error: error, success: false});
    }
})