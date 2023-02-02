/**
 * @description This file contains logic to return a hash of a 
 * function and its expected parameter types. This is useful for
 * creating a Meta Transaction.
 */
import { ethers } from 'ethers'
import { selector_abi } from '../abi.js'
import dotenv from 'dotenv'
import { GetProvider } from './GetProvider.js'
dotenv.config()

export const GetSelector = async (req) => {
    const network = req.query.network
    const provider = GetProvider(network)
    
    const selector = new ethers.Contract('0xD7dA7285f732262B3Cc80639d27c5Ee87f2e3a70', selector_abi, goerli_provider)

    let func = req.query.func
    const funcHash = await selector.getSelector(func)

    const result = {
        inputs: {func: func},
        output: {data: funcHash},
        success: true
    }

    return result
}