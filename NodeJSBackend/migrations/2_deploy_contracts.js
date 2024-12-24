const LifeCoin = artifacts.require("LifeCoin");

module.exports = function (deployer) {
  const initialSupply = 1000000; // Example initial supply
  deployer.deploy(LifeCoin, initialSupply);
};
