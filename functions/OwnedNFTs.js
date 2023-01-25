import { Network, Alchemy } from "alchemy-sdk";
const settings = {
    apiKey: process.env.ALCHEMY_KEY, 
    network: Network.ETH_MAINNET
};
  
const alchemy = new Alchemy(settings);

export const OwnedNFTs = async (req) => {
    const wallet = req.query.wallet;

    const nfts = await alchemy.nft.getNftsForOwner(wallet);

    const total = nfts.totalCount;
    let data = {total: 0, nfts: []};

    for (const n of nfts.ownedNfts) {
        data.nfts.push({
            name: n.contract.name,
            symbol: n.contract.symbol,
            address: n.contract.address,
            token_id: n.tokenId
        });
    }
    data.total = total;

    const result = {
        inputs: {wallet: wallet},
        output: {data: data},
        success: true
    }

    return result;
}