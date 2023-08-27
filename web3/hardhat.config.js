require('@nomiclabs/hardhat-waffle');

const privateKey = '162358f50f041e70f7633dbc9906465efb213123c63d1aa50668498de11e9591';

module.exports = {
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/3cbb3158eeb9418c8722151f7e7532f4`,
      accounts: [privateKey],
    },
  },
  solidity: {
    version: '0.8.17',
  },
};
