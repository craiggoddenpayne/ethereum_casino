var Casino = artifacts.require("./Casino.sol");

module.exports = function(deployer) {
    //we specify the minimum bet, in this case it’s 0.1 ether converted to wei, 100 max players and the gas limit.
  deployer.deploy(web3.toWei(0.1, 'ether'), 100, {gas: 3000000});
};
