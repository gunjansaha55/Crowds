const { ethers } = require('hardhat');
const fs = require('fs');

async function main() {
  const [deployer] = await ethers.getSigners();

  const contractAddress = fs.readFileSync('contract-address.txt').toString().trim();

  const CrowdFunding = await ethers.getContractFactory('CrowdFunding');
  const crowdFunding = await CrowdFunding.attach(contractAddress);

  const projectTitle = 'My Project';
  const targetAmount = ethers.utils.parseEther('10'); // 10 ETH

  await crowdFunding.createProject(projectTitle, targetAmount);

  console.log('Project created:', projectTitle);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
