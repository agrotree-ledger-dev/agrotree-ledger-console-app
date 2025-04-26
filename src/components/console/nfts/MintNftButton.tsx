"use client";
import { Button } from "@/components/ui/button";
import useMintNft from "@/hooks/useMintNft";
import { CirclePlus, Loader2 } from "lucide-react";
import React, { useCallback } from "react";
import { toast } from "sonner";
type Props = {
  id: number;
  label?: string;
};
const MintNftButton: React.FC<Props> = ({ id, label }) => {
  const { mutateAsync, isPending } = useMintNft(id);
  const handleMint = useCallback(async () => {
    try {
      await mutateAsync();
    } catch {
      toast.error("Error minting NFT. Please try again.");
    }
  }, [mutateAsync]);
  return (
    <Button onClick={handleMint} disabled={isPending}>
      {isPending ? (
        <Loader2 className="mr-2 size-4 animate-spin" />
      ) : (
        <CirclePlus className="mr-2 size-4" />
      )}
      {label || "Mint cNFT"}
    </Button>
  );
};

export default MintNftButton;
