import { Alchemy } from "alchemy-sdk"

/**
 * 
 * @param req contains wallet, contract, tokenId
 * wallet - suspected minter
 * contract - address of NFT
 * tokenId - ID of NFT in question
 * network - name of blockchain where contract is deployed (ex: eth-mainnet, polygon)
 * 
 * @returns true if wallet was the original minter of tokenId from contract
 *          false otherwise
 */

export const IsOriginalMinter = async (req) => {
    const network = req.query.network
    const setNetwork = network === 'mainnet' ? "eth-mainnet" : network === 'goerli' ? "eth-goerli" : network === 'polygon' ? "polygon-mainnet" : 'invalid'

    let settings = {
        apiKey: process.env.ALCHEMY_KEY, 
        network: setNetwork
    }
    
    const alchemy = new Alchemy(settings)

    if(settings.network === 'invalid'){
        throw 'Network was not specified'
    }

    const wallet = req.query.wallet
    const contract = req.query.contract
    const id = req.query.tokenId

    const res = await alchemy.core.getAssetTransfers({
    fromBlock: "0x0",
    fromAddress: "0x0000000000000000000000000000000000000000",
    toAddress: wallet,
    excludeZeroValue: true,
    contractAddresses: [contract],
    category: ["erc721", "erc1155"],
    });

    for(let i = 0; i < res.transfers.length; i++) {
        if(parseInt(res.transfers[i].tokenId) === parseInt(id)) {
            return true
        }
    }

    return false
}