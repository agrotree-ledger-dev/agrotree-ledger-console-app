"use client";
import React from "react";
import { getCollectionNfts } from "./_actions/getCollectionNfts.action";
import { DataTable } from "../nfts/nfts-table/data-table";
import { columns } from "../nfts/nfts-table/columns";
import DataTableSkeleton from "../nfts/nfts-table/data-table-skeleton";
import { useQuery } from "@tanstack/react-query";
import EmptyList from "@/components/EmptyList";
type Props = {
  collectionId: string;
};
const CollectionNfts: React.FC<Props> = ({ collectionId }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-collection-nfts", collectionId],
    queryFn: () => getCollectionNfts(collectionId),
    enabled: !!collectionId,
    refetchInterval: 55000,
  });

  if (isLoading) {
    return <DataTableSkeleton />;
  }

  return !data || data?.length == 0 ? (
    <EmptyList />
  ) : (
    <DataTable columns={columns} data={data} />
  );
};

// const CollectionNftsInner: React.FC<Props> = async ({ collectionId }) => {
//   noStore();
//   const data = await getCollectionNfts(collectionId);
//   return <DataTable columns={columns} data={data} />;
// };

export default CollectionNfts;
