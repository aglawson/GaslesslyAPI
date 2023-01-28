import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
import { deploy_nft_abi } from "../abi.js";
import { initializeApp } from "firebase/app";
import { ethers } from "ethers";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  setDoc,
  doc,
} from "firebase/firestore/lite";
import { GetProvider } from "./GetProvider.js";

const firebaseConfig = {
  apiKey: process.env.fb_key,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const fb = initializeApp(firebaseConfig);
const db = getFirestore(fb);

export const AppendWhitelist = async (req) => {
  const contract = req.query.contract;
  const addresses = req.query.wallets.split(",");
  const network = req.query.network;
  const sender = req.query.wallet;

  const provider = GetProvider(network);

  const code =
    network === "goerli"
      ? await provider.getCode(contract)
      : network === "mainnet"
      ? await provider.getCode(contract)
      : "invalid";

  if (code === "invalid") {
    throw "Network was not specified";
  }
  if (code === "0x") {
    throw "Address entered is not a contract address";
  }

  const NFTContract = new ethers.Contract(contract, deploy_nft_abi, provider);
  const isAdmin = await NFTContract.isAdmin(process.env.wallet_address);
  const owner = await NFTContract.owner();
  console.log(owner);
  console.log(sender);
  console.log(isAdmin);

  if (!isAdmin) {
    throw "We are not authorized to update this contract";
  }
  if (owner.toLowerCase() !== sender.toLowerCase()) {
    throw "Sender is not the contract owner";
  }

  const wlRef = collection(db, "whitelists");
  const q = query(
    collection(db, "whitelists"),
    where("contract", "==", contract)
  );
  const wlSnapshot = await getDocs(q);

  let whitelist;
  if (wlSnapshot.docs.length === 0) {
    //wlRef = doc(db, 'whitelists', contract)
    await setDoc(doc(wlRef, contract), {
      addresses: addresses,
      contract: contract,
    });

    whitelist = addresses;
  } else {
    whitelist = wlSnapshot.docs[0].data().addresses;
    for (let i = 0; i < addresses.length; i++) {
      if (!whitelist.includes(addresses[i])) {
        whitelist.push(addresses[i]);
      }
    }

    await setDoc(doc(wlRef, contract), {
      addresses: whitelist,
      contract: contract,
    });
  }

  const leafNodes = whitelist.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const root = merkleTree.getHexRoot();

  const result = {
    inputs: { contract: contract },
    output: { data: root },
    success: true,
  };

  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const tx = await NFTContract.connect(signer).setALRoot(result.output.data);
  result.output.tx = tx.hash;
  return result;
};
