import { ethers } from 'ethers'
import { nft_abi } from '../abi.js'
import dotenv from 'dotenv'
import { GetProvider } from './GetProvider.js'
dotenv.config()

export const GetCollectionOwner = async(req) => {
    const contract = req.query.contract
    const network = req.query.network

    const provider = GetProvider(network)

    if(contract === "" || contract === undefined) {
        throw 'Invalid or empty contract address'
    }

    const nft = new ethers.Contract(contract, nft_abi, provider)

    const owner = await nft.owner()

    const result = {
        inputs: {contract: contract},
        output: {data: owner},
        success: true
    }

    return result
}