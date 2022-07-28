// smart contract
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Transactions {
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
    }

    TransferStruct[] transactions;

    function addToBlockChain(address payable receiver, uint amount) public {
        transactions.push(TransferStruct(msg.sender, receiver, amount));
    }
}