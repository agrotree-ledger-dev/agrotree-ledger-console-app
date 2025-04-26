"use server";
import prisma from "@/lib/db";
// import { isPublicKey } from "@metaplex-foundation/umi";
import { syncMerkelTreeToCollection } from "./syncMerkelTreeToCollection.action";
import { auth } from "@/auth";
import { notFound, redirect } from "next/navigation";

export async function getCollectionByIdOrPubkey(idOrPubkey: string) {
  const session = await auth();

  if (!session || !session.user.id) {
    redirect("/");
  }

  const creator = session.user.id.toString();

  // const isPubkey = isPublicKey(idOrPubkey);

  // let collection;

  // if (isPubkey) {
  const collection = await prisma.collection.findFirst({
    where: {
      publickey: idOrPubkey,
      creatorId: creator,
    },
  });
  // } else {
  //   collection = await prisma.collection.findFirst({
  //     where: {
  //       id: { equals: parseInt(idOrPubkey) },
  //       creatorId: creator,
  //     },
  //   });
  // }

  if (!collection) {
    return notFound();
  }

  if (!collection.merkelTree) {
    await syncMerkelTreeToCollection(collection.id.toString());
  }
  return prisma.collection.findUnique({
    where: {
      id: collection.id,
      creatorId: creator,
    },
    include: {
      NftMetadata: {
        select: {
          id: true,
          address: true,
        },
      },
    },
  });
}
