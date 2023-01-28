import { ethers } from "ethers";
import { token_abi } from "../abi.js";
import dotenv from "dotenv";
import { GetProvider } from "./GetProvider.js";
dotenv.config();

export const TokenBalance = async (req) => {
  const contract = req.query.contract;
  const wallet = req.query.wallet;
  const network = req.query.network;

  const provider = GetProvider(network);

  const error = { errors: [] };

  if (contract === "" || contract === undefined) {
    error.errors.push("Invalid or empty contract address");
  }
  if (wallet === "" || wallet === undefined) {
    error.errors.push("Invalid or empty wallet address");
  }
  if (error.errors.length > 0) {
    return {
      errors: error,
      success: false,
    };
  }
  const token = new ethers.Contract(contract, token_abi, provider);
  const bal = await token.balanceOf(wallet);

  const result = {
    inputs: { wallet: wallet, contract: contract },
    output: { data: parseFloat(bal) / 10 ** 18 },
    success: true,
  };

  return result;
};
