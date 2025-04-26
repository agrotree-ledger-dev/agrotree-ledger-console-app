export type TreeNftType = {
  address: string;
  owner: string;
  metadata: {
    name: string;
    symbol: string;
    token_standard?: string;
    description?: string;
    attributes:
      | Array<{
          trait_type?: string;
          value?: string | number;
          [key: string]: unknown;
        }>
      | undefined;
  };
  uri: string;
  file?: {
    uri?: string;
    mime?: string;
  };
  authorities?: Array<{
    address: string;
    scopes: string[];
  }>;
  isCompressed: boolean;
  //   data_hash?: string;
  //   creator_hash?: string;
  //   asset_hash?: string;
  tree?: string;
  // data_hash?: PublicKey;
  // creator_hash?: PublicKey;
  // asset_hash?: PublicKey;
  // tree?: PublicKey;
  leaf_id?: number;
  collection?: {
    address?: string;
    verified?: boolean;
    metadata?: {
      name: string;
      symbol: string;
      description?: string;
      image: string;
    };
  };
  attributes?: { [k: string]: string | number };
  //   creator: Array<{ address: string; share: number; verified: boolean }>;
};
