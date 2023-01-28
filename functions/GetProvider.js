import { ethers } from "ethers";

export const GetProvider = (network) => {
  return network === "goerli"
    ? new ethers.providers.JsonRpcProvider(process.env.RPC_GOERLI)
    : network === "mainnet"
    ? new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
    : "invalid";
};
