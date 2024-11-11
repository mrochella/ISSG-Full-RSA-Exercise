const crypto = require('crypto');

const options = {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  }
};

// Generate keys for Alice or the sender and for Bob or the recipient
const { privateKey: senderPrivateKey, publicKey: senderPublicKey } = crypto.generateKeyPairSync("rsa", options);
console.log("Private Key:", senderPrivateKey);
console.log("Public Key:", senderPublicKey);