import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = ethers.parseEther("0.001");

  const HealthgrityToken = await ethers.getContractFactory("HealthgrityToken");

  const token = await HealthgrityToken.deploy(
    {
      from: ethers.getWallet("my-wallet"),
      gasPrice: await ethers.providers.getNetwork("polygon-mumbai").estimateGasPrice(),
    }
  );

  await token.waitForDeployment();

  console.log(
    `HealthgrityToken with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${token.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});