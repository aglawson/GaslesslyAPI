import express from 'express'
export const router = express.Router()
const app = express()
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config();

import { NFTBalance } from './functions/NFTBalance.js'
import { TokenBalance } from './functions/TokenBalance.js'
import { Relay } from './functions/Relay.js'
import { GetSelector } from './functions/GetSelector.js'
import { GetEncodedParams } from './functions/GetEncodedParams.js'
import { GetRelayNonce } from './functions/GetRelayNonce.js'
import { OwnedNFTs } from './functions/OwnedNFTs.js'
import { ContractOwners } from './functions/ContractOwners.js'
import { MerkleProof } from './functions/MerkleProof.js'
import { MerkleRoot } from './functions/MerkleRoot.js'
import { DeployNFT } from './functions/DeployNFT.js'
import { AppendWhitelist } from './functions/AppendWhitelist.js'
import { ETHBalance } from './functions/ETHBalance.js'
import { SignatureAuth } from './functions/SignatureAuth.js'

router.use(bodyParser.json())

function auth(req) {
    if(!process.env.API_KEYS.split(',').includes(req.query.api_key)) return false;
    return true;
}

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
    try{
        const result = await ETHBalance(req);

        res.json(result);
    } catch (error) {
        res.json({success: false, errors: error});
    }
})

router.get('/relay', async (req, res) => {
    !auth(req) ? res.status(401).send('Access Denied') : console.log('authorized');

    try{
        const result = await Relay(req);

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

router.get('/append_whitelist', async (req, res) => {
    !auth(req) ? res.status(401).send('Access Denied') : console.log('authorized');

    try{
        const result = await AppendWhitelist(req);

        res.json(result);
    } catch(error) {
        console.log(error);
        res.json({error: error, success: false});
    }
})

router.get('/signature_auth', async (req, res) => {
    try{
        const result = await SignatureAuth(req);

        res.json(result);
    } catch (error) {
        console.log(error);
        res.json({success: false, errors: error});
    }
})