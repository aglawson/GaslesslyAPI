/**
 * @description This file contains the logic to securely and
 * gaslessly update a whitelist associated with a given smart contract
 * address. The request must be sent with the parameters deailed in index.js.
 * 
 * Security is enforced by requiring a signature from the requesting user.
 * The signature and message are used to recover the original signer. This 
 * ensures the function can only be called by the owner of that wallet.
 * Then the function checks if the wallet owns the smart contract being updated.
 * Once the security checks are passed, the signature is saved to the DB, so we can
 * make sure it is impossible to reuse an old signature. 
 */
import {MerkleTree} from "merkletreejs"
import keccak256 from "keccak256"
import { deploy_nft_abi } from "../abi.js"
import { initializeApp } from "firebase/app"
import { ethers } from "ethers"
import { getFirestore, collection, query, getDocs, where, setDoc, doc } from 'firebase/firestore/lite'
import { GetProvider } from "./GetProvider.js"

const firebaseConfig = {
    apiKey: process.env.fb_key,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
}

const fb = initializeApp(firebaseConfig)
const db = getFirestore(fb)

export const AppendWhitelist = async (req) => {
    // Get input params
    const contract = req.query.contract
    const addresses = req.query.wallets.split(',')
    const network = req.query.network
    const sender = req.query.wallet

    const provider = GetProvider(network)

    // Check if contract address sent with request is actually a smart contract
    const code = await provider.getCode(contract)
    if(code === 'invalid') {
        throw('Network was not specified')
    }
    if(code === '0x') {
        throw('Address entered is not a contract address')
    }

    const NFTContract = new ethers.Contract(contract, deploy_nft_abi, provider)

    // Check that we have admin permissions on given smart contract
    // and that the function caller is the owner of the smart contract
    const isAdmin = await NFTContract.isAdmin(process.env.wallet_address)
    const owner = await NFTContract.owner()
    if(!isAdmin) {
        throw('We are not authorized to update this contract')
    }
    if(owner.toLowerCase() !== sender.toLowerCase()) {
        throw('Sender is not the contract owner')
    }

    // Retrieve whitelist associated with contract address
    const wlRef = collection(db, 'whitelists')
    const q = query(collection(db, "whitelists"), where("contract", "==", contract))
    const wlSnapshot = await getDocs(q)

    // Add new wallet addresses to whitelist array and write to DB
    let whitelist
    if(wlSnapshot.docs.length === 0) {
        //wlRef = doc(db, 'whitelists', contract)
        await setDoc(doc(wlRef, contract), {
            addresses: addresses,
            contract: contract
        })

        whitelist = addresses
    } else {
        whitelist = wlSnapshot.docs[0].data().addresses
        for(let i = 0; i < addresses.length; i++) {
            if(!whitelist.includes(addresses[i])){
                whitelist.push(addresses[i])
            }
        }

        await setDoc(doc(wlRef, contract), {
            addresses: whitelist,
            contract: contract
        })
    }

    // Construct new Merkle Root
    const leafNodes = whitelist.map(addr => keccak256(addr))
    const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true})
    const root = merkleTree.getHexRoot()

    const result = {
        inputs: {contract: contract},
        output: {data: root},
        success: true
    }
    
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

    // Write new Merkle Root to smart contract
    const tx = await NFTContract.connect(signer).setALRoot(result.output.data)
    result.output.tx = tx.hash

    return result
}