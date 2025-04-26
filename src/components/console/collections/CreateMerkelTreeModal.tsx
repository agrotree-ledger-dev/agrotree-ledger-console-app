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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getTreeOptions, transformToVersionedTransaction } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Save, TentTree } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { createMerkelTree } from "./_actions/createMerkelTree.action";
import {
  SolanaChain,
  usePublicClient,
  useWallets,
} from "@particle-network/connectkit";
import { syncMerkelTreeToCollection } from "./_actions/syncMerkelTreeToCollection.action";
import revalidatePathAction from "@/_actions/revalidatePathAction";

const formSchema = z.object({
  number_of_nodes: z
    .number({ required_error: "Required.", invalid_type_error: "Required" })
    .min(1, "Number of nodes must be greater than 1.")
    .max(1073741824, `Number of nodes must be less than 1073741824.`),
});

type FormSchemaType = z.infer<typeof formSchema>;

type Props = {
  cid: string;
};

const CreateMerkelTreeModal: React.FC<Props> = ({ cid }) => {
  const [loading, setLoading] = useState(false);
  const [primaryWallet] = useWallets();
  const publicClient = usePublicClient<SolanaChain>();
  const [open, setOpen] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      number_of_nodes: 8,
    },
  });

  const numOfNodes = form.watch("number_of_nodes");

  const treeOptions = getTreeOptions(numOfNodes ?? 0);

  async function onSubmit(values: FormSchemaType) {
    if (!publicClient) return;

    toast.promise(
      new Promise<{
        tx: string;
      }>(async (resolve, reject) => {
        setLoading(true);
        try {
          const { transaction } = await createMerkelTree(
            cid,
            values.number_of_nodes
          );

          if (!transaction) {
            reject("Failed to create Merkel Tree.");
            return;
          }

          const wallet = primaryWallet.getWalletClient<SolanaChain>();
          const versionedInstruction =
            transformToVersionedTransaction(transaction);
          const signedTx = await wallet.signTransaction(versionedInstruction);

          const tx = await publicClient.sendTransaction(signedTx);

          // delay to wait for the tx to be confirmed
          await new Promise((resolve) => setTimeout(resolve, 3000));

          await syncMerkelTreeToCollection(cid);
          resolve({ tx });
        } catch (error) {
          console.error(error);
          reject(error);
        }
      }),
      {
        loading: "Creating Merkel Tree.... This may take a while. Please wait.",
        success: async (res) => {
          setLoading(false);
          setOpen(false);
          await revalidatePathAction(`/console/collections/${cid}`, "page");
          return `Merkel Tree created successfully! tx: ${res.tx}`;
        },
        error: () => {
          setLoading(false);
          return "Failed to create Merkel Tree.";
        },
      }
    );
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-80 border border-lightGreen border-dashed text-sm bg-lightGreen/10 cursor-pointer hover:bg-lightGreen/30 transition-colors duration-500">
      <p>
        This collection does not have a Merkel Tree. Click the button below to
        create one.
      </p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            Create Merkel Tree <TentTree className="size-4 ml-2" />
          </Button>
        </DialogTrigger>
        <DialogContent
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <DialogHeader>
            <DialogTitle>Setup Merkel Tree for this collection</DialogTitle>
            <DialogDescription>
              Merkel Tree is a data structure that allows you create and manage
              a huge number of NFTs in a collection with low cost.
            </DialogDescription>
          </DialogHeader>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div className="flex flex-col gap-5">
                  <FormField
                    control={form.control}
                    name="number_of_nodes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of nodes</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="1024"
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseInt(e.target.value))
                            }
                          />
                        </FormControl>
                        {numOfNodes ? (
                          <FormDescription>{`max_depth = ${treeOptions.maxDepth}, max_buffer_size = ${treeOptions.maxBufferSize}, canopy_depth = ${treeOptions.canopyDepth}`}</FormDescription>
                        ) : null}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-end gap-5">
                  <Button onClick={() => setOpen(false)} variant={"outline"}>
                    Cancel
                  </Button>
                  <Button
                    disabled={form.formState.isSubmitting || loading}
                    type="submit"
                  >
                    {form.formState.isSubmitting || loading ? (
                      <Loader2 className="size-4 animate-spin mr-2" />
                    ) : (
                      <Save className="size-4 mr-2" />
                    )}
                    Create
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateMerkelTreeModal;
