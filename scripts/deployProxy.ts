// 6c07bff6 bytes 
//  0x027F39B5d1B28BEfB6e7345010b99Ca5ad2e3756 address

// Proxy deployed here:  0x630972bdB70AdD936B081Cb883Da5B5A3B696988

import { ethers } from "hardhat";

async function main() {

    const Proxy = await ethers.getContractFactory("Proxy");
    const proxy = await Proxy.deploy("0x6c07bff6", "0x2b0beaeabb0415dfb8d5a978926dfaf938a50163");

    await proxy.deployed();

    console.log("Proxy deployed here: ", proxy.address)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});