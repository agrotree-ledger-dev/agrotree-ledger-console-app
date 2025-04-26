"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HandPlatter, Loader2, RefreshCcw, Send } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import {
  createSassMintAction,
  fetchSaasJobStatusAction,
  syncSaasMintAction,
} from "./_actions/saas.action";
import {
  useWallets,
  usePublicClient,
  SolanaChain,
} from "@particle-network/connectkit";
import { transformToVersionedTransaction } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
type Props = {
  collectionId: number;
  nfts?: {
    id: number;
    address: string | null;
  }[];
  merkleTree: string;
};
const SassMintModal: React.FC<Props> = ({ collectionId }) => {
  const [open, setOpen] = useState(false);
  const [mintCount, setMintCount] = useState(1);
  const [primaryWallet] = useWallets();
  const publicClient = usePublicClient<SolanaChain>();
  const [loading, setLoading] = useState(false);

  const { data: jobStatus } = useQuery({
    queryKey: ["fetch-saas-job-status", collectionId],
    queryFn: () => fetchSaasJobStatusAction(collectionId),
    refetchInterval: 15000,
  });

  // const isAvailable = useMemo(() => {
  //   return nfts && nfts?.filter((item) => !item.address).length > 0;
  // }, [nfts]);

  const handleRequestSaas = () => {
    toast.promise(
      new Promise<{
        tx: string;
      }>(async (resolve, reject) => {
        if (!publicClient) return;
        setLoading(true);
        try {
          const { transaction, success, message } = await createSassMintAction(
            collectionId,
            mintCount
          );

          if (!success || !transaction) {
            reject(message);
            return;
          }

          const wallet = primaryWallet.getWalletClient<SolanaChain>();
          const signedTx = await wallet.signTransaction(
            transformToVersionedTransaction(transaction)
          );

          const tx = await publicClient.sendTransaction(signedTx);

          await syncSaasMintAction(collectionId, mintCount);
          resolve({ tx });
        } catch (error) {
          console.error(error);
          reject(error);
        }
      }),
      {
        loading: "Requesting SAAS...",
        success: ({ tx }) => {
          setLoading(false);
          setOpen(false);
          return `Request SAAS successfully with tx: ${tx}`;
        },
        error: (message) => {
          setLoading(false);
          return `Request SAAS failed: ${message}`;
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {jobStatus?.status === "RUNNING" ? (
          <Button disabled>
            <RefreshCcw className="size-4 mr-2 animate-spin" />
            Job is running
          </Button>
        ) : (
          <Button>
            <HandPlatter className="size-4 mr-2" />
            Use SAAS
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        className="flex flex-col overflow-hidden max-w-md"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Mint NFT with Sass</DialogTitle>
          <DialogDescription>
            By using SAAS, you can mint multiple NFTs at once.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          <Label>How many NFTs do you want to mint?</Label>
          <Input
            type="number"
            onChange={(e) => setMintCount(Number(e.target.value))}
          />
        </div>
        <div className="flex items-center justify-end gap-3">
          <DialogClose asChild>
            <Button variant="outline" disabled={loading}>
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={handleRequestSaas}>
            {loading ? (
              <Loader2 className="size-4 mr-2 animate-spin" />
            ) : (
              <Send className="size-4 mr-2" />
            )}
            Request Saas
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SassMintModal;
