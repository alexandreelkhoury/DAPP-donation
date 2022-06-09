require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.13",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {

    hardhat: {
      chainId: 1337
    },

    rinkeby: {
      url: "https://rinkeby.infura.io/v3/31eeea37900149ad9434747761bed71f",
      accounts: ["b76f95c3104d31ea97a01250f34276e1e8b827496b9ae2bca6a3a4d37f77aaf4"]
    }

  }
};
