import { ethers } from 'ethers'
import { relayer_abi } from '../abi.js'
import dotenv from 'dotenv'
import { GetProvider } from './GetProvider.js'
dotenv.config()

export const GetRelayNonce = async (req) => {
    const wallet = req.query.wallet;
    const relayer = '0x2A0d1f0EE9c5584b1694BCa16879423432770A52'
    const network = req.query.network
    const provider = GetProvider(network)
    const relay = new ethers.Contract(relayer, relayer_abi, provider)

    const nonce = await relay.getNonce(wallet)
    const result = {
        inputs: {wallet: wallet},
        output: {data: parseInt(nonce)},
        success: true
    }

    return result
}