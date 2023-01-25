import { ethers } from 'ethers';
import { relayer_abi } from '../abi.js';
import dotenv from 'dotenv'
dotenv.config();

const goerli_provider = new ethers.providers.JsonRpcProvider(process.env.RPC_GOERLI);

export const GoerliRelay = async (req) => {
    const privateKey = process.env.PRIVATE_KEY;
    const signer = new ethers.Wallet(privateKey, goerli_provider);
    const relayer = '0x2A0d1f0EE9c5584b1694BCa16879423432770A52';
    const signature = req.query.signature;
    const reqStruct = JSON.parse(req.query.reqStruct);
    const contract = new ethers.Contract(relayer, relayer_abi, goerli_provider);
    let result = await contract.connect(signer).execute(reqStruct, signature);
    await result.wait(1)
    const response = {
        inputs: {signature: signature, reqStruct: reqStruct},
        output: {data: result.hash},
        success: true
    }
    return response;
}