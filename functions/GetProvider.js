import { ethers } from "ethers"

export const GetProvider = (network) => {
    let provider
    if(network === 'goerli') {
        provider = new ethers.providers.JsonRpcProvider(process.env.RPC_GOERLI)

        return provider
    }

    if(network === 'mainnet') {
        provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)

        return provider
    }

    if(network === 'polygon') {
        provider = new ethers.providers.JsonRpcProvider(process.env.RPC_POLYGON)

        return provider
    }

    throw 'network is null or invalid'
}