require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant inflict kite outer sword'; 
let testAccounts = [
"0x59f000991c2e85a3002c9f9df4f180bfda8900c7fd6b5fe512007be563629062",
"0x90a4e8baefa0be9099f616a16f0b4015bc1f76a6f7405110ed756165ab7d9b1e",
"0xf9b20c605648ff8e0a2e34cbef5c45e1e4cfb457a8a7d00dd38da5fe687fd163",
"0x9ee695decb2de83f4b07ed45338820931321d43896eef434f678835998b60a5e",
"0xe97ab06b11299367579286dc117eb9069907b3c6ffaf134d4e1cfc12da24b927",
"0x2f29905833c54a998b840c0c094f04308707a65b95f19ed0355713144b5e8318",
"0xa2038166532bc4c6e1498afcd12a456c6a33b7221ee869cd6dde575f05a280e9",
"0x2eeca3af1508caafc8413c11dd46e6350396f37dced0f77dc37d49f379900f85",
"0xc4ff827a11a98ac67aad5decf1d92245d4b60fd1b5dfb0774222f781f36598de",
"0xc1ad2a17b64c4583a9d878c214e00254c669e71a2394606d85068b0c124db5d1"
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
            gas: 8000000,
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


