import { ethers } from 'ethers';
import { relayer_abi } from '../abi.js';
import dotenv from 'dotenv'
dotenv.config();

const goerli_provider = new ethers.providers.JsonRpcProvider(process.env.RPC_GOERLI);

export const GetRelayNonce = async (req) => {
    const wallet = req.query.wallet;
    const relayer = '0x2A0d1f0EE9c5584b1694BCa16879423432770A52';
    const relay = new ethers.Contract(relayer, relayer_abi, goerli_provider);

    const nonce = await relay.getNonce(wallet);
    const result = {
        inputs: {wallet: wallet},
        output: {data: parseInt(nonce)},
        success: true
    }

    return result;
}