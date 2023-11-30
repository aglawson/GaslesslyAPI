import { Alchemy } from "alchemy-sdk"

export const OwnedNFTs = async (req) => {
    const network = req.query.network
    const setNetwork = network === 'mainnet' ? "eth-mainnet" : network === 'goerli' ? "eth-goerli" : network === 'polygon' ? "polygon-mainnet" : 'invalid'

    let settings = {
        apiKey: process.env.ALCHEMY_KEY, 
        network: setNetwork
    }
    
    const alchemy = new Alchemy(settings)

    //settings.apiKey = network === 'polygon' ? process.env.ALCHEMY_POLYGON : settings.apiKey

    if(settings.network === 'invalid'){
        throw 'Network was not specified'
    }
    const wallet = req.query.wallet

    const nfts = await alchemy.nft.getNftsForOwner(wallet)

    const total = nfts.totalCount
    let data = {total: 0, nfts: []}

    // for (const n of nfts.ownedNfts) {
    //     data.nfts.push({
    //         name: n.contract.name,
    //         symbol: n.contract.symbol,
    //         address: n.contract.address,
    //         token_id: n.tokenId
    //     })
    // }
    data.total = total

    const result = {
        inputs: {wallet: wallet},
        output: {data: nfts.ownedNfts},
        success: true
    }

    return result
}