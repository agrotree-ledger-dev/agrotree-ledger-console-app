import { Program } from "@coral-xyz/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import appConfig from "../config";
import { AgrotreeMarketplace } from "./agrotree_marketplace";
import idl from "./agrotree_marketplace.json";

export function getMarketplaceProgram() {
  const connection = getProgramConnection();

  const program = new Program(idl as AgrotreeMarketplace, { connection });

  return { program, connection };
}

export function getProgramConnection() {
  const connection = new Connection(appConfig.endpointRpc, "confirmed");
  return connection;
}

export async function getMarketplaceListingNftBySeller(seller: string) {
  const { program } = getMarketplaceProgram();
  const raw = await program.account.compressedListing.all([
    {
      memcmp: {
        offset: 8,
        bytes: seller,
      },
    },
  ]);
  return raw;
}

export function getCompressedListingAddress(
  seller: PublicKey,
  merkelTree: PublicKey,
  assetId: PublicKey
) {
  const { program } = getMarketplaceProgram();
  return PublicKey.findProgramAddressSync(
    [
      Buffer.from("c-listing"),
      seller.toBuffer(),
      merkelTree.toBuffer(),
      assetId.toBuffer(),
    ],
    program.programId
  );
}

export function getAgroTreeManagerConfigAddress() {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("agro-config")],
    new PublicKey(process.env.NEXT_PUBLIC_AGROTREE_PROGRAM_ID as string)
  );
}

export async function treeNftOnmarketplace(
  merkleTree: string | undefined,
  assetId: string
) {
  if (!merkleTree) return null;
  const { program } = getMarketplaceProgram();

  try {
    const [item] = await program.account.compressedListing.all([
      {
        memcmp: {
          offset: 8 + 32,
          bytes: new PublicKey(merkleTree).toBase58(),
        },
      },
      {
        memcmp: {
          offset: 8 + 32 + 32,
          bytes: new PublicKey(assetId).toBase58(),
        },
      },
    ]);

    if (!item) return null;

    return {
      publicKey: item.publicKey.toString(),
      account: {
        seller: item.account.seller.toString(),
        merkleTree: item.account.merkleTree.toString(),
        assetId: item.account.assetId.toString(),
        price: item.account.price.toString(),
        bump: item.account.bump,
      },
    };
  } catch {
    return null;
  }
}
