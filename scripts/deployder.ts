import { ethers } from "hardhat";

async function main() {
  const decerCode = await ethers.getContractFactory("Decrement");
  const codeDer = await decerCode.deploy();
  await codeDer.deployed();

  console.log("codeDer deployed here: ", codeDer.address);

  // Increment deployed here:  0x027F39B5d1B28BEfB6e7345010b99Ca5ad2e3756

//   codeDer deployed here:  0x3f80b5143DF12fD4F24A7616704352bF392dfb25
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
