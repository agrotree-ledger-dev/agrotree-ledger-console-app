"use server";

import { getMarketplaceListingNftBySeller } from "@/lib/contracts/marketplace.contract";
import { Nft, PaginationShyftType } from "@/types/shyft.type";
import { getAssetListFromHelius } from "./helius.action";

export async function getMarketplaceListingNftBySellerAction(
  seller: string,
  page: number = 0,
  size: number = 5
): Promise<PaginationShyftType<Nft>> {
  const raw = await getMarketplaceListingNftBySeller(seller);

  const rawAddress = raw.slice(page, (page + 1) * size);
  const addreses = rawAddress.map((item) => item.account.assetId.toBase58());
  const items = await getAssetListFromHelius(addreses, page, size);
  const total_data = raw.length;
  const total_page = Math.ceil(total_data / size);
  return {
    size,
    total_data,
    page,
    total_page,
    items: items.map((item) => ({
      ...item,
      price: rawAddress
        .find((r) => r.account.assetId.toBase58() === item.mint)
        ?.account.price.toString(),
    })),
  };
}
