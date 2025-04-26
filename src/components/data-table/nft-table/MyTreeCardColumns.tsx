"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ImageIcon, Loader2 } from "lucide-react";
import { AsyncImage } from "loadable-image";
import {
  getExplorerLink,
  transformIrysUrl,
  truncateAddress,
} from "@/lib/utils";

import { Nft } from "@/types/shyft.type";
import { Badge } from "@/components/ui/badge";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const getMyTreeCardColumns = (
  currency: string = "USD"
): ColumnDef<Nft>[] => [
  {
    header: "Species",
    accessorKey: "species",
    cell: ({ row }) => {
      const image = row.original.image_uri;
      const name = row.original.name;
      return image ? (
        <div className="flex items-center gap-2">
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
          {name}
        </div>
      ) : (
        <ImageIcon className="size-11 rounded-lg" />
      );
    },
  },
  {
    accessorKey: "mint",
    header: "Address",
    cell: ({ row }) => {
      return (
        <a href={getExplorerLink(row.original.mint)} target="_blank">
          {truncateAddress(row.original.mint)}
        </a>
      );
    },
  },
  {
    header: "Project Developer",
    accessorKey: "attributes.project_developer",
  },
  {
    header: "Planting Date",
    accessorKey: "attributes.plantation_date",
  },
  {
    header: "Height (m)",
    accessorKey: "attributes.current_height",
    cell: ({ row }) => {
      return (
        <Badge variant={"outline"}>
          {row.original.attributes.current_height || "Growth"}
        </Badge>
      );
    },
  },
  {
    header: "Status",
    accessorKey: "attributes.status",
    cell: ({ row }) => {
      return (
        <Badge
          variant={"outline"}
          className="border border-green-500 text-green-500"
        >
          {row.original.attributes.status || "Growth"}
        </Badge>
      );
    },
  },
  {
    header: "Current Estimated Value",
    accessorKey: "attributes.current_estimated_value",
    cell: ({ row }) => {
      return (
        <div>
          <Badge
            variant={"outline"}
            className="border border-muted-foreground text-muted-forborder-muted-foreground"
          >
            {row.original.attributes.current_estimated_value || "-"} {currency}
          </Badge>
        </div>
      );
    },
  },
];
