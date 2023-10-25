import { ethers } from "hardhat";

async function main() {
  // Déployez le contrat healthgrity-token.sol
  const Healthgrity = await ethers.getContractFactory("healthgrity-token.sol.sol");
  const healthgrityContract = await Healthgrity.deploy();

  // Attendez que le contrat soit déployé
  await healthgrityContract.waitForDeployment();

  console.log(
    `Le contrat Healthgrity a été déployé à l'adresse : ${healthgrityContract.target}`
  );
}

// Exécutez la fonction principale
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
