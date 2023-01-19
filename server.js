import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config();
import { ethers } from 'ethers';
import  {nft_abi}  from './abi.js';

app.use(bodyParser.json())

let provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});

app.get('/', (req, res) => {
    res.send(`Available endpoints: 
        /nft_balance
    `);
});

app.get('/nft_balance', async (req, res) => {
    const contract = req.query.contract_address;
    const wallet = req.query.wallet_address;

    let error = {errors: []};

    if(contract === "" || contract === undefined) {
        error.errors.push("Invalid or empty contract address");
    }
    if(wallet === "" || wallet === undefined) {
        error.errors.push("Invalid or empty wallet address");
    }
    if(error.errors.length > 0) {
        res.json(error);
    }

    try {
        const nft = new ethers.Contract(contract, nft_abi, provider);

        const bal = await nft.balanceOf(wallet);
    
        const result = {
            wallet: wallet,
            contract: contract,
            balance: parseInt(bal)
        }

        res.send(result);
    } catch (err) {
    }

});