import express from 'express'
export const router = express.Router()
const app = express()
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config();
import { ethers } from 'ethers';
import  {nft_abi, token_abi}  from './abi.js';

router.use(bodyParser.json())

let provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)

// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//   console.log('Server started on port ' + PORT);
// });

// router.get('/', (req, res) => {
//     res.send(`Available endpoints: 
//         /nft_balance
//     `);
// });

router.get('/nft_balance', async (req, res) => {
    //res.json({contract: req.query.contract_address, wallet: req.query.wallet_address});
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
        res.json({
            errors: error,
            success: false
        });
    }
    const nft = new ethers.Contract(contract, nft_abi, provider);

    const bal = await nft.balanceOf(wallet);

    const result = {
        inputs: {wallet: wallet, contract: contract},
        output: {balance: parseInt(bal)},
        success: true
    }

    res.json(result);
});

router.get('/token_balance', async (req, res) => { 
    try {
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
            res.json({
                errors: error,
                success: false
            });
        }
        const token = new ethers.Contract(contract, token_abi, provider);
        const bal = await token.balanceOf(wallet);
        

        const result = {
            inputs: {wallet: wallet, contract: contract},
            output: {data: parseFloat(bal) / 10**18},
            success: true
        }

        res.json(result);
    } catch(err) {
        res.json({success: false, error: err});
    }

});
