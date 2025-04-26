import { JsonValue } from "@prisma/client/runtime/library";

export type NftMetadataType = {
  name: string;
  description: string;
  image: string;
  [key: string]: string;
};

export type NftMetadataDbType = {
  id: number;
  name: string;
  description: string;
  image: string;
  metadata: JsonValue;
  collectionId: number;
  createdAt: Date;
  creatorId: string;
};

export type NftTraitType = {
  trait_type: string;
  value: string;
};
