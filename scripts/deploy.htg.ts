const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const HealthgrityToken = await ethers.getContractFactory("HealthgrityToken");
  const healthgrityToken = await HealthgrityToken.deploy();

  console.log("Contract deployed to:", healthgrityToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });