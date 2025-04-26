"use client";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { useMemo } from "react";
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { SolanaChain, useWallets } from "@particle-network/connectkit";
import { mplBubblegum } from "@metaplex-foundation/mpl-bubblegum";
import {
  createNoopSigner,
  generateSigner,
  signerIdentity,
} from "@metaplex-foundation/umi";
import appConfig from "@/lib/config";
const useUmi = () => {
  const [primaryWallet] = useWallets();
  const wallet = primaryWallet?.getWalletClient<SolanaChain>();
  const endpoint = useMemo(() => appConfig.endpointRpc, []);
  // Create Umi instance
  const umi = createUmi(endpoint, {
    commitment: "confirmed",
  })
    .use(mplBubblegum())
    .use(irysUploader());

  if (primaryWallet && wallet) {
    umi.use(
      walletAdapterIdentity({
        publicKey: wallet.publicKey,
        signTransaction: wallet.signTransaction,
        signAllTransactions: wallet.signAllTransactions,
        signMessage: (message: Uint8Array) =>
          wallet.signMessage(message).then((res) => res.signature),
      })
    );
  } else {
    umi.use(signerIdentity(createNoopSigner(generateSigner(umi).publicKey)));
  }

  return umi;
};

export default useUmi;
