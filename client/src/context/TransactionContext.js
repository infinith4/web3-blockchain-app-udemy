import { ethers } from "ethers"
import { createContext, useEffect } from "react";
import { contractABI, contractAddress } from "../utils/connect";


export const TransactionContext = createContext();

const { ethereum } = window.ethereum;

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

    useEffect(() => {
        checkMetamaskWalletConnected();
    },[]);

    return (<TransactionContext.Provider value={{name: "shincode" }}>{children}</TransactionContext.Provider>);
};