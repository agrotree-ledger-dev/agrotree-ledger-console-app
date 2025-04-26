"use client";
import SkeletonWapper from "@/components/SkeletonWapper";
import useUmi from "@/hooks/useUmi";
import { fetchTreeConfigFromSeeds } from "@metaplex-foundation/mpl-bubblegum";
import { publicKey } from "@metaplex-foundation/umi";
import { useQuery } from "@tanstack/react-query";
import React from "react";
type Props = {
  merkleTree: string;
};
const CollectionMerkelTreeConfig: React.FC<Props> = ({ merkleTree }) => {
  const umi = useUmi();
  const { data: treeConfig, isLoading } = useQuery({
    queryKey: ["fetch-merkel-tree-config", merkleTree],
    queryFn: async () =>
      fetchTreeConfigFromSeeds(umi, {
        merkleTree: publicKey(merkleTree),
      }),
  });
  if (!treeConfig) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 rounded-md gap-5">
      <SkeletonWapper isLoading={isLoading}>
        <div className="bg-lightGreen/20 p-5 rounded-lg">
          <span className="text-2xl font-bold">
            {treeConfig.numMinted.toString()}
          </span>
          <h3 className="text-sm text-muted-foreground">NFTs minted</h3>
        </div>
      </SkeletonWapper>
      <SkeletonWapper isLoading={isLoading}>
        <div className="bg-lightGreen/20 p-5 rounded-lg">
          <span className="text-2xl font-bold">
            {treeConfig.totalMintCapacity.toString()}
          </span>
          <h3 className="text-sm text-muted-foreground">Total mint capacity</h3>{" "}
        </div>
      </SkeletonWapper>
    </div>
  );
};

export default CollectionMerkelTreeConfig;
