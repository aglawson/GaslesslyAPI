/**
 * @description This file contains logic to update the state of an
 * NFT smart contract. The possible states are as follows:
 * 0: closed - nobody can mint
 * 1: whitelist only - only whitelisted addresses can mint
 * 2: public - anyone can mint (whitelisted addresses still receive discount)
 * 
 * Admin wallet sends transaction on behalf of function caller
 */
import { deploy_nft_abi } from "../abi.js"
import { ethers } from "ethers"
import { GetProvider } from "./GetProvider.js"

export const SetState = async (req) => {
    const contract = req.query.contract
    const state = req.query.state
    const network = req.query.network
    const sender = req.query.wallet

    const provider = GetProvider(network)
    let gasPrice = await provider.getGasPrice();
    gasPrice = parseInt(gasPrice);

    // Make sure given contract address is a smart contract
    const code = await provider.getCode(contract)

    if(code === 'invalid') {
        throw 'Network was not specified'
    }
    if(code === '0x') {
        throw 'Address entered is not a contract address'
    }

    // Initialize smart contract object
    const NFTContract = new ethers.Contract(contract, deploy_nft_abi, provider)
    // Check that we have permission to update this contract's state
    // and that the function caller is the owner of the smart contract
    const isAdmin = await NFTContract.isAdmin(process.env.wallet_address)
    const owner = await NFTContract.owner()

    if(!isAdmin) {
        throw 'We are not authorized to update this contract'
    }
    if(owner.toLowerCase() !== sender.toLowerCase()) {
        throw 'Sender is not the contract owner'
    }

    const result = {
        inputs: {contract: contract, state: state},
        output: {data: state},
        success: true
    }

    // Construct signer and send transaction on behalf 
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
    const tx = await NFTContract.connect(signer).setState(state, {gasPrice: gasPrice})

    result.output.tx = tx.hash
    
    return result
}