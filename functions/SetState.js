import { deploy_nft_abi } from "../abi.js";
import { ethers } from "ethers";
import { GetProvider } from "./GetProvider.js";

export const SetState = async (req) => {
    const contract = req.query.contract;
    const state = req.query.state;
    const network = req.query.network;
    const sender = req.query.wallet;

    const provider = GetProvider(network);

    const code = network === 'goerli' ? await provider.getCode(contract) : network === 'mainnet' ? await provider.getCode(contract) : 'invalid';

    if(code === 'invalid') {
        throw('Network was not specified');
    }
    if(code === '0x') {
        throw('Address entered is not a contract address');
    }

    const NFTContract = new ethers.Contract(contract, deploy_nft_abi, provider);
    const isAdmin = await NFTContract.isAdmin(process.env.wallet_address);
    const owner = await NFTContract.owner();

    if(!isAdmin) {
        throw('We are not authorized to update this contract');
    }
    if(owner.toLowerCase() !== sender.toLowerCase()) {
        throw('Sender is not the contract owner');
    }

    const result = {
        inputs: {contract: contract, state: state},
        output: {data: state},
        success: true
    }
    
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    const tx = await NFTContract.connect(signer).setState(state);
    result.output.tx = tx.hash;
    return result;
}