"use server";
import { getConfigAddress } from "@/lib/contracts/agrotree.contract";
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
