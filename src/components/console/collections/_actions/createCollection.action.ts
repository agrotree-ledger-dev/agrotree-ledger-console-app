"use server";

import { auth } from "@/auth";
import {
  getCurrentCollectionCounter,
  makeCreateCollectionInstruction,
} from "@/lib/contracts/agrotree.contract";
import prisma from "@/lib/db";
import { getUmiServer } from "@/lib/umi";
import { transformIrysUrl } from "@/lib/utils";
import { createGenericFileFromBrowserFile } from "@metaplex-foundation/umi";
// import { BN } from "@coral-xyz/anchor";
// import { randomBytes } from "tweetnacl";

export async function createCollection(formData: FormData) {
  const session = await auth();

  if (!session || !session.user.id) {
    return {
      success: false,
    };
  }

  try {
    const creator = session.user.id.toString();

    const collectionId = await getCurrentCollectionCounter();

    const website = formData.get("website") as string;
    let imageUrl = "";
    let _uri = "";

    if (!website.includes("client")) {
      const umi = await getUmiServer();
      const image = formData.get("image") as File;
      const file = await createGenericFileFromBrowserFile(image);
      const [collectionImage] = await umi.uploader.upload([file], {
        onProgress: (percent) => {
          console.log(`${percent}% uploaded...`);
        },
      });

      imageUrl = transformIrysUrl(collectionImage);

      const uri = await umi.uploader.uploadJson({
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        website: formData.get("website") as string,
        image: imageUrl,
        attributes: [
          {
            trait_type: "Issuer",
            value: "Agrotree Ledger",
          },
          {
            trait_type: "Type",
            value: "Collection",
          },
        ],
      });
      //   const seed = new BN(randomBytes(8));
      _uri = transformIrysUrl(uri);
    } else {
      imageUrl = formData.get("imageUrl") as string;
      _uri = formData.get("uri") as string;
    }
    // console.log("Creating collection", preCollection.id.toString());
    // console.log({ _uri, imageUrl });

    const preCollection = await prisma.collection.create({
      data: {
        id: collectionId,
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        website: formData.get("website") as string,
        creatorId: creator,
        projectId: formData.get("projectId") as string,
      },
    });

    const { transaction, collectionMintAddress } =
      await makeCreateCollectionInstruction({
        collectionId: preCollection.id.toString(),
        creator,
        name: formData.get("name") as string,
        uri: _uri,
      });

    return {
      success: true,
      transaction,
      imageUrl,
      uri: _uri,
      collectionId: preCollection.id.toString(),
      collectionMintAddress,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
}
