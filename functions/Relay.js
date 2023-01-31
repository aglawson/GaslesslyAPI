import { ethers } from 'ethers';
import { relayer_abi } from '../abi.js';
import dotenv from 'dotenv'
import { GetProvider } from './GetProvider.js';
dotenv.config();

export const Relay = async (req) => {
    const network = req.query.network;
    const provider = GetProvider(network);
    const privateKey = process.env.PRIVATE_KEY;
    const signer = new ethers.Wallet(privateKey, provider);
    const relayer = '0x2A0d1f0EE9c5584b1694BCa16879423432770A52';
    const signature = req.query.signature;
    const reqStruct = JSON.parse(req.query.reqStruct);

    const contract = new ethers.Contract(relayer, relayer_abi, provider);
    let result = await contract.connect(signer).execute(reqStruct, signature);
    await result.wait(1)
    
    const response = {
        inputs: {signature: signature, reqStruct: reqStruct},
        output: {data: result.hash},
        success: true
    }
    return response;
}