import bs58 from "bs58";
import nacl from "tweetnacl";

export const verifySignature = (
  signature: string,
  publicKey: string,
  message: Uint8Array
) => {
  const signatureDecoded = bs58.decode(signature);
  const publicKeyDecoded = bs58.decode(publicKey);

  return nacl.sign.detached.verify(message, signatureDecoded, publicKeyDecoded);
};
