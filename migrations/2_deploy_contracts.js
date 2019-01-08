const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");

// module.exports = function(deployer, network){
  // if(network == 'abcdef') {

  // }else {

  // }
// }
if(typeof web3 !== 'undefined'){
  
}

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);

  //deployer.link(library, destinations)
  // Link LibA to many contracts
  // deployer.link(LibA, [B,C,D])

  deployer.link(ConvertLib, MetaCoin);



  deployer.deploy(MetaCoin);
};
