import { ethers } from "ethers"
import { contractABI, contractAddress } from "../utils/connect";


export const transactionContext = createContext();


//get smartcontract

const getSmartContract = () => {
    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    const provider = new ethers.providers.Web3Provider(window.ethereum)
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
    return (<TransactionContext.Provider value={{name: "shincode" }}>{children}</TransactionContext.Provider>)
};