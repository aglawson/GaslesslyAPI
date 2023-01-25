import { ethers } from 'ethers';
import { token_abi } from '../abi.js';
import dotenv from 'dotenv'
dotenv.config();

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)

export const TokenBalance = async (req) => {
    const contract = req.query.contract;
    const wallet = req.query.wallet;

    let error = {errors: []};

    if(contract === "" || contract === undefined) {
        error.errors.push("Invalid or empty contract address");
    }
    if(wallet === "" || wallet === undefined) {
        error.errors.push("Invalid or empty wallet address");
    }
    if(error.errors.length > 0) {
        return {
            errors: error,
            success: false
        };
    }
    const token = new ethers.Contract(contract, token_abi, provider);
    const bal = await token.balanceOf(wallet);
    

    const result = {
        inputs: {wallet: wallet, contract: contract},
        output: {data: parseFloat(bal) / 10**18},
        success: true
    }

    return result;
}