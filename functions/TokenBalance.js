import { ethers } from 'ethers'
import { token_abi } from '../abi.js'
import dotenv from 'dotenv'
import { GetProvider } from './GetProvider.js'
dotenv.config()

export const TokenBalance = async (req) => {
    const contract = req.query.contract
    const wallet = req.query.wallet
    const network = req.query.network

    const provider = GetProvider(network)

    let error = {errors: []}

    if(contract === "" || contract === undefined) {
        throw 'Invalid or empty contract address'
    }
    if(wallet === "" || wallet === undefined) {
        throw 'Invalid or empty wallet address'
    }

    const token = new ethers.Contract(contract, token_abi, provider)
    const bal = await token.balanceOf(wallet)
    

    const result = {
        inputs: {wallet: wallet, contract: contract},
        output: {data: parseFloat(bal) / 10**18},
        success: true
    }

    return result
}