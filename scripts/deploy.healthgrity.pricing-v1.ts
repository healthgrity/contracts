import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(`Deployment of the HealthgrityPricingV1 contract by: ${deployer.address}`);

  const HealthgrityPricingV1 = await ethers.getContractFactory("HealthgrityPricingV1");
  const healthgrityPricingV1Contract = await HealthgrityPricingV1.deploy();

  await healthgrityPricingV1Contract.waitForDeployment();

  console.log(`HealthgrityPricingV1 contract deployed at : ${healthgrityPricingV1Contract.target}`);

  console.log("Deployment completed");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
