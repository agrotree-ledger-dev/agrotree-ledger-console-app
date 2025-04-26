import { PublicKey } from "@solana/web3.js";

export type MakeCreateCollectionInstructionInput = {
  creator: PublicKey | string;
  collectionId: string;
  name: string;
  description?: string;
  uri: string;
};

export type MakeCreateMerkelTreeInstructionInput = {
  creator: PublicKey | string;
  collectionId: string;
  numOfNodes: number;
};

export type MakeMintNftTreeInstructionInput = {
  creator: PublicKey | string;
  merkleTree: PublicKey | string;
  collectionId: string;
  name: string;
  symbol: string;
  uri: string;
};

export type MakeDelegateToSaasInstructionInput = {
  creator: PublicKey | string;
  collectionId: string;
  maxNftCanMint: number;
  merkleTree: string;
};
