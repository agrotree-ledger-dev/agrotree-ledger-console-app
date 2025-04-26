import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import Papa from "papaparse";
import { NftMetadataType } from "@/types/Metadata.type";
import { TreeNftType } from "@/types/TreeNft.type";
import { Nft } from "@/types/shyft.type";
import { BN } from "@coral-xyz/anchor";
import {
  AccountMeta,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  TransactionInstruction,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import { DAS } from "helius-sdk";

export const IS_PRODUCTION = process.env.NODE_ENV === "production";

export const transformIrysUrl = (url: string) => {
  return url.replace("arweave.net/", "gateway.irys.xyz/");
};

export const buildTransaction = async (
  publicClient: Connection,
  instructions: TransactionInstruction[],
  payer: PublicKey | string
) => {
  const { blockhash } = await publicClient.getLatestBlockhash({
    commitment: "finalized",
  });

  const messageV0 = new TransactionMessage({
    payerKey: new PublicKey(payer),
    recentBlockhash: blockhash,
    instructions,
  }).compileToV0Message();
  return new VersionedTransaction(messageV0);
};

export async function buildTransactionWithSigner(
  publicClient: Connection,
  instructions: TransactionInstruction[],
  payer: PublicKey | string,
  signers: Keypair[]
): Promise<VersionedTransaction> {
  const { blockhash } = await publicClient.getLatestBlockhash({
    commitment: "finalized",
  });

  const messageV0 = new TransactionMessage({
    payerKey: new PublicKey(payer),
    recentBlockhash: blockhash,
    instructions,
  }).compileToV0Message();

  const tx = new VersionedTransaction(messageV0);

  signers.forEach((s) => tx.sign([s]));

  return tx;
}

export const transformToVersionedTransaction = (message: string) => {
  const tx = Buffer.from(message, "base64");
  return VersionedTransaction.deserialize(tx);
};

export const truncateAddress = (address: string | null) => {
  if (!address) return "";
  return address.slice(0, 6) + "..." + address.slice(-4);
};

export const formatDateToDisplay = (date: Date) => {
  return date.toLocaleDateString();
};

export const getExplorerLink = (address: string) => {
  return `https://explorer.solana.com/address/${address}?cluster=devnet`;
};

export const getShyftTranslatorLink = (address: string) => {
  return `https://translator.shyft.to/address/${address}?cluster=devnet`;
};

export type ValidDepthSizePair =
  | { maxDepth: 3; maxBufferSize: 8 }
  | { maxDepth: 5; maxBufferSize: 8 }
  | { maxDepth: 14; maxBufferSize: 64 }
  | { maxDepth: 14; maxBufferSize: 256 }
  | { maxDepth: 14; maxBufferSize: 1024 }
  | { maxDepth: 14; maxBufferSize: 2048 }
  | { maxDepth: 15; maxBufferSize: 64 }
  | { maxDepth: 16; maxBufferSize: 64 }
  | { maxDepth: 17; maxBufferSize: 64 }
  | { maxDepth: 18; maxBufferSize: 64 }
  | { maxDepth: 19; maxBufferSize: 64 }
  | { maxDepth: 20; maxBufferSize: 64 }
  | { maxDepth: 20; maxBufferSize: 256 }
  | { maxDepth: 20; maxBufferSize: 1024 }
  | { maxDepth: 20; maxBufferSize: 2048 }
  | { maxDepth: 24; maxBufferSize: 64 }
  | { maxDepth: 24; maxBufferSize: 256 }
  | { maxDepth: 24; maxBufferSize: 512 }
  | { maxDepth: 24; maxBufferSize: 1024 }
  | { maxDepth: 24; maxBufferSize: 2048 }
  | { maxDepth: 26; maxBufferSize: 512 }
  | { maxDepth: 26; maxBufferSize: 1024 }
  | { maxDepth: 26; maxBufferSize: 2048 }
  | { maxDepth: 30; maxBufferSize: 512 }
  | { maxDepth: 30; maxBufferSize: 1024 }
  | { maxDepth: 30; maxBufferSize: 2048 };

const allPairs: number[][] = [
  [3, 8],
  [5, 8],
  [14, 64],
  [14, 256],
  [14, 1024],
  [14, 2048],
  [15, 64],
  [16, 64],
  [17, 64],
  [18, 64],
  [19, 64],
  [20, 64],
  [20, 256],
  [20, 1024],
  [20, 2048],
  [24, 64],
  [24, 256],
  [24, 512],
  [24, 1024],
  [24, 2048],
  [26, 512],
  [26, 1024],
  [26, 2048],
  [30, 512],
  [30, 1024],
  [30, 2048],
];

export const ALL_DEPTH_SIZE_PAIRS: ValidDepthSizePair[] = allPairs.map(
  (pair) => {
    return {
      maxDepth: pair[0],
      maxBufferSize: pair[1],
    } as ValidDepthSizePair;
  }
);

const allDepthSizes = ALL_DEPTH_SIZE_PAIRS.flatMap(
  (pair) => pair.maxDepth
).filter((item, pos, self) => self.indexOf(item) == pos);

const defaultDepthPair = {
  maxDepth: 3,
  maxBufferSize: 8,
};

export const getTreeOptions = (treeNodes: number) => {
  let maxDepth = defaultDepthPair.maxDepth;

  if (treeNodes <= 0)
    return {
      maxDepth,
      maxBufferSize: defaultDepthPair.maxBufferSize,
      canopyDepth: 0,
    };

  for (let i = 0; i <= allDepthSizes.length; i++) {
    if (Math.pow(2, allDepthSizes[i]) >= treeNodes) {
      maxDepth = allDepthSizes[i];
      break;
    }
  }

  const maxBufferSize =
    ALL_DEPTH_SIZE_PAIRS.filter((pair) => pair.maxDepth == maxDepth)?.[0]
      ?.maxBufferSize ?? defaultDepthPair.maxBufferSize;

  const maxCanopyDepth = maxDepth >= 20 ? 17 : maxDepth;

  return {
    maxDepth,
    maxBufferSize,
    canopyDepth: maxCanopyDepth - 3 >= 0 ? maxCanopyDepth - 3 : 0,
  };
};

export const convertMetadataToJson = async (
  metadataFile: File,
  header = false
) => {
  const metadataContent = await metadataFile.text();
  const { data: metadataJson } = Papa.parse<NftMetadataType>(metadataContent, {
    skipEmptyLines: true,
    header,
  });

  return metadataJson;
};
export const checkIfMetadataValid = async (
  metadataFile: File,
  mediaFiles: FileList
) => {
  const metadataJson = await convertMetadataToJson(metadataFile, true);

  const metadataLeng = metadataJson.length;
  const mediaFilesLeng = mediaFiles.length;

  if (metadataLeng !== mediaFilesLeng) {
    return "Metadata and media files count mismatch.";
  }

  // Check if media files include all the files mentioned in column 'image' of metadata
  const mediaFileNames = Array.from(mediaFiles).map((file) => file.name);
  const metadataFileNames = metadataJson.map((item) => item.image);

  for (const metadataFileName of metadataFileNames) {
    if (!mediaFileNames.includes(metadataFileName)) {
      return `Metadata file and media file mismatch. ${metadataFileName} not found in media files.`;
    }
  }

  if (metadataLeng === 0) {
    return "No metadata files found.";
  }

  if (mediaFilesLeng === 0) {
    return "No media files found.";
  }

  return null;
};

export const convertToNftMetadataJson = async (metadataFile: File) => {
  const metadataJson = await convertMetadataToJson(metadataFile, true);

  const traitTypeKeys = Object.keys(metadataJson[0]);

  return metadataJson.map((item) => {
    return {
      name: item.name,
      description: item.description,
      image: item.image,
      attributes: traitTypeKeys
        .filter((t) => ["name", "description", "image"].indexOf(t) === -1)
        .map((traitType) => {
          return {
            trait_type: traitType,
            value: item[traitType],
          };
        }),
    };
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toObject(data: any) {
  return JSON.parse(
    JSON.stringify(
      data,
      (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
    )
  );
}

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function convertShyftApiAssetToTreeNftType(item: Nft): TreeNftType {
  return {
    address: item.mint,
    owner: item.owner,
    metadata: {
      name: item.name,
      symbol: item.symbol,
      description: item.description,
      attributes: item.attributes_array,
    },
    uri: item.metadata_uri,
    file: {
      uri: item.image_uri,
      mime: "image/png",
    },
    authorities: [
      {
        address: item.owner,
        scopes: [],
      },
    ],
    isCompressed: item.is_compressed,
    tree: item.merkle_tree,
    collection: {
      address: item.collection.address,
      verified: item.collection.verified,
    },
    attributes: item.attributes,
  };
}

export function getAttributeValue(data: TreeNftType, traitType: string) {
  return (
    data.metadata.attributes
      ?.find((attr) => attr.trait_type === traitType)
      ?.value?.toString() || "N/A"
  );
}

export const mapProof = (assetProof: { proof: string[] }): AccountMeta[] => {
  if (!assetProof.proof || assetProof.proof.length === 0) {
    throw new Error("Proof is empty");
  }
  return assetProof.proof.map((node) => ({
    pubkey: new PublicKey(node),
    isSigner: false,
    isWritable: false,
  }));
};

export function displayNumber(input: number) {
  return input.toFixed(3).toLocaleString();
}

export function displayPrice(lamports: BN | string) {
  if (Number(lamports) === 0) return "-";
  const price = new BN(lamports);
  return displayNumber(Number(price) / LAMPORTS_PER_SOL);
}

export function convertHeliusApiAssetToTreeNftType(
  item: DAS.GetAssetResponse
): TreeNftType {
  const collection = item.grouping?.find(
    (group) => group.group_key === "collection"
  );
  return {
    address: item.id,
    owner: item.ownership.owner,
    metadata: {
      name: item.content?.metadata.name ?? "",
      symbol: item.content?.metadata.symbol ?? "",
      description: item.content?.metadata.description,
      attributes: item.content?.metadata.attributes?.map((attr) => ({
        trait_type: attr.trait_type,
        value: attr.value,
      })),
    },
    uri: item.content?.json_uri ?? "",
    file: {
      uri: item.content?.links?.image,
      mime: "image/png",
    },
    authorities: item.authorities,
    isCompressed: item.compression?.compressed ?? false,
    tree: item.compression?.tree,
    collection: {
      address: collection?.group_value || "",
      verified: collection?.verified || false,
    },
  };
}

export function convertHeliusApiAssetToNftType(
  item: DAS.GetAssetResponse
): Nft {
  const collection = item.grouping?.find(
    (group) => group.group_key === "collection"
  );
  return {
    name: item.content?.metadata.name ?? "",
    description: item.content?.metadata.description ?? "",
    symbol: item.content?.metadata.symbol ?? "",
    image_uri: item.content?.links?.image ?? "",
    royalty: item.royalty?.basis_points ?? 0,
    mint: item.id,
    owner: item.ownership.owner,
    cached_image_uri: item.content?.links?.image
      ? `https://cdn.helius-rpc.com/cdn-cgi/image//${item.content?.links?.image}`
      : "",
    metadata_uri: item.content?.json_uri ?? "",
    creators:
      item.creators?.map((creator) => ({
        address: creator.address,
        verified: creator.verified,
        share: creator.share,
      })) ?? [],
    collection: {
      address: collection?.group_value || "",
      verified: collection?.verified || false,
      name: collection?.collection_metadata?.name || "",
    },

    attributes_array: item.content?.metadata.attributes,
    files: item.content?.files,
    primary_sale_happened: item.royalty?.primary_sale_happened ?? false,
    is_mutable: item.mutable,
    is_compressed: item.compression?.compressed ?? false,
    compression: item.compression,
    merkle_tree: item.compression?.tree,
  };
}
