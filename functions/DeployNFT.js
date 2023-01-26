import { ethers } from 'ethers';
import  {deploy_nft_abi, nft_bytecode}  from '../abi.js';
import dotenv from 'dotenv'
import { GetProvider } from './GetProvider.js';
dotenv.config();

export const DeployNFT = async (req) => {
    const wallet = req.query.wallet;
    const network = req.query.network

    const provider = GetProvider(network);

    if(wallet === '' || wallet === undefined) {
        throw('No wallet address sent');
    }
    
    const SourceNFT = new ethers.Contract('0x933F6088681F5DCEB1636c839Ff75F4071D52132', deploy_nft_abi, provider);
    const bal = await SourceNFT.balanceOf(wallet);

    if(parseInt(bal) === 0) {
        throw ('Must own an AGLD NFT first');
    }

    const name = req.query.name;
    const symbol = req.query.symbol;
    const maxSupply = req.query.maxSupply;
    const price = req.query.price;
    const whitelist_price = req.query.whitelist_price;

    if(!name || !symbol || !maxSupply || !price || !whitelist_price) {
        throw ('Please send values for: name, symbol, maxSupply, price, whitelist_price');
    }

    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    const NFT_Factory = new ethers.ContractFactory(deploy_nft_abi, nft_bytecode, signer);
    const deployed_nft = await NFT_Factory.connect(signer).deploy(name, symbol, maxSupply, price, whitelist_price);
    
    await deployed_nft.deployed();

    const transfer_ownership = await deployed_nft.connect(signer).transferOwnership(wallet);
    await transfer_ownership.wait(1);

    const result = {
        inputs: {wallet: wallet},
        output: {data: deployed_nft.address},
        success: true
    }

    return result;
}