import { mintNftTree } from "@/components/console/nfts/_actions/mintNftTree.action";
import { syncNftTree } from "@/components/console/nfts/_actions/syncNftTree.action";
import { transformToVersionedTransaction } from "@/lib/utils";
import {
  useWallets,
  usePublicClient,
  SolanaChain,
} from "@particle-network/connectkit";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useMintNft = (id: number) => {
  const queryClient = useQueryClient();
  const [primaryWallet] = useWallets();
  const publicClient = usePublicClient<SolanaChain>();
  return useMutation({
    mutationKey: ["mint-nft", id],
    mutationFn: async () => {
      if (!publicClient) return;
      toast.promise(
        new Promise<{
          tx: string;
          assetId?: string;
          address?: string;
          success: boolean;
        }>(async (resolve, reject) => {
          try {
            const wallet = primaryWallet.getWalletClient<SolanaChain>();
            const { transaction } = await mintNftTree(id);

            const signedTx = await wallet.signTransaction(
              transformToVersionedTransaction(transaction)
            );

            const tx = await publicClient.sendTransaction(signedTx);

            const { success } = await syncNftTree(id, tx);

            resolve({ success, tx });
          } catch (error) {
            reject(error);
            console.error("Error minting NFT", error);
          }
        }),
        {
          loading: "Minting NFT...",
          success: async ({ tx, success }) => {
            if (success) {
              // await queryClient.invalidateQueries({
              //   queryKey: ["get-colletion-nfts"],
              // });

              await queryClient.invalidateQueries({
                queryKey: ["fetch-merkel-tree-config"],
              });
              return `NFT minted successfully! tx: ${tx}`;
            }
            return "Error minting NFT";
          },
          error: "Error minting NFT",
        }
      );
    },
  });
};

export default useMintNft;
