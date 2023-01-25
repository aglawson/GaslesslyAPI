import express from 'express'
export const router = express.Router()
const app = express()
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config();
import { ethers } from 'ethers';
import  {nft_abi, token_abi, selector_abi, relayer_abi, deploy_nft_abi, nft_bytecode}  from './abi.js';
import { Network, Alchemy } from "alchemy-sdk";
import { whitelists } from './info.js'
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
        const contract = req.query.contract;
        const wallet = req.query.wallet;

        let error = {errors: []};

        if(contract === "" || contract === undefined) {
            error.errors.push("Invalid or empty contract address");
        }
        if(wallet === "" || wallet === undefined) {
            error.errors.push("Invalid or empty wallet address");
        }
        if(error.errors.length > 0) {
            res.json({
                errors: error,
                success: false
            });
            return;
        }
        const nft = new ethers.Contract(contract, nft_abi, provider);

        const bal = await nft.balanceOf(wallet);

        const result = {
            inputs: {wallet: wallet, contract: contract},
            output: {balance: parseInt(bal)},
            success: true
        }

        res.json(result);
    } catch (error) {
        console.log(error);
    }
});

router.get('/token_balance', async (req, res) => { 
    try {
        const contract = req.query.contract;
        const wallet = req.query.wallet;

        let error = {errors: []};

        if(contract === "" || contract === undefined) {
            error.errors.push("Invalid or empty contract address");
        }
        if(wallet === "" || wallet === undefined) {
            error.errors.push("Invalid or empty wallet address");
        }
        if(error.errors.length > 0) {
            res.json({
                errors: error,
                success: false
            });
            return;
        }
        const token = new ethers.Contract(contract, token_abi, provider);
        const bal = await token.balanceOf(wallet);
        

        const result = {
            inputs: {wallet: wallet, contract: contract},
            output: {data: parseFloat(bal) / 10**18},
            success: true
        }

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
        const privateKey = process.env.PRIVATE_KEY;
        const signer = new ethers.Wallet(privateKey, goerli_provider);
        const relayer = '0x2A0d1f0EE9c5584b1694BCa16879423432770A52';
        const signature = req.query.signature;
        const reqStruct = JSON.parse(req.query.reqStruct);
        const contract = new ethers.Contract(relayer, relayer_abi, goerli_provider);
        try{
            let result = await contract.connect(signer).execute(reqStruct, signature);
            await result.wait(1)
            const response = {
                inputs: {signature: signature, reqStruct: reqStruct},
                output: {data: result.hash},
                success: true
            }
            res.json(response);
        } catch (error){
            res.json({success: false, message: error.message});
        }
    } catch(error) {
        res.json({success: false, errors: error});
    }
})

router.get('/get_selector', async (req, res) => {
    try{
        const selector = new ethers.Contract('0xD7dA7285f732262B3Cc80639d27c5Ee87f2e3a70', selector_abi, goerli_provider);

        let func = req.query.func;
        const funcHash = await selector.getSelector(func);

        const result = {
            inputs: {func: func},
            output: {data: funcHash},
            success: true
        }

        res.json(result);
    } catch(error) {
        res.send(error);
    }
})

router.get('/get_encoded_params', async (req, res) => {
    try{
        const abiCoder = new ethers.utils.AbiCoder();

        const types = req.query.types.split(',');
        const values = req.query.values.split(',');

        console.log(types, values);

        let data = abiCoder.encode(types, values);
        data = data.slice(2,data.length);

        const result = {
            inputs: {types: types, values: values},
            output: {data: data},
            success: true
        }

        res.json(result);
    } catch(error) {
        res.send(error);
    }
})

router.get('/get_relay_nonce', async (req, res) => {
    try{
        const wallet = req.query.wallet;
        const relayer = '0x2A0d1f0EE9c5584b1694BCa16879423432770A52';
        const relay = new ethers.Contract(relayer, relayer_abi, goerli_provider);

        const nonce = await relay.getNonce(wallet);
        const result = {
            inputs: {wallet: wallet},
            output: {data: parseInt(nonce)},
            success: true
        }
        res.json(result);
    } catch (error) {
        res.send(error);
    }
})

router.get('/owned_nfts', async(req, res) => {
    try{
        const wallet = req.query.wallet;

        const nfts = await alchemy.nft.getNftsForOwner(wallet);

        const total = nfts.totalCount;
        let data = {total: 0, nfts: []};

        for (const n of nfts.ownedNfts) {
            data.nfts.push({
                name: n.contract.name,
                symbol: n.contract.symbol,
                address: n.contract.address,
                token_id: n.tokenId
            });
        }
        data.total = total;

        const result = {
            inputs: {wallet: wallet},
            output: {data: data},
            success: true
        }
        res.json(result);
        return;
    } catch (error) {
        res.json({success: false, error: error})
        return;
    }
});

router.get('/contract_owners', async (req, res) => {
    try{
        const contract = req.query.contract;

        const owners = await alchemy.nft.getOwnersForContract(contract);

        const result = {
            inputs: {contract: contract},
            output: {data: owners},
            success: true
        }
        res.json(result);
        return;
    } catch (error) {
        res.json({success: false, error: error})
        return;
    }
})

function auth(req) {
    if(!process.env.API_KEYS.split(',').includes(req.query.api_key)) return false;
    return true;
}

router.get('/merkle_proof', async (req, res) => {
    try{
        const contract = req.query.contract;
        let whitelist = whitelists[contract].whitelist;

        const leafNodes = whitelist.map(addr => keccak256(addr));
        const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});
        const root = merkleTree.getHexRoot();
    
        const address = req.query.wallet;
        
        const leaf = keccak256(address);
    
        const proof = merkleTree.getHexProof(leaf);

        const result = {
            inputs: {contract: contract, wallet: address},
            output: {data: proof},
            success: true
        }
        res.json(result);
        return;
    } catch (error) {
        res.json({error: error, success: false});
        return;
    }
})

router.get('/merkle_root', async (req, res) => {
    try{
        const contract = req.query.contract;
        let whitelist = whitelists[contract].whitelist;

        const leafNodes = whitelist.map(addr => keccak256(addr));
        const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});
        const root = merkleTree.getHexRoot();

        const result = {
            inputs: {contract: contract},
            output: {data: root},
            success: true
        }
        res.json(result);
        return;
    } catch (error) {
        res.json({error: error, success: false});
        return;
    }
})

router.get('/deploy_nft', async (req, res) => {
    try{
        const wallet = req.query.wallet;

        if(wallet === '' || wallet === undefined) {
            res.json({error: 'No wallet address sent', success: false});
            return;
        }
        
        const SourceNFT = new ethers.Contract('0x933F6088681F5DCEB1636c839Ff75F4071D52132', deploy_nft_abi, goerli_provider);
        const bal = await SourceNFT.balanceOf(wallet);

        if(parseInt(bal) === 0) {
            res.json({error: 'Must own an AGLD NFT first', success: false});
            return;
        } 

        const name = req.query.name;
        const symbol = req.query.symbol;
        const maxSupply = req.query.maxSupply;
        const price = req.query.price;
        const whitelist_price = req.query.whitelist_price;

        if(!name || !symbol || !maxSupply || !price || !whitelist_price) {
            res.json({error: 'Please send values for: name, symbol, maxSupply, price, whitelist_price', success: false});
            return;
        }

        const signer = new ethers.Wallet(process.env.PRIVATE_KEY, goerli_provider);

        const NFT_Factory = new ethers.ContractFactory(deploy_nft_abi, nft_bytecode, signer);
        const deployed_nft = await NFT_Factory.connect(signer).deploy(name, symbol, maxSupply, price, whitelist_price);
        
        await deployed_nft.deployed();

        const transfer_ownership = await deployed_nft.connect(signer).transferOwnership(wallet);
        await transfer_ownership.wait(1);

        const result = {
            inputs: {wallet: wallet},
            output: {data: deployed_nft.address},
            success: true
        }
        res.json(result);
        return;

    } catch (error) {
        console.log(error);
        res.json({error: error, success: false});
        return;
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

        //const userSnapshot = await getDocs(usersRef);
        console.log(userSnapshot);
        let owned_contracts = userSnapshot.docs[0].data().owned_contracts;
        owned_contracts.push('test');
        await setDoc(doc(usersRef, wallet), {
            wallet: wallet,
            owned_contracts: owned_contracts
        })

        res.send('write successful');
    } catch(error) {
        console.log(error);
        res.send(error);
    }
})