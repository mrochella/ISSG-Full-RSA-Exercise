// Megan Rochella - 0706022210028
// Week 8 - Full RSA Exercise (alice.js)

const crypto = require("crypto");

// Generate a key pair (Alice's private key and public key)
const { privateKey: alicePrivateKey, publicKey: alicePublicKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
});

// Generate a key pair for Bob (Bob's public key will be used for encryption)
const { publicKey: bobPublicKey, privateKey: bobPrivateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
});

// Define the message
const message = "I want some apples";

// Create a signature of the message using Alice's private key with SHA-256 Hashing
const sign = crypto.createSign("sha256");
sign.update(message);
sign.end();
const signature = sign.sign(alicePrivateKey, "hex"); // The result is digital signature in Hex format

// Encrypt the message using Bob's public key
const encryptedMessage = crypto.publicEncrypt(bobPublicKey, Buffer.from(message));

// Print the signature and encrypted message
console.log("Signature:", signature);
console.log("Encrypted Message:", encryptedMessage.toString("hex"));

// Export datas for bob.js (ciphertext, digital signature of the message, Alice's public key and Bob's private Key)
module.exports = {
  encryptedMessage,
  signature,
  alicePublicKey,
  bobPrivateKey
};
