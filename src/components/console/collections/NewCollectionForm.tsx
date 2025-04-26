/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import React, { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Textarea } from "@/components/ui/textarea";

import { Loader2, Save, X } from "lucide-react";
import {
  SolanaChain,
  usePublicClient,
  useWallets,
} from "@particle-network/connectkit";
import { transformToVersionedTransaction } from "@/lib/utils";
import { toast } from "sonner";
import {
  deleteCollection,
  updateCollection,
} from "./_actions/updateCollection.action";
import { useQueryClient } from "@tanstack/react-query";
import { createCollection } from "./_actions/createCollection.action";
import { useAlert } from "@/components/providers/AlertDialogProvider";
import { useConsoleContext } from "@/components/providers/ConsoleProvider";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const formSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(500),
  website: z.union([z.literal(""), z.string().trim().url()]),
  image: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});
type FormSchemaType = z.infer<typeof formSchema>;

type Props = {
  callbackFn?: () => void;
};
const NewCollectionForm: React.FC<Props> = ({ callbackFn }) => {
  const { selectedProject } = useConsoleContext();
  const alert = useAlert();
  const queryClient = useQueryClient();
  const [primaryWallet] = useWallets();
  const publicClient = usePublicClient<SolanaChain>();
  const [loading, setLoading] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      website: "",
      image: "",
    },
  });

  const imageSelected = form.watch("image");

  const handleSubmit = useCallback(
    async (values: FormSchemaType) => {
      if (!publicClient) return;
      setLoading(true);
      toast.promise(
        new Promise<{
          tx: string;
          collection: string;
        }>(async (resolve, reject) => {
          let _collectionId = "";
          try {
            const formData = new FormData();
            formData.append("projectId", selectedProject?.id || "");
            formData.append("name", values.name);
            formData.append("description", values.description);
            formData.append("website", values.website || "");
            formData.append("image", values.image);
            const wallet = primaryWallet.getWalletClient<SolanaChain>();

            const {
              success,
              transaction,
              collectionMintAddress,
              collectionId,
              imageUrl,
              uri,
            } = await createCollection(formData);

            if (!success || !transaction) {
              reject("[S]-Failed to create collection transaction");
              return;
            }
            _collectionId = collectionId;

            const signedTx = await wallet.signTransaction(
              transformToVersionedTransaction(transaction)
            );

            const tx = await publicClient.sendTransaction(signedTx);

            await updateCollection(
              collectionId,
              collectionMintAddress,
              imageUrl,
              uri
            );
            resolve({ tx, collection: collectionMintAddress });
          } catch (error) {
            if (_collectionId) await deleteCollection(_collectionId);
            console.error("Error creating collection", error);
            reject(error);
          }
        }),
        {
          loading: "Creating collection...",
          success: async (res) => {
            console.log("Transaction sent:", res);
            setLoading(false);
            await queryClient.invalidateQueries({
              queryKey: ["get-collections"],
            });
            callbackFn?.();
            alert({
              title: "Congratulations!",
              body: "Collection created successfully!",
            });
            return `Collection created successfully! tx: ${res.tx}`;
          },
          error: () => {
            setLoading(false);
            return "Failed to create collection because upload metadata took a long time. Please try again later.";
          },
        }
      );
    },
    [
      alert,
      callbackFn,
      primaryWallet,
      publicClient,
      queryClient,
      selectedProject?.id,
    ]
  );

  const onUpload = () => {
    refInput?.current?.click();
  };

  if (!selectedProject) {
    alert({
      title: "You need to select a project",
      body: "Please select a project to create a collection",
    });
    return null;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-5 flex flex-col h-full overflow-auto  border-lightGreen gap-5 rounded-lg"
      >
        <div className="grow">
          <div className="lg:grid lg:grid-cols-3 md:gap-10">
            <div className="lg:col-span-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Collection name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. My collection" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder="e.g. My collection description"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. https://..." {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-5">
              <div className="flex w-60">
                <FormField
                  control={form.control}
                  name="image"
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel>Collection image</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          {...fieldProps}
                          className="hidden"
                          accept="image/png, image/jpeg, image/jpg"
                          ref={refInput}
                          onChange={(e) =>
                            onChange(e.target.files && e.target.files[0])
                          }
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {imageSelected ? (
                <div className="size-60 border border-lightGreen border-dashed flex justify-center items-center text-sm bg-lightGreen/10 cursor-pointer hover:bg-lightGreen/30 transition-colors duration-500">
                  <img
                    className="w-full h-full max-w-full object-cover"
                    src={URL.createObjectURL(imageSelected)}
                    alt="collection image"
                  />
                </div>
              ) : (
                <div
                  className="size-60 border border-lightGreen border-dashed flex justify-center items-center text-sm bg-lightGreen/20 cursor-pointer hover:bg-lightGreen/30 transition-colors duration-500"
                  onClick={onUpload}
                >
                  Choose image file
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex-none">
          <div className="flex justify-end gap-5">
            <Button
              disabled={loading}
              size={"lg"}
              variant={"outline"}
              onClick={() => callbackFn?.()}
            >
              <X className="size-4 mr-2" />
              Cancel
            </Button>
            <Button type="submit" disabled={loading} size={"lg"}>
              {loading ? (
                <Loader2 className="size-4 mr-2 animate-spin" />
              ) : (
                <Save className="size-4 mr-2" />
              )}
              Save
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default NewCollectionForm;
