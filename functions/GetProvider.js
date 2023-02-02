import { ethers } from "ethers"

export const GetProvider = (network) => {
    let provider

    switch(network) {
        case 'goerli': 
            provider = new ethers.providers.JsonRpcProvider(process.env.RPC_GOERLI)
            break

        case 'mainnet':
            provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
            break
        
        case 'polygon':
            provider = new ethers.providers.JsonRpcProvider(process.env.RPC_POLYGON)
            break
        
        case 'arbitrum':
            provider = new ethers.providers.JsonRpcProvider(process.env.RPC_ARBITRUM)
            break

        case 'optimism':
            provider = new ethers.providers.JsonRpcProvider(process.env.RPC_OPTIMISM)
            break
        
        case 'avax':
            provider = new ethers.providers.JsonRpcProvider(process.env.RPC_AVAX)
            break

        default:
            throw 'network is null or not supported'
    }

    return provider
}