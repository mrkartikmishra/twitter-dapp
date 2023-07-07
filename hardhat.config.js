require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    polygon: {
      url: process.env.POLYGON_MUMBAI_ALCHEMY_URL,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
  },
};

//Deployed contract address => 0x2af685540c3c052881d5A164B391c0daecF6055E
