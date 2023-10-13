import { ethers } from "ethers"
import {getFirestore, collection, query, getDocs, where, setDoc, doc } from 'firebase/firestore/lite'
import { initializeApp } from "firebase/app"
import dotenv from 'dotenv'
dotenv.config()

const faucet_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"funder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ThankYou","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"claims","outputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"}],"name":"drip","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dripPercentage","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fund","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"funds","outputs":[{"internalType":"address","name":"funder","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_dripPercentage","type":"uint8"}],"name":"setDripPercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}]

export const GetDripAmount = async (req) => {
    try{
    const provider = new ethers.providers.JsonRpcProvider("https://sepolia-rpc.scroll.io");
    const contract = "0xA38e65FC71e31493FE2Fb4FeAB8f712D93706D70"
    const FaucetContract = new ethers.Contract(contract, faucet_abi, provider)
    
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

    console.log(signer)

    const dripPercentage = await FaucetContract.dripPercentage()
    const balance = await provider.getBalance(FaucetContract.address);
    const payout = Number(balance) / 1000 * dripPercentage;

    return (payout / 10**18)
    } catch (error) {
        console.log(error)
        throw error;
    }
}