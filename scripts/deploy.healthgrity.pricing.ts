import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(`Déploiement du contrat HealthgrityPricing par : ${deployer.address}`);

  const uniswapPool = "0xFb681455022bc406a3338c444C4c81ec5CC11088";
  const maticToken = "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270";
  const hltgToken = "0x0F62E6aA75029c2ce13F9bAE6CD659003db79c36";
  const daoTreasury = "0xE51345DDde84ee651121d8eee47bbd53D6ed636a";

  const HealthgrityPricing = await ethers.getContractFactory("HealthgrityPricing");
  const HealthgrityPricingContract = await HealthgrityPricing.deploy(
    uniswapPool,
    maticToken,
    hltgToken,
    daoTreasury
  );

  await HealthgrityPricingContract.waitForDeployment();

  console.log(`Contrat HealthgrityPricing déployé à : ${HealthgrityPricingContract.target}`);

  console.log("Déploiement terminé.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
