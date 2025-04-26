"use client";

import { NftMetadataDbType } from "@/types/Metadata.type";
import { ColumnDef } from "@tanstack/react-table";
import NftMetadataViewModal from "../NftMetadataViewModal";

import { ImageIcon, Loader2 } from "lucide-react";
import {
  getExplorerLink,
  transformIrysUrl,
  truncateAddress,
} from "@/lib/utils";
import NftAction from "../NftAction";
import { AsyncImage } from "loadable-image";
export const columns: ColumnDef<NftMetadataDbType>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const image = row.getValue("image");
      return image ? (
        <AsyncImage
          src={transformIrysUrl(image as string)}
          loader={
            <div className="flex justify-center items-center bg-white/10">
              <Loader2 className="size-5 animate-spin stroke-white/50" />
            </div>
          }
          alt={"nft image"}
          style={{ width: 44, height: 44 }}
          className="rounded-lg aspect-square object-cover"
        />
      ) : (
        <ImageIcon className="size-11 rounded-lg" />
      );
    },
  },

  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const address = row.getValue("address") as string;
      return address ? "Minted" : "Not minted";
    },
  },

  {
    accessorKey: "address",
    header: "Explorer",
    cell: ({ row }) => {
      const address = row.getValue("address") as string;
      return (
        <a href={getExplorerLink(address)} target="_blank">
          {truncateAddress(address)}
        </a>
      );
    },
  },
  {
    accessorKey: "assetId",
    header: () => <div className="text-right">Asset Id</div>,
    cell: ({ row }) => {
      const assetId = row.getValue("assetId") as string;
      return <div className="flex justify-end gap-3">{assetId ?? "-"}</div>;
    },
  },
  {
    accessorKey: "id",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => {
      const address = row.getValue("address") as string;
      const id = row.getValue("id") as number;
      return (
        <div className="flex justify-end gap-3">
          {!address ? <NftAction id={id} /> : null}
          <NftMetadataViewModal id={id} />
        </div>
      );
    },
  },
];
