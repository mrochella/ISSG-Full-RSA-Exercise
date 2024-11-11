const crypto = require("crypto");

const keyHex = Buffer.from("the-quick-brown-fox-jump-over-to");
const ivHex1 = Buffer.from("this-iv-for-agus");
const ivHex2 = Buffer.from("this-iv-for-susi");
/**
 * The KEY and IV must be sent securely to RECIPIENT.
 * Only SENDER and RECIPIENT should know about these KEY and IV.
 */

const message = "this is a secret message";
console.log("Plaintext:", message);

// SENDER generate CIPHERTEXT
const cipher1 = crypto.createCipheriv("aes-256-cbc", keyHex, ivHex1);
let ciphertext1 = cipher1.update(message, "utf8", "hex");
ciphertext1 += cipher1.final("hex");
console.log("Ciphertext for this-iv-for-agus:", ciphertext1);

const cipher2 = crypto.createCipheriv("aes-256-cbc", keyHex, ivHex2);
let ciphertext2 = cipher2.update(message, "utf8", "hex");
ciphertext2 += cipher2.final("hex");
console.log("Ciphertext for this-iv-for-susi:", ciphertext2);

/**
 * After this, the SENDER sends CIPHERTEXT to the RECIPIENT.
 * It is okay for anyone to know about this CIPHERTEXT.
 */