const crypto = require("crypto");

const recipientPrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDJ37jsZclYeBEh
IIXt+s55z4bZLJPHSNeQJ2qgCMDullyMVLQfl2QVRkegpK/87wT/pSdllazQYz01
Sue/t2bIrVjmTC5YE1QqWaFCQSV0ZvkFZGTl93e9WuxXkbBqjZ6FaFPR1S6bf3cg
ckwFZ7fiFGheAXU9WdobzsDz6ks8i9+9JBkpcpNGUoAJo+xxalY57qIPFYG5oP53
EzSvtSpccyEmfkd0NK5+mUFb7wvs4IKYBSSlG1p5IBCmX1sbqXpqY/X6r1LKUCCX
/aKtvLxAkei0e1dwVi8QHsI1HFaoPl+UqW9JE2hHD7i2ISfAhf6G8wSQB/gbDR3x
h5gmTRZtAgMBAAECggEAA+/5ZSD6G5/h46XE/vaGmvEdhfRc4ITu8WiXZ44sJysn
HHSVe81B3jlb8cnshdAqporT2SMhdwIMglLW8NIUruLUqk8/kyezW00avFZVcu8E
OeLypdqdCwQwOmgEyxs+hYcapWvVSCKlEeywx2U1vLLds0GvhfYP7z1p3YgLFh/y
aCivnvgzdvWI3qmRbXEG2CMVgnMt859F5KHPZQWM6xNBJcizJvzERcQMdXgTB51C
LIYH3eoX4ztjI3KT6j5Pvkfi2Xg7aKqtEP+7vzNK+VG0nUU5GIDMGukxWbOMOOKi
ilzUaZl19PO09+E07XVg2BeGcLwY4Y8mSB2xTS6N+QKBgQDwf67jVO9UKdlBgdQW
clyXt+xk47klj8qAjebWn3H+AXn0Gb6Sg4yTBeetdCkppgqgzAY/VxHqWkoIF8LM
wtldoPmH+6XCpdor+4u6fiMtd3r1qyQKFOEfMsdGnKy/sYtr6OJ67qyZiOR4Mi2X
8CAux/C6rdOz9sQQ8YEzz+YudQKBgQDW4rcYKJAtZ60zE1Ck4JI310oobyppUjK3
AgRB2805WRYSJ8Qs93txu571Fa3Z7XSkNMxMaCFpC7R2o/9eXfmFj8LTEDHK18n5
SFHqAG1pnL49yyN1RD83eiWDIH4GVE46nlWx04rlSocxk+Ng0RZkdJVVTBdnTvzU
EbRL1EC5GQKBgCFlydad++JXMWlsaxR26y7Shsx350U1E60Ih670U3Mvp0zjqlhU
VlgwcLzgrbqv6TftPUzcfYtq4G8BRbcDtAXRjfV5V8qRF5wWAZBzZdUxi2zESGvx
/FVFyvCeX0r7j937aEAkFun3XarnZPd9jCqS73YtH4IVWaL0trmIPHHlAoGAN7RL
3HJfdbXDm1Lte+BPZzRjH/o5V1YcmX5nVh9BoxUp+IjgfPumv4Pwn/3/tFeu/gZF
06TGzHFhVcQLpg3cajgrPAWdssSfsgSCX5O+yTr9wg0P4w1PCfWbFdPtd3yRTvbO
pit9fRUF2N9KeUWadW4XbCYuhvRd7Ceuwl2CbbkCgYEAws0kEKqBJODrJaKlM0Am
HrqQ2eDdZUKL8NGWuxrr5c7LcGQSBJymXvGpyaTMmDv3gu2pbVRUind+V4zOOavu
/AGLrEF9EV2Kfki/EWeyttLw1nur1YRn0/apOYgYiKeYiYrPUOdHgjAYgaA9VauQ
a/6lP5QPoWC9Z3hhBP/DJuo=
-----END PRIVATE KEY-----`;
const recipientPrivateKey = crypto.createPrivateKey(recipientPrivateKeyPem);
/**
 * The PRIVATE KEY must be kept securely.
 * No one else should know about this PRIVATE KEY.
 * Meanwhile, the PUBLIC KEY can be shared to others.
 * In this case, the SENDER should know about this PUBLIC KEY.
 */

/**
 * Then, the RECIPIENT obtains CIPHERTEXT from the
 * communication with the SENDER
 */
const ciphertextHex = "510cf4e276a5d824ec830fd8729808cf3200db4b26c6590f4e2d0f5694fde215f1a429346aea2c00866fc752b0d62a9387e1f36a1b0fdfd2be164c7bc178ac9bc3b6f488fdafdbb3ae871992257897ab3a3394c2e9384a32b0fa7eebfa51670f922bc21eabb966bee58e586779d8f8af2a387d199e02ea23483a4d3b29b4537fb112ec1c6ae34dd0fa5f0afbf15c3f0fdf96eef0777ee3bd6dd5cb377740185fe90e2f00b5646b92060d4622179b26b2a2045b448971f37507ec5d3aabc1747d6b5aec94a8f9456c050fd62df90a2707727c787368acf4f8dc02b18c83b5d51d568f3334f8f278218aa2b39d98d7877dadbd8e12f9149c9304704e9be5bebf1f";
const ciphertext = Buffer.from(ciphertextHex, "hex");

// RECIPIENT recovers PLAINTEXT
const recoveredPlaintext = crypto.privateDecrypt(recipientPrivateKey, ciphertext);
console.log("Recovered Plaintext:", recoveredPlaintext.toString("utf8"));