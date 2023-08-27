const { ethers } = require('hardhat');
const fs = require('fs');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  const CrowdFunding = await ethers.getContractFactory('CrowdFunding');
  const crowdFunding = await CrowdFunding.deploy();

  await crowdFunding.deployed();

  console.log('CrowdFunding contract deployed to:', crowdFunding.address);

  // Save the contract address to a file for later interaction
  fs.writeFileSync('contract-address.txt', crowdFunding.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
