"use server";

import { auth } from "@/auth";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export async function getCollection(projectId: string | undefined) {
  if (!projectId) {
    redirect("/console");
  }
  const session = await auth();

  if (!session) {
    return [];
  }

  const user = session.user;

  const result = await prisma.collection.findMany({
    where: {
      creatorId: user.id,
      publickey: {
        not: null,
      },
      projectId,
    },
    include: {
      NftMetadata: {
        select: {
          id: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return result || [];
}
