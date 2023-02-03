import { ethers } from "ethers"

export const GetProvider = (network) => {
    const providers = {
        'goerli': process.env.RPC_GOERLI,
        'mainnet': process.env.RPC_URL,
        'polygon': process.env.RPC_POLYGON,
        'arbitrum': process.env.RPC_ARBITRUM,
        'optimism': process.env.RPC_OPTIMISM,
        'avax': process.env.RPC_AVAX
    }

    return new ethers.providers.JsonRpcProvider(providers[network])
}