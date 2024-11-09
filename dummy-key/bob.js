// Megan Rochella - 0706022210028
// Week 8 - Full RSA Exercise (bob.js)

const crypto = require("crypto");

// Import datas from alice.js (ciphertext, digital signature of the message, Alice's public key and Bob's private key)
const { encryptedMessage, signature, alicePublicKey, bobPrivateKey } = require("./alice.js");

// Decrypt the message using Bob's private key
const decryptedMessage = crypto.privateDecrypt(bobPrivateKey, encryptedMessage);

// Verify the signature using Alice's public key
const verify = crypto.createVerify("sha256");
verify.update(decryptedMessage.toString("utf8"));
verify.end();
const isVerified = verify.verify(alicePublicKey, signature, "hex");

// Print verification result and decrypted message
console.log("Signature Verification:", isVerified);
console.log("Message:", decryptedMessage.toString("utf8"));