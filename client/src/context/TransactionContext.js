import { ethers } from "ethers"
import { createContext, useEffect, useState } from "react";
import { contractABI, contractAddress } from "../utils/connect";

export const TransactionContext = createContext();

const { ethereum } = window;

//get smartcontract

const getSmartContract = () => {
    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    const provider = new ethers.providers.Web3Provider(ethereum)
    // MetaMask requires requesting permission to connect users accounts
    //await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();

    // The Contract object
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log(provider, signer, transactionContract);

    return transactionContract;
}

export const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [inputFormData, setInputFormData] = useState({
        addressTo: "",
        amount: "",
    });

    const handleChange = (e, name) => {
        setInputFormData((prevInputFormData) => ({
            ...prevInputFormData,
            [name]: e.target.value
        }));
    }

    //matamask と連携しているのかをまずは確認する
    const checkMetamaskWalletConnected = async () => {
        if(!ethereum) return alert("install metamask");
        const accounts = await ethereum.request({method: "eth_accounts"});
        console.log(accounts);
    }

    //メタマスクウォレットと連携する
    const connectWallet = async () => {

        if(!ethereum) return alert("install metamask");
        //メタマスクを持っていれば接続を開始する
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        console.log(accounts[0]);

        setCurrentAccount(accounts[0]);
    }

    //通貨のやり取りをする
    const sendTransaction = async() => {
        if(!ethereum) return alert("install metamask");
        console.log("send transaction");
    }

    const transactionParameters = {
        nonce: '0x00', // ignored by MetaMask
        gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
        gas: '0x2710', // customizable by user during MetaMask confirmation.
        to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
        from: ethereum.selectedAddress, // must match user's active address.
        value: '0x00', // Only required to send ether to the recipient from the initiating external account.
        data:
          '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
        chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
      };

    useEffect(() => {
        checkMetamaskWalletConnected();
    },[]);

    return (
        <TransactionContext.Provider value={{ connectWallet, sendTransaction, handleChange ,inputFormData}}>
          {children}
        </TransactionContext.Provider>);
};