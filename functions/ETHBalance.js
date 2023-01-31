import { GetProvider } from "./GetProvider.js";

export const ETHBalance = async (req) => {
    const network = req.query.network;
    const wallet = req.query.wallet;
    
    const provider = GetProvider(network);

    if(provider === 'invalid') {
        throw('Network was not specified')
    }

    if(wallet === "" || wallet === undefined) {
        throw("Invalid or empty wallet address");
    }

    const balance = await provider.getBalance(wallet)

    const result = {
        inputs: {wallet: wallet},
        output: {data: (parseInt(balance) / 10**18).toFixed(6)},
        success: true
    }

    return result;
}