"use server";

import { auth } from "@/auth";
import {
  getAgrotreeProgram,
  getCollectionAddress,
} from "@/lib/contracts/agrotree.contract";
import prisma from "@/lib/db";
import { BN } from "@coral-xyz/anchor";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function syncMerkelTreeToCollection(collectionId: string) {
  try {
    const session = await auth();

    if (!session || !session.user.id) {
      redirect("/");
    }

    const currentCollection = await prisma.collection.findUnique({
      where: {
        id: parseInt(collectionId),
      },
    });

    if (!currentCollection) {
      throw new Error("Collection not found");
    }

    const collectionAddress = getCollectionAddress(new BN(collectionId));

    if (!currentCollection.merkelTree) {
      const { program } = getAgrotreeProgram();

      try {
        const collectionAccount =
          await program.account.agroTreeCollection.fetch(collectionAddress);

        const merkelTree = collectionAccount.merkleTree;
        const creator = session.user.id.toString();

        await prisma.collection.update({
          where: {
            id: parseInt(collectionId),
            creatorId: creator,
          },
          data: {
            merkelTree: merkelTree?.toString(),
          },
        });
      } catch {}
    }

    revalidatePath(`/console/collections/[slug]`, "layout");

    return {
      status: "success",
    };
  } catch {
    return {
      status: "error",
      message: `Failed to sync Merkel Tree to collection`,
    };
  }
}
