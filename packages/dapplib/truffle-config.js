require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign strike rival sad evil gloom praise army gas'; 
let testAccounts = [
"0x8e9a168897574b43a1d0908384ac46e583bd1ec5695c3987619755da115ba2b0",
"0x6daeaf0cfd679db3a6eaf773c14766981ee1d5deb92c097c24ebc6984e7a0d56",
"0x0b43950251bdc2a217fbe5e27c29a67729ad2a8632862a8fb1f1b394950c9880",
"0x6c9b5ab0d0386cc84512c11d89ae20ab1c1cf61e0ecebd496bd3a654a3ab54f7",
"0x8e7e5d6d8669e9536578bcc5d5571c0ea9beb6a83371fe386b90491abbe8d306",
"0x7afdd0e21de03310fce5d68882f276de08e97d2fe356484650acfff81bfa6470",
"0x9625f65d2abda56c5ee0455e7a0788735c9e8978f770bd3b40cac3f261b1443e",
"0x1ea7bb8d296778a88f947dae92637c3c7aaa11fad54c80b0f81f258f4ad39da7",
"0x4e6a41c6b252fb4e7cbf2b166b3e43d4b12c8059813dfb0965aac0b9f9c42337",
"0xf466d4623692f985bd9d0fb67f4b7423449a2798b7e5ada21e33a85588e6a1ac"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


