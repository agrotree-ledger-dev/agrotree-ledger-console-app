"use server";
import { getConfigAddress } from "@/lib/contracts/agrotree.contract";
import { convertShyftApiAssetToTreeNftType } from "@/lib/utils";
import { Nft, PaginationShyftType } from "@/types/shyft.type";
import { TreeNftType } from "@/types/TreeNft.type";
import axios from "axios";

const API_KEY_BANKS = [
  "fR6hxcgz5w1QO1zv",
  "Eu-x7Y3bDyfsAasB",
  "DgTscp1QAFBjndzE",
];

const shyftFetcher = axios.create({
  baseURL: `https://api.shyft.to`,
  headers: {
    "Content-Type": "application/json",
  },
});

const network = "devnet";

export async function getTotalTreeCountFromShyft(address: string) {
  if (!address) {
    return 0;
  }
  const [agroTreeManagerConfigAddress] = getConfigAddress();
  try {
    const { data } = await shyftFetcher.get(
      `/sol/v1/nft/search?network=${network}&page=1&size=1&wallet=${address}&creators=${agroTreeManagerConfigAddress.toString()}`,
      {
        headers: {
          "x-api-key":
            API_KEY_BANKS[Math.floor(Math.random() * API_KEY_BANKS.length)],
        },
      }
    );
    if (data.success) {
      return Number(data.result.total_data);
    }
    return 0;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

export async function getAssetListFromShyft(
  addresses: (string | null)[],
  page: number = 1,
  limit: number = 10
): Promise<Nft[]> {
  if (!addresses || addresses.length === 0) {
    return [];
  }
  try {
    const { data } = await shyftFetcher.post(
      `/sol/v1/nft/read_selected`,
      {
        network,
        nft_addresses: addresses
          .filter((item) => !!item)
          .slice(page - 1, limit),
        refresh: true,
      },
      {
        headers: {
          "x-api-key":
            API_KEY_BANKS[Math.floor(Math.random() * API_KEY_BANKS.length)],
        },
      }
    );

    if (data.success) {
      return data.result;
    }
    return [];
  } catch (error) {
    // const data = await prisma.nftMetadata.findMany({
    //   where: {
    //     address: {
    //       in: addresses as string[],
    //     },
    //   },
    // });

    // return data.map((item) => convertShyftApiAssetToTreeNftType(item));

    console.error(error);
    return [];
  }
}

export async function getAssetFromShyft(
  address: string
): Promise<TreeNftType | null> {
  try {
    const { data } = await shyftFetcher.get(
      `/sol/v1/nft/read?network=${network}&nft_address=${address}`,
      {
        headers: {
          "x-api-key":
            API_KEY_BANKS[Math.floor(Math.random() * API_KEY_BANKS.length)],
        },
      }
    );
    if (data.success) {
      return convertShyftApiAssetToTreeNftType(data.result);
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getAssetByOwnerFromShyft(
  owner: string,
  page: number = 1,
  size: number = 5
): Promise<PaginationShyftType<Nft>> {
  try {
    const [agroTreeManagerConfigAddress] = getConfigAddress();
    const { data } = await shyftFetcher.get(
      `/sol/v1/nft/search?network=${network}&page=${
        page + 1
      }&size=${size}&wallet=${owner}&creators=${agroTreeManagerConfigAddress.toString()}`,
      {
        headers: {
          "x-api-key":
            API_KEY_BANKS[Math.floor(Math.random() * API_KEY_BANKS.length)],
        },
      }
    );

    if (data.success) {
      return {
        items: data.result.nfts,
        // .map((item: Nft) =>
        //   convertShyftApiAssetToTreeNftType(item)
        // ),
        total_data: data.result.total_data,
        page: data.result.page,
        size: data.result.size,
        total_page: data.result.total_page,
      };
    } else {
      return {
        items: [],
        total_data: 0,
        page: 1,
        size: 10,
        total_page: 0,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      items: [],
      total_data: 0,
      page: 1,
      size: 10,
      total_page: 0,
    };
  }
}
