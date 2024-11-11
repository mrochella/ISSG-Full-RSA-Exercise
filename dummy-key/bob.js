// Megan Rochella - 0706022210028
// Week 8 - Full RSA Exercise (bob.js)

const crypto = require("crypto");

const bobPrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCuidVWYi4os8Se
gcItOrbXa1gknkykhZcwm7j6Q3s4m0hJfGWMkLqdcOi13bpzthW/DZapxzCGYwNC
ad5qdCyrtiWANw3dl/2JLZ6ryY52musLoANKXFQ56Clo6RSsp3bGzhWIQ0LR1AJy
EGFupSOpwsmdilNl13KwTGljaS5yVPNHYXumzOY0/2VfXr7JEOYmjmWmBN/4ayzS
QNga4VCkXsqXypJgU1pmDm3YE1JKd5dgyYYLTf3dJL8P3dN1vzKH2NXO5d0Fw3QZ
hlQp53r+6+p6uvQHQFqAtpth81NLmdwBigzf3AU36BSUcihLOPPs0HKWY/gKoQg+
li5oXPZ7AgMBAAECggEARliLQYvEqub5giEuT+hwNRawqeGbZlvpec/pmASGr2P2
mJeoniTe8gHF6Tb6pRRoY15osPj1V9SkRapB2IoGTxbUun51+i/+IcHfR8Gux6Lc
xQyzBs97qvMlbYEzsfq05p+9EfR6A/P9IFf1zRCF9S/q7rIHtu5E7UV+3HBSJgXn
3YWwOAWYzNY9TWCh9DTzoGtGdIwLGUiE016ZznDqB3JKSmAFpACus/gbkQDYcdV8
y4dhn5owdnkMFMAnJRWN1be9Z+YXSNtYeOP1i11mUvAgsz3SjQDaZZ/HDn0rLcYK
CRwvPlf5ckdzAgCJmRd5frxKDNWwnyIFocjwOovpYQKBgQDpyeL8SxRXR4skkPWY
NjfZbegPGjsQ99QoI96ib1zqvS/vQlIwIEESBVjJHY/UaSxwQsu5mmOW6QqoEk8E
AdbGjd4mgArxZvmysM55XdHuJaFin+unxO0zCDKGSZoUmQ6+vgQAEVafbmB3PwvF
d4zhL7f34L8RPk5ja0tzH/KdQwKBgQC/HuMGDuLJjxWZ9JjhNfPb4Wya5QGoBz4B
6RBDdgfafgYJjrUI/QA11zageQgZxrgfI/+l9Hlu/cdzr2Gb0nRh3YI+RBojb58e
MkPqsseDvDYVnRFXDDsV4pnc8CUMRXqo0KJxk8bbtwdv9jYRAxL+p7ewaSijX7DI
ambCnWlSaQKBgDog924xoMoewMsDu/zvpi1KtYNjy0HpzPd6C7YpqFm5VnzP6a2L
p4I6kBvZXNS8nc7/3LW2XIK+SOcHPlxJtMRDq/O4rH/fUcCLU5s7p6Hl+12RU7+w
KCYjKKTZEhWDBPaKOmZl6TrU7+lWZK/hjMbE3aIlYHyCGG2B1Q236NQPAoGAIHLn
CqVGXgBcI4qC1mHpqGBqpxXQpS2tmndumnWUucUB02eWVxNVkM6caLyD4pR5uFfN
VOjgITcXQQ363ZDqz57jOR0o7vFJq7/PBi8absRqzlqfkg7yjTGu+/MN5zp4q+bY
Xb5AWheGPL0pytOhyvjA2EPScYKSqkRedBZzxlkCgYEAtUPIh3ucqx4FFZNkG9gE
9dir1fRbfnbS25DNXMdjuu6Y2DuIuF6hRIZmcJ3n/pfACrS3FTMfi90Wu/TmjUn2
lRQjpcdD1dZw9cE+i4wK3EpFgtClFDLhdh15aiVRFEZiL43/25u5J3XUQ9yv9ZZG
5r5XdxJUQGqjXiXN+C6msis=
-----END PRIVATE KEY-----`;

// Bob's private key is used to decrypt messages ONLY Bob can read
const bobPrivateKey = crypto.createPrivateKey(bobPrivateKeyPem);

const alicePublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAj3giaclyGP2VNZNx+rN8
4cSTiuxf/kiUSgiIJQWzpaWdxTq6kXkAYmwvmV2A+ZT40DGQ6hTLJi3gvJZgaT9z
5HwB/FqUwNwWQZGmdBGMCu+b+L18tDW5ieSyCDz8ysorcYcEuqV/Jptqqb5aXJdm
E8rpNk1Kh/qwribtBgAJrj1DYgWIeiuvKPQxK4ye/29Esr5KM8jDCfnx35b146L5
lTbtM+bZDco8wWI41o7Pex9Lfu4l1/tT57P8/9uQd0rJrC5c28gBKHKDyKE4VOOq
DK7C9+POq9jOApfhlrLE7hoSet+Mf2mB6mYsVcwIb4ATxHbC5b0Jk722OGGQlxft
9QIDAQAB
-----END PUBLIC KEY-----`;

// Alice's public key is shared with Bob, because he has to verify her signature
const alicePublicKey = crypto.createPublicKey(alicePublicKeyPem);

// Ciphertext and digital signature from Alice or the sender
const ciphertextHex = "7a53ec1c03d40939a50e8f950607f236e776423ac7c2b9df1237f3b1a9e4b1de4319099d99c3c3ad7517bd14cf1fdf010d6ece17aabb26f8d5fa7018e81b9bb30f0025134246aa3c538f6cce0d26d33d6610e59e14275283d85ff038408b46f5ad634b6bdd5667b40d6e82f0770e8d67540c8e17e58dd41c9b1c6a23a52ff1c8aa2f7c48e96a676b90b62a106dc61bee480536d47d645a537e2dacb6016eed7441348fbfcae7b5695cc3863405828bc67e38314ba16dca4a5e7dcce5a29639c053b3519cb54966dbea1f86bdcf0158aa02ba128db9fef1709b67e3b7df882479d71d0be2e2827f77d58321aaad4c5eafa149420d8e9f7cde8c46c9df005a3d5d";
const ciphertext = Buffer.from(ciphertextHex, "hex");

const signatureHex = "6872e8d45e13f9496a3495caf88ed5f2143096ff8e94ff11bafc54a1af9a3e713378d166db2c842dd064690d92a5cb45a5d18cace8d0e0d33de31e1bd5dc12fb2f35ed7eadd7c1582e781d46066898bf954212c8522fb65177af49af5a1e2f6787f6178f2f69110356014ff42368da7a5fd3391079ebf655771d93ea7794b28a4afcf93602726fbc87719e53d5aab9489d2203aa2f655fac3dc8d90d6ba77b2b26a3831aba0e712d945fd0c86250a63f783b9b704d85bab4d89a5d98b4d483a6601e7534d4b47bb5b25205a3c4c53872c3674c39dbc716dfe91f1939538c3dca27648182fdfa6b70606062bcc3e8a95b7f17106f1f851d11b4cdca382116893a";
const signature = Buffer.from(signatureHex, "hex");

// Decrypting message that is sent
const recoveredPlaintext = crypto.privateDecrypt(bobPrivateKey, ciphertext);
const message = recoveredPlaintext.toString("utf8");

// Bob verifying the digital signature
const data = Buffer.from(message);
const isValid = crypto.verify("sha256", data, alicePublicKey, signature);

// Output
console.log("Signature Verification:", isValid);
console.log("Message:", message);