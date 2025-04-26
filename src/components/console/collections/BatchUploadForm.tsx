"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { checkIfMetadataValid } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Badge, BadgeCheck, Loader2, Save, X } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { uploadMetadataBundle } from "./_actions/uploadMetadataBundle.action";
import { useQueryClient } from "@tanstack/react-query";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_MEDIA_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/svg",
  "image/gif",
  "video/mp4",
  "video/avi",
];

const formSchema = z.object({
  // csv file
  metadataFile: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => file?.type === "text/csv",
      "Only .csv format are supported."
    ),
  mediaFiles: z
    .any()
    .refine((files) => files?.length > 0, { message: "Image is required." })
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_MEDIA_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png, .svg, .gif, .mp4 and .avi formats are supported."
    ),
});
type FormSchemaType = z.infer<typeof formSchema>;

type Props = {
  collectionId: number;
  callbackFn?: () => void;
};
const BatchUploadForm: React.FC<Props> = ({ collectionId, callbackFn }) => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      metadataFile: null,
      mediaFiles: null,
    },
  });

  const handleSubmit = useCallback(
    async (values: FormSchemaType) => {
      toast.promise(
        new Promise<{
          uploadedMetadata: {
            image: string;
            name: string;
            description: string;
            attributes: {
              trait_type: string;
              value: string;
            }[];
          }[];
        }>(async (resolve, reject) => {
          try {
            setLoading(true);
            const errorMessage = await checkIfMetadataValid(
              values.metadataFile as File,
              values.mediaFiles as FileList
            );

            if (errorMessage) {
              setLoading(false);
              toast.error(errorMessage);
              return;
            }

            const formData = new FormData();

            formData.append("collectionId", collectionId.toString());
            formData.append("metadataFile", values.metadataFile);
            Array.from(values.mediaFiles as FileList).forEach((file) => {
              formData.append("mediaFiles", file);
            });

            const { metadata } = await uploadMetadataBundle(formData);
            resolve({ uploadedMetadata: metadata });
          } catch (error) {
            reject(error);
          }
        }),
        {
          loading: "Uploading files...",
          success: async () => {
            await queryClient.invalidateQueries({
              queryKey: ["get-collection-nfts"],
            });
            setLoading(false);
            callbackFn?.();
            return "Files uploaded successfully.";
          },
          error: "Failed to upload files.",
        }
      );
    },
    [callbackFn, collectionId, queryClient]
  );

  const fileSelected = form.watch("metadataFile");
  const mediaFilesSelected = form.watch("mediaFiles");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-5 flex flex-col h-full overflow-auto border-lightGreen gap-5 rounded-lg"
      >
        <div className="space-y-10">
          <Card className="bg-lightGreen/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 justify-between">
                Add CSV file
                {fileSelected ? (
                  <BadgeCheck className="stroke-green-500" />
                ) : (
                  <Badge className="stroke-muted" />
                )}
              </CardTitle>
              <CardDescription>
                Add a CSV file with the name{" "}
                <span className="font-bold">metadata.csv</span>.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="metadataFile"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        {...fieldProps}
                        accept="text/csv"
                        multiple={false}
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
            </CardContent>
          </Card>
          <Card className="bg-lightGreen/10 relative">
            {!fileSelected ? (
              <div className="w-full h-full bg-white/20 absolute top-0 left-0 rounded-lg"></div>
            ) : null}
            <CardHeader>
              <CardTitle className="flex items-center gap-3 justify-between">
                Add media files
                {mediaFilesSelected ? (
                  <BadgeCheck className="stroke-green-500" />
                ) : (
                  <Badge className="stroke-muted" />
                )}
              </CardTitle>
              <CardDescription>
                Prepare your NFT media files: Crossmint supports images (PNG,
                JPEG, SVG), animations (GIF) and videos (avi, mp4) with a max
                size of 5MB each.{" "}
                <span className="font-bold text-lightGreen">
                  Upload all your items from the same folder.
                </span>{" "}
                The images should not be in subfolders.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="mediaFiles"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        {...fieldProps}
                        accept="image/png, image/jpeg, image/jpg, image/svg, image/gif, video/mp4, video/avi"
                        multiple={true}
                        onChange={(e) => onChange(e.target.files)}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-end gap-5">
          <Button disabled={loading} size={"lg"} variant={"outline"}>
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
      </form>
    </Form>
  );
};

export default BatchUploadForm;
