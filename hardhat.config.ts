import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai-bor.publicnode.com",
      accounts: ["42f6841cc12f23420a00e5efa33b4ceb95aa4e8ee265b7ffdc07d9ddf98d163e"],
      gasPrice: 80000000000
    },
    polygon: {
      url: "https://polygon-rpc.com",
      accounts: ["42f6841cc12f23420a00e5efa33b4ceb95aa4e8ee265b7ffdc07d9ddf98d163e"],
      gasPrice: 80000000000
    }
  },
  etherscan: {
    apiKey: "T14Z6Y7XSB7PXZ7ZY4KDB7VSY59PU2FMB5"
  }
};

export default config;
