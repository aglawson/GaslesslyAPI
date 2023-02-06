/**
 * @description This file contains the logic to securely and
 * gaslessly update the price of an NFT from a given smart contract
 * address for whitelisted users. 
 * The request must be sent with the parameters deailed in index.js.
 * 
 * Security is enforced by requiring a signature from the requesting user.
 * The signature and message are used to recover the original signer. This 
 * ensures the function can only be called by the owner of that wallet.
 * Then the function checks if the wallet owns the smart contract being updated.
 * Once the security checks are passed, the signature is saved to the DB, so we can
 * make sure it is impossible to reuse an old signature. 
 */
import { deploy_nft_abi } from "../abi.js"
import { ethers } from "ethers"
import { GetProvider } from "./GetProvider.js"

export const SetALPrice = async (req) => {
    // Get input params
    const contract = req.query.contract
    const network = req.query.network
    const sender = req.query.wallet
    const price = parseFloat(req.query.price) * 10**18

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

    const result = {
        inputs: {contract: contract},
        output: {data: price},
        success: true
    }
    
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

    // Write new price to smart contract
    const tx = await NFTContract.connect(signer).setALPrice(price.toString())
    result.output.tx = tx.hash

    return result
}