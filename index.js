import express from 'express'
export const router = express.Router()
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()

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
import { GetOwnedContracts } from './functions/GetOwnedContracts.js'
import { SetState } from './functions/SetState.js'
import { GetCollectionOwner } from './functions/GetCollectionOwner.js'
import { SetALPrice } from './functions/SetALPrice.js'
import { IsOriginalMinter } from './functions/IsOriginalMinter.js'

router.use(bodyParser.json())

router.get('/is_original_minter', async (req, res) => {
    try {
        const result = await IsOriginalMinter(req)

        res.json(result)
    } catch (error) {
        res.json({success: false, error: error})
    }
})

/**
 * Returns the amount of NFTs owned by the wallet for the given contract address
 * @param req has following members
 * wallet - wallet address whose balance is being checked
 * contract - contract address of NFT
 * network - 'goerli', 'mainnet', 'arbitrum', 'optimism', 'polygon', 'avax'
 */
router.get('/nft_balance', async (req, res) => {
    try{
        const result = await NFTBalance(req)

        res.json(result)
    } catch (error) {
        res.json({success: false, error: error})
    }
})

/**
 * Returns the amount of ERC20 tokens owned by the wallet for the given contract address
 * @param req has following members
 * wallet - wallet address whose balance is being checked
 * contract - contract address of ERC20 token
 * network - 'goerli', 'mainnet', 'arbitrum', 'optimism', 'polygon', 'avax'
 */
router.get('/token_balance', async (req, res) => { 
    try {
        const result = await TokenBalance(req)

        res.json(result)
    } catch(err) {
        res.json({success: false, error: err})
    }

})

/**
 * Returns the amount of ETH owned by the wallet
 * @param req has following members
 * wallet - wallet address whose balance is being checked
 * network - 'goerli', 'mainnet', 'arbitrum', 'optimism', 'polygon', 'avax'
 */
router.get('/eth_balance', async (req, res) => {
    try{
        const result = await ETHBalance(req)

        res.json(result)
    } catch (error) {
        res.json({success: false, errors: error})
    }
})

/**
 * @param req has following members
 * wallet - wallet address on behalf of whom the tx is being sent
 * contract - address of recipient of tx
 * network - 'goerli', 'mainnet', 'arbitrum', 'optimism', 'polygon', 'avax' //currently only goerli supported
 * signature - wallet's signature of the tx data
 * reqStruct - struct containing tx data {from: address, to: address, value: uint, gas: uint, nonce: uint, data: (hash of tx data)}
 * 
 * @returns tx hash of resulting tx
 */
router.get('/relay', async (req, res) => {
    try{
        const auth = await SignatureAuth(req)
        if(!auth) {
            res.status(401).send('Access Denied')
            return
        }

        const result = await Relay(req)

        res.json(result)
    } catch(error) {
        res.json({success: false, errors: error})
    }
})

/**
 * @param req has following members
 * network - 'goerli'
 * func - name of function with parameter types, ex. functionName(uint256,address,string)
 * 
 * @returns hash of tx data to be used in relay function
 */
router.get('/get_selector', async (req, res) => {
    try{
       const result = await GetSelector(req)

        res.json(result)
    } catch(error) {
        res.send(error)
    }
})

/**
 * @param req includes following members
 * types - comma separated list of parameter types, ex. uint,address,string
 * values - comma separated list of parameter values, ex. 100,0x7B3AF414448ba906f02a1CA307C56c4ADFF27ce7,hello world
 * 
 * @returns hash of these parameters to be used in relay function
 */
router.get('/get_encoded_params', async (req, res) => {
    try{
        const result = await GetEncodedParams(req)

        res.json(result)
    } catch(error) {
        res.send(error)
    }
})

/**
 * @param req includes following members
 * network - 'goerli', 'mainnet', 'arbitrum', 'optimism', 'polygon', 'avax' -> only goerli currently supported
 * wallet - wallet address of user
 * 
 * @returns nonce of wallet according to relayer contract - needed for relay function
 */
router.get('/get_relay_nonce', async (req, res) => {
    try{
        const result = await GetRelayNonce(req)

        res.json(result)
    } catch (error) {
        res.send(error)
    }
})

/**
 * @param req includes following members
 * wallet - wallet address of user whose balance is being checked
 * 
 * @returns array of details about which NFTs are held by this wallet on this network
 */
router.get('/owned_nfts', async(req, res) => {
    try{
        const result = await OwnedNFTs(req)

        res.json(result)
    } catch (error) {
        console.log(error)
        res.json({success: false, error: error})
    }
})

/**
 * @param req includes the following members
 * contract - address of NFT smart contract
 * 
 * @returns all wallets who own at least one NFT from given contract
 */
router.get('/contract_owners', async (req, res) => {
    try{
        const result = await ContractOwners(req)

        res.json(result)
    } catch (error) {
        res.json({success: false, error: error})
    }
})

/**
 * @param req includes the following members
 * wallet - address of user
 * contract - address of smart contract
 * 
 * @returns merkle proof which cryptographically proves 
 * the given wallet address is on the whitelist for the 
 * given smart contract address.
 * 
 * If wallet is not on whitelist, throws an error.
 */
router.get('/merkle_proof', async (req, res) => {
    try{
        const result = await MerkleProof(req)

        res.json(result)
    } catch (error) {
        res.json({error: error, success: false})
    }
})

/**
 * @param req includes the following members
 * contract - address of smart contract in question
 * 
 * @returns merkle root for whitelist associated with
 * contract. Useful to add to smart contract.
 */
router.get('/merkle_root', async (req, res) => {
    try{
        const result = await MerkleRoot(req)

        res.json(result)
    } catch (error) {
        res.json({error: error, success: false})
    }
})

/**
 * @param req includes the following members
 * name - name of NFT
 * symbol
 * maxSupply
 * price
 * whitelist_price
 * wallet - wallet address on whose behalf the contract is being deployed
 * network - network to deploy contract on - currently only 'goerli' supported
 * 
 * signature - signature of wallet
 * message - message signed by wallet
 * 
 * ^ used to authenticate that the request came from the wallet provided
 * 
 * @returns address of resulting smart contract
 */
router.get('/deploy_nft', async (req, res) => {
    try{
        const auth = await SignatureAuth(req)
        if(!auth) {
            res.status(401).send('Access Denied')
            return
        }

        const result = await DeployNFT(req)

        res.json(result)
    } catch (error) {
        res.json({error: error, success: false})
    }
})

/**
 * @description updates whitelist associated with given smart contract address in 
 * database and on the smart contract itself - at not cost to the caller.
 * 
 * @param req includes following members
 * contract - address of smart contract
 * wallets - comma separated list of addresses to add to whitelist
 *           ex. 0x7B3AF414448ba906f02a1CA307C56c4ADFF27ce7,0x1Dd7134A77f5e3E2E63162bBdcFD494140908270,0x007FB487100f74Bf425B7AdE9Ca0Ae1916f54f11
 * network - currently only 'goerli' is supported
 * wallet - address of sender of request - must be owner of the smart contract
 * 
 * signature - signature of wallet
 * message - message signed by wallet
 * 
 * ^ used to authenticate that the request came from the wallet provided
 */
router.get('/append_whitelist', async (req, res) => {
    try{
        const auth = await SignatureAuth(req)
        if(!auth) {
            res.status(401).send('Access Denied')
            return
        }

        const result = await AppendWhitelist(req)

        res.json(result)
    } catch(error) {
        console.log(error)
        res.json({error: error, success: false})
    }
})

/**
 * @param req includes following members
 * wallet - wallet address being queried about
 * 
 * @returns array of smart contract addresses owned by given wallet
 * 
 * @note only returns data about contracts deployed through this API
 */
router.get('/get_owned_contracts', async (req, res) => {
    try {
        const auth = await SignatureAuth(req)
        if(!auth) {
            res.status(401).send('Access Denied')
            return
        }

        const result = await GetOwnedContracts(req)

        res.json(result)
    } catch (error) {
        console.log(error)
        res.json({error: error, success: false})
    }
})

/**
 * @param req includes following members
 * wallet - address of user being authenticated
 * message - message being signed by wallet
 * signature - hash resulting from wallet signature of message
 * 
 * @returns true if signature and message recover to given wallet address
 * false otherwise
 */
router.get('/signature_auth', async (req, res) => {
    try {
        const auth = await SignatureAuth(req)

        res.json(auth)
    } catch (error) {
        console.log(error)
        res.json({success: false, error: error})
    }
})

/**
 * @param req includes the following members
 * wallet - address of user (must be contract owner)
 * contract - address of contract being updated
 * state - integer from 0 - 2 (0->closed, 1->allow list only, 2->public mint)
 * network - 'goerli', 'mainnet', 'arbitrum', 'optimism', 'polygon', 'avax', whichever the contract is on
 * 
 * message - message being signed by wallet
 * signature - hash resulting from wallet signature of message
 * 
 * @returns tx hash of state update call
 */
router.get('/set_state', async (req, res) => {
    try {
        const auth = await SignatureAuth(req)
        if(!auth) {
            res.status(401).send('Access Denied')
            return
        }
        const result = await SetState(req)
        res.json(result)        
    } catch (error) {
        res.json({success: false, error: error})
    }
})

/**
 * @param req contains the following members
 * contract - address of smart contract to update
 * price - new price
 * wallet - originator of function call (verified by SignatureAuth)
 * network - network where the smart contract is deployed
 * 
 * @note signature and message are also members sent in the request for SignatureAuth
 */
router.get('/set_price', async (req,res) => {
    try{
        const auth = await SignatureAuth(req)
        if(!auth) {
            res.status(401).send('Access Denied')
            return
        }

        const result = await SetPrice(req)
        res.json(result)
    } catch (error) {
        res.json({success: false, error: error})
    }
})

/**
 * @param req contains the following members
 * contract - address of smart contract to update
 * price - new price
 * wallet - originator of function call (verified by SignatureAuth)
 * network - network where the smart contract is deployed
 * 
 * @note signature and message are also members sent in the request for SignatureAuth
 */
router.get('/set_al_price', async (req,res) => {
    try{
        const auth = await SignatureAuth(req)
        !auth ? res.status(401).send('Access Denied') : console.log('authorized')

        const result = await SetALPrice(req)
        res.json(result)
    } catch (error) {
        res.json({success: false, error: error})
    }
})

/**
 * @param req contains the following members
 * contract - address of smart contract 
 * network - network where smart contract is deployed
 * 
 * @returns wallet address that currently owns that smart contract
 */
router.get('/get_collection_owner', async (req,res) => {
    try{
        const result = await GetCollectionOwner(req)
        res.json(result)
    } catch (error) {
        res.json({success: false, error: error})
    }
})