"use server";

import prisma from "@/lib/db";

export async function getNftMetadata(id: number) {
  return prisma.nftMetadata.findUnique({
    where: {
      id,
    },
  });
}
