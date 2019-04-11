var CryptoTruffles = artifacts.require("./CryptoTruffles.sol");

module.exports = function(deployer) {
  deployer.deploy(CryptoTruffles);
};
