"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, SendHorizonal, Trash } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import useMintNft from "@/hooks/useMintNft";
type Props = {
  id: number;
};
const NftAction: React.FC<Props> = ({ id }) => {
  const { mutateAsync } = useMintNft(id);

  const handleMint = async () => {
    try {
      await mutateAsync();
    } catch {
      toast.error("Error minting NFT. Please try again.");
    }
  };

  const handleDelete = () => {
    toast.error(`Comming soon`);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
        <DropdownMenuLabel>NFT actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleMint}>
          <SendHorizonal className="size-4 mr-2" /> Mint
        </DropdownMenuItem>
        <DropdownMenuItem className="text-rose-500" onClick={handleDelete}>
          <Trash className="size-4 mr-2" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NftAction;
