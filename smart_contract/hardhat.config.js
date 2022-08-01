//https://eth-goerli.g.alchemy.com/v2/wGPZvO8MuQEfQ0ZvMJQwbze6PY1w9mBs

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.9",
  networks:{
    goerli:{
      url: "https://eth-goerli.g.alchemy.com/v2/wGPZvO8MuQEfQ0ZvMJQwbze6PY1w9mBs",
      accounts:[
        "2e99f1e626ce68001c1adcc070aeda7c2c61ab7a9d2995c61d58592b8210a9d0"
      ]
    }
  }
};
