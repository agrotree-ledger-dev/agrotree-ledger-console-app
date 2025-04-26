"use server";

import prisma from "@/lib/db";
import { getUmiServer } from "@/lib/umi";
import {
  fetchTreeConfigFromSeeds,
  findLeafAssetIdPda,
} from "@metaplex-foundation/mpl-bubblegum";
import { publicKey } from "@metaplex-foundation/umi";
import { revalidatePath } from "next/cache";

// sync assetId and address of NFT metadata
export async function syncNftTree(id: number, tx?: string) {
  // delay for 5 seconds
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const nftMetadata = await prisma.nftMetadata.findUnique({
    where: {
      id: id,
    },
    include: {
      Collection: {
        select: {
          publickey: true,
          merkelTree: true,
        },
      },
    },
  });

  if (!nftMetadata) {
    throw new Error("NFT metadata not found");
  }

  const umi = await getUmiServer();

  const treeConfig = await fetchTreeConfigFromSeeds(umi, {
    merkleTree: publicKey(nftMetadata.Collection.merkelTree as string),
  });

  console.log("treeConfig", treeConfig.numMinted);

  const nextAssetIndex =
    treeConfig.numMinted === BigInt(0)
      ? BigInt(0)
      : treeConfig.numMinted - BigInt(1);
  // assetIndex = BigInt(nextAssetIndex.toString());

  // [address] = findLeafAssetIdPda(umi, {
  //   merkleTree: publicKey(merkelTree),
  //   leafIndex: assetIndex,
  // });

  // const { _max: currentNft } = await prisma.nftMetadata.aggregate({
  //   // by: ["collectionId"],
  //   where: {
  //     collectionId: nftMetadata.collectionId,
  //     address: {
  //       not: null,
  //     },
  //     assetId: {
  //       not: null,
  //     },
  //   },
  //   _max: {
  //     assetId: true,
  //   },
  // });

  // const nextAssetIndex = new BN(currentNft.assetId || 0).add(new BN(1));
  const assetIndex = nextAssetIndex;

  console.log("assetIndex", assetIndex);

  const [address] = findLeafAssetIdPda(umi, {
    merkleTree: publicKey(nftMetadata.Collection.merkelTree as string),
    leafIndex: assetIndex,
  });

  await prisma.nftMetadata.update({
    where: {
      id: id,
    },
    data: {
      assetId: assetIndex.toString(),
      address,
      tx,
    },
  });

  revalidatePath("/console/collections/[slug]", "layout");

  return {
    assetId: assetIndex.toString(),
    address,
    success: true,
  };
}
