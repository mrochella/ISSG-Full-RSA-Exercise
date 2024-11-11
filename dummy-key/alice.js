// Megan Rochella - 0706022210028
// Week 8 - Full RSA Exercise (alice.js)

const crypto = require("crypto");

const alicePrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCPeCJpyXIY/ZU1
k3H6s3zhxJOK7F/+SJRKCIglBbOlpZ3FOrqReQBibC+ZXYD5lPjQMZDqFMsmLeC8
lmBpP3PkfAH8WpTA3BZBkaZ0EYwK75v4vXy0NbmJ5LIIPPzKyitxhwS6pX8mm2qp
vlpcl2YTyuk2TUqH+rCuJu0GAAmuPUNiBYh6K68o9DErjJ7/b0SyvkozyMMJ+fHf
lvXjovmVNu0z5tkNyjzBYjjWjs97H0t+7iXX+1Pns/z/25B3SsmsLlzbyAEocoPI
oThU46oMrsL3486r2M4Cl+GWssTuGhJ634x/aYHqZixVzAhvgBPEdsLlvQmTvbY4
YZCXF+31AgMBAAECggEAJblojxltm32eTNKi31Fvzmuigh6KVTIfb+ITbmyz4qQM
Oq6pHRRMkhSxZWnNPpM544CNAsgJ7NWWaPA/lJ0fK56h5QmqYJXeckpKku2EPeHo
SL0Ge9o+mbAdUgY7UFVdnAHtL+jRaMToBI8tcnhK2nx52xHyvZOg/oH0xCWhZgOI
DnHWccxCLuVrLjyjqp8p/auwZtqFgAHQm+AvTAe8O7xMkQnIAs94KheYRVSWWi8H
To8cT7dBfm9T8bZ22qzFR3LdYYuH6f8c00XUZ1RdG2Eb/dxGOa0KrWnRCpR/umHn
YS8nwIaFj1heDBFhpvSSicm7BOAwJuEJDiGC1nxBJwKBgQDFZqgbuiGhCtbiQcj0
YYOJvjGChnumCyI4H09914sx4uAfeNE2OCuji+jzh+8Wz/8hZc4qn4JuLBj942Cg
42UU0ycvb9VqFNjynbyIv/olFvI7gPVxHWYBL2PFYI9Ei3sBd9gKmdY4C7UkZhCe
Y2EKpYZYU1tMvS6DZbP+GqfVIwKBgQC6DvnZWbIYWdNEPK8OQdzlL1anAFaIrwTC
PuWen8mL2eB9HniYpGF5q18p+U12gTof9TZuHeT9zbeWiMd+Utew2SypJ92QBQxh
sMrbUHnEyJoNFYxiPJjmS7Kk1T/g7xJ3+4MIeK/RS8UtRu+RtPmCpkraWgBjXnTB
pm/Y8k0eBwKBgD6xYcackL2iwahOGFJ0/d+rRfIcX/zWIGIOn6Jp6E1JrsCQEHHV
2RYyAyQFEgv+txqWSKoEytnOq4lGw5OVZK7+eL16GR99y4ESU6RixEEvTnNTe6AX
JCRQNrGi/x1X5xMKStTjEsPuA/Oxbqm/CjzlYQuAPcjbdIBKtqWHNbJdAoGBALIj
/JxaAObHujuvTnx8Gx9kP7cN38xmpkvFJNzHaJV6OjIRpq2fVaTErAzoIX7BJAHN
Khwsiz9mY8zBkSAl+VXd2aDsBnsKGly+hLuPRcdfuf+lDhBQrKRy/cxMUSjwPeKa
8U5/HvdpcJR1QpNjjzHEPg7p9U0u9uMilBxHggapAoGADBcFNrWUgdkLJl67O5eK
HtJM4NLHqqInB7tsAXYzTaHVHOkaGOhzpIdNjL7jB2V9Cib2SpVjZOMvF+v8MEXv
h6g5Fu34lutG6CMvQhc2Qn1q36ij5BXhETxLUPsYlJeZ2kQihHuPem17nnoqlrzZ
YHGTqgIHMVD1sFaAsWkuHQM=
-----END PRIVATE KEY-----`;

// Alice's private key is used to sign the messages that she sends
const alicePrivateKey = crypto.createPrivateKey(alicePrivateKeyPem);

const bobPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAronVVmIuKLPEnoHCLTq2
12tYJJ5MpIWXMJu4+kN7OJtISXxljJC6nXDotd26c7YVvw2WqccwhmMDQmneanQs
q7YlgDcN3Zf9iS2eq8mOdprrC6ADSlxUOegpaOkUrKd2xs4ViENC0dQCchBhbqUj
qcLJnYpTZddysExpY2kuclTzR2F7pszmNP9lX16+yRDmJo5lpgTf+Gss0kDYGuFQ
pF7Kl8qSYFNaZg5t2BNSSneXYMmGC0393SS/D93Tdb8yh9jVzuXdBcN0GYZUKed6
/uvqerr0B0BagLabYfNTS5ncAYoM39wFN+gUlHIoSzjz7NBylmP4CqEIPpYuaFz2
ewIDAQAB
-----END PUBLIC KEY-----`;

// Bob's public key is shared with Alice, so they can encrypt messages specifically for Bob
const bobPublicKey = crypto.createPublicKey(bobPublicKeyPem);

// The message is declared
const message = "I want some apples";
const data = Buffer.from(message);

const signature = crypto.sign("sha256", data, alicePrivateKey);
console.log("Signature:", signature.toString("hex"));

const ciphertext = crypto.publicEncrypt(bobPublicKey, data);
console.log("Message:", ciphertext.toString("hex"));
