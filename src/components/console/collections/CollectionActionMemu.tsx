"use client";
import React from "react";
import BatchUploadModal from "./BatchUploadModal";
import SassMintModal from "./SassMintModal";

type Props = {
  collectionId: number;
  nfts?: {
    id: number;
    address: string | null;
  }[];
  merkleTree: string;
};

const CollectionActionMemu: React.FC<Props> = ({
  collectionId,
  nfts,
  merkleTree,
}) => {
  return (
    <div className="flex items-center gap-3">
      <SassMintModal
        collectionId={collectionId}
        nfts={nfts}
        merkleTree={merkleTree}
      />
      <BatchUploadModal
        collectionId={collectionId}
        nfts={nfts}
        merkleTree={merkleTree}
      />
    </div>
  );
  // return (
  //   <DropdownMenu>
  //     <DropdownMenuTrigger asChild>
  //       <Button className="text-xs">
  //         Create NFT
  //         <ChevronDown className="ml-4 size-4" />
  //       </Button>
  //     </DropdownMenuTrigger>
  //     <DropdownMenuContent>
  //       <DropdownMenuItem>
  //         <SingleUploadModal collectionId={collectionId} />
  //       </DropdownMenuItem>
  //       <DropdownMenuItem>
  //         <BatchUploadModal collectionId={collectionId} />
  //       </DropdownMenuItem>
  //     </DropdownMenuContent>
  //   </DropdownMenu>
  // );
};

export default CollectionActionMemu;
