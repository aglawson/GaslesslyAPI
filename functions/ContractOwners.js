import { Network, Alchemy } from "alchemy-sdk";
const settings = {
  apiKey: process.env.ALCHEMY_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export const ContractOwners = async (req) => {
  const contract = req.query.contract;

  const owners = await alchemy.nft.getOwnersForContract(contract);

  const result = {
    inputs: { contract: contract },
    output: { data: owners },
    success: true,
  };

  return result;
};
