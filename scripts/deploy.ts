import { ethers } from "hardhat";

async function main() {
  const incremement = await ethers.getContractFactory("Increment");
  const Increment = await incremement.deploy();
  await Increment.deployed();

  console.log("Increment deployed here: ", Increment.address);

  // Increment deployed here:  0x027F39B5d1B28BEfB6e7345010b99Ca5ad2e3756
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
