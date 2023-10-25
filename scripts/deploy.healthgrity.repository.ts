import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(`Déploiement du contrat HealthgrityRepository par : ${deployer.address}`);

  // Déployez le contrat HealthgrityVault
  const HealthgrityRepository = await ethers.getContractFactory("HealthgrityRepository");
  const healthgrityRepositoryContract = await HealthgrityRepository.deploy();
  await healthgrityRepositoryContract.waitForDeployment();

  console.log(`Contrat HealthgrityRepository déployé à : ${healthgrityRepositoryContract.target}`);

  // Ajoutez des données médicales si nécessaire
  // Par exemple, ajouter une entrée de données médicales avec l'ID 1 et le texte "Exemple de données médicales"
  // await healthgrityRepositoryContract.(1, "Exemple de données médicales");

  console.log("Déploiement terminé.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
