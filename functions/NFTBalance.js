import { ethers } from 'ethers'
import { nft_abi } from '../abi.js'
import dotenv from 'dotenv'
import { GetProvider } from './GetProvider.js'
dotenv.config()

export const NFTBalance = async(req) => {
    const contract = req.query.contract
    const wallet = req.query.wallet
    const network = req.query.network

    const provider = GetProvider(network)

    if(contract === "" || contract === undefined) {
        throw 'Invalid or empty contract address'
    }
    if(wallet === "" || wallet === undefined) {
        throw 'Invalid or empty wallet address'
    }

    const nft = new ethers.Contract(contract, nft_abi, provider)

    const bal = await nft.balanceOf(wallet)

    const result = {
        inputs: {wallet: wallet, contract: contract},
        output: {balance: parseInt(bal)},
        success: true
    }

    return result
}