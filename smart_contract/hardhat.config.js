require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/{YOUR_API_KEY}',
      accounts: [ 'f46316435a0fcece15a8aa0c2b864e0896389bbd1c925e8bbf97be6b81b9cacf' ]
    }
  }
}