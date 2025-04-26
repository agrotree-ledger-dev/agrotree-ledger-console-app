"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileStack } from "lucide-react";
import React, { useMemo, useState } from "react";
import BatchUploadForm from "./BatchUploadForm";
import { useQuery } from "@tanstack/react-query";
import useUmi from "@/hooks/useUmi";
import { fetchTreeConfigFromSeeds } from "@metaplex-foundation/mpl-bubblegum";
import { publicKey } from "@metaplex-foundation/umi";
type Props = {
  collectionId: number;
  nfts?: {
    id: number;
    address: string | null;
  }[];
  merkleTree: string;
};
const BatchUploadModal: React.FC<Props> = ({
  collectionId,
  nfts,
  merkleTree,
}) => {
  const [open, setOpen] = useState(false);
  const umi = useUmi();
  const { data: treeConfig } = useQuery({
    queryKey: ["fetch-merkel-tree-config", collectionId],
    queryFn: async () =>
      fetchTreeConfigFromSeeds(umi, {
        merkleTree: publicKey(merkleTree),
      }),
  });

  const isAvailable = useMemo(() => {
    if ((nfts?.length || 0) >= (treeConfig?.totalMintCapacity || 0)) {
      return false;
    }
    return true;
  }, [nfts?.length, treeConfig?.totalMintCapacity]);

  if (!treeConfig) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button disabled={!isAvailable}>
          <FileStack className="size-4 mr-2" />
          {isAvailable ? "Batch upload" : "Reached limit of NFTs"}
        </Button>
      </DialogTrigger>

      <DialogContent
        className="flex flex-col overflow-hidden max-w-3xl"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Preparing your NFTs for batch upload</DialogTitle>
          <DialogDescription>
            Before you upload your assets, you need to prepare them first. You
            can upload up to 1,000 NFT collectibles at once.{" "}
            <a
              href="/assets/example/metadata-example.zip"
              download
              className="text-lightGreen underline"
            >
              Download our example file
            </a>{" "}
            to use it as a template and follow the next steps for the upload to
            be successful.
          </DialogDescription>
        </DialogHeader>
        <BatchUploadForm
          collectionId={collectionId}
          callbackFn={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default BatchUploadModal;
