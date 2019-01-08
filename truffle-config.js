var HDWalletProvider = require('truffle-hdwallet-provider');

var mnemonic = "cheese vocal jaguar monster correct hockey cruel ocean predict high sugar flush";
var ropstenProvider
if (!process.env.SOLIDITY_COVERAGE){
  ropstenProvider = new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/')
}

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  //네트워크 연결 설정하기 ( Ganache's default connection parameters )
  networks : {
    //main network 
    live : {
      host : '112.216.71.155'
      , port : 80
      , network_id : 1
      // optional config values:
      // gas
      // gasPrice
      // from - default address to use for any transaction Truffle makes during migrations
      // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
      //          - function that returns a web3 provider instance (see below.)
      //          - if specified, host and port are ignored.
      // skipDryRun: - true if you don't want to test run the migration locally before the actual migration (default is false)
      // timeoutBlocks: - if a transaction is not mined, keep retrying for this number of blocks (default is 50)
    },
    coverage: {
      host: 'localhost',
      network_id: '*', // eslint-disable-line camelcase
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01,
    },
    // devel
    "develop" : {
      accounts : 5
      , defaultEtherBalance : 500
      , blockTime : 3
      , network_id : "*"
    },

    // truffle develop 명령어에 해당
    development : {
      host: "127.0.0.1" 
      , port : 7545
      , network_id : "*"
    },

    //현재 연결되어 있음
    ropsten : {
      provider : ropstenProvider
      , network_id : 3
    },

    //테스트 네트워크
    test : {
      provider : ropstenProvider,
      network_id : '*',
      port : 9545,
      gas : 6712388,
      gasPrice : 100000000000
    }
  },
  mocha : {
    enableTimeouts : false
  },
  compilers : {
    solc : {
      version : "0.5.2"
    }
  }
};
