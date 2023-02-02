/**
 * @description This file contains the logic to return all the holders of 
 * an NFT smart contract.
 */
import { Alchemy } from "alchemy-sdk"


export const ContractOwners = async (req) => {
    const contract = req.query.contract
    const network = req.query.network

    const setNetwork = network === 'mainnet' ? "eth-mainnet" : network === 'goerli' ? "eth-goerli" : network === 'polygon' ? "polygon-mainnet" : 'eth-mainnet'

    let settings = {
        apiKey: process.env.ALCHEMY_KEY, 
        network: setNetwork
    };
    
    const alchemy = new Alchemy(settings)

    const owners = await alchemy.nft.getOwnersForContract(contract)

    const result = {
        inputs: {contract: contract},
        output: {data: owners},
        success: true
    }

    return result
}