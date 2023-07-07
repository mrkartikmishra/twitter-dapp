const hre = require("hardhat");

async function main() {
  const twitter = await hre.ethers.deployContract("Twitter");

  await twitter.waitForDeployment();

  console.log(`Twitter contract deployed to ${twitter.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
