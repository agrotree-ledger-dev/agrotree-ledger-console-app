"use server";

import { auth } from "@/auth";
import prisma from "@/lib/db";
import { getUmiServer } from "@/lib/umi";
import { convertToNftMetadataJson } from "@/lib/utils";
import { createGenericFileFromBrowserFile } from "@metaplex-foundation/umi";
import { redirect } from "next/navigation";

export async function uploadMetadataBundle(formData: FormData) {
  const session = await auth();

  if (!session || !session.user.id) {
    redirect("/");
  }

  const creator = session.user.id.toString();
  const collectionId = formData.get("collectionId") as string;

  // console.log(formData)
  const umi = await getUmiServer();
  const metadataFile = formData.get("metadataFile") as File;
  const mediaFiles = formData.getAll("mediaFiles") as unknown as FileList;
  const metadataJson = await convertToNftMetadataJson(metadataFile);

  // upload media files
  const umiMediaFiles = await Promise.all(
    Array.from(mediaFiles).map((file) => createGenericFileFromBrowserFile(file))
  );

  const umiMediaFilesUrl = await umi.uploader.upload(umiMediaFiles);

  const metadataJsonWithImageUrls = metadataJson.map((item, index) => {
    return {
      ...item,
      image: umiMediaFilesUrl[index],
    };
  });

  //   const umiMetadataFile = Array.from(metadataJsonWithImageUrls).map((file) =>
  //     createGenericFileFromJson(file, `${file.name}.json`, {
  //       contentType: "application/json",
  //       displayName: file.name,
  //       extension: "json",
  //     })
  //   );

  await prisma.nftMetadata.createMany({
    data: metadataJsonWithImageUrls.map((item) => ({
      name: item.name,
      description: item.description,
      image: item.image,
      metadata: item.attributes,
      collectionId: parseInt(collectionId),
      creatorId: creator,
    })),
  });

  //   const umiMetadataFileUrl = await umi.uploader.upload(umiMetadataFile);

  //   console.log({ umiMediaFilesUrl, umiMetadataFileUrl });

  return {
    success: true,
    message: "Metadata bundle uploaded successfully.",
    metadata: metadataJsonWithImageUrls,
  };
}
