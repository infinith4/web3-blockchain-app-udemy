// smart contract
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Transactions {
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
    }
}