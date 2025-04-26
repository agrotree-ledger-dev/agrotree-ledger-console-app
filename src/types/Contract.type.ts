import { PublicKey } from "@solana/web3.js";

export type MakeInitMarketInstructionInput = {
  authority: PublicKey;
  feeRate: number;
};

export type MakeListingNftInstructionInput = {
  authority: PublicKey;
  assetId: PublicKey;
  price: number | bigint;
};

export type MakeUnlistNftInstructionInput = {
  authority: PublicKey;
  assetId: PublicKey;
};

export type MakeBuyNftInstructionInput = {
  seller: PublicKey;
  authority: PublicKey;
  assetId: PublicKey;
};

export type GetMarketplaceListingNftInput = {
  limit?: number;
  page?: number;
};

export type GetMarketplaceListingNftBySellerInput = {
  seller: PublicKey;
  limit?: number;
  page?: number;
};

export type CompressedListingType = {
  publicKey: string;
  account: {
    seller: string;
    merkleTree: string;
    assetId: string;
    price: string;
    bump: number;
  };
};

export enum TransactionEnum {
  LIST = "LIST",
  UNLIST = "UNLIST",
  BUY = "BUY",
}
