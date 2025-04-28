"use server";
import { getConfigAddress } from "@/lib/contracts/agrotree.contract";
import {
  convertHeliusApiAssetToNftType,
  convertHeliusApiAssetToTreeNftType,
} from "@/lib/utils";
import { Nft, PaginationShyftType } from "@/types/shyft.type";
import { TreeNftType } from "@/types/TreeNft.type";
import { AssetSortBy, AssetSortDirection, Helius } from "helius-sdk";
const network = "devnet";

// Replace YOUR_API_KEY with the API key from your Helius dashboard
const helius = new Helius(process.env.HELIUS_API_KEY!, network);

export async function getAssetByOwnerFromHelius(
  owner: string,
  page: number = 1,
  size: number = 10
): Promise<PaginationShyftType<Nft>> {
  const [agroTreeManagerConfigAddress] = getConfigAddress();
  const response = await helius.rpc.searchAssets({
    ownerAddress: owner,
    page,
    limit: size,
    tokenType: "nonFungible",
    creatorAddress: agroTreeManagerConfigAddress.toString(),
    sortBy: {
      sortBy: AssetSortBy.Id,
      sortDirection: AssetSortDirection.Asc,
    },
  });

  if (response.items.length > 0) {
    return {
      items: response.items.map((item) => convertHeliusApiAssetToNftType(item)),
      total_data: response.total,
      page: response.page,
      size: response.limit,
      total_page: response.grand_total ?? 0,
    };
  }
  return {
    items: [],
    total_data: 0,
    page: 1,
    size: 10,
    total_page: 0,
  };
}

export async function getAssetFromHelius(
  address: string
): Promise<TreeNftType | null> {
  const respone = await helius.rpc.getAsset({
    id: address,
  });

  if (respone.id) {
    return convertHeliusApiAssetToTreeNftType(respone);
  }
  return null;
}

export async function getAssetListFromHelius(
  addresses: (string | null)[],
  page: number = 1,
  limit: number = 10
): Promise<Nft[]> {
  const ids: string[] = addresses.filter((item): item is string => !!item);
  const response = await helius.rpc.getAssetBatch({
    ids: ids.slice(page - 1, limit),
  });

  if (response.length > 0) {
    return response.map((item) => convertHeliusApiAssetToNftType(item));
  }
  return [];
}
