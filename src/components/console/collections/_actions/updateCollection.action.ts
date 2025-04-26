"use server";
import { auth } from "@/auth";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export async function deleteCollection(id: string) {
  const session = await auth();
  if (!session || !session.user.id) {
    return;
  }
  const creator = session.user.id.toString();
  await prisma.collection.delete({
    where: { id: parseInt(id), creatorId: creator },
  });
  return { status: "success" };
}

export async function updateCollection(
  id: string,
  publickey: string,
  image: string,
  uri: string
) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  if (!session || !session.user.id) {
    redirect("/");
  }

  const creator = session.user.id.toString();
  const collection = await prisma.collection.update({
    where: { id: parseInt(id), creatorId: creator },
    data: {
      publickey,
      image,
      uri,
    },
  });
  return { status: "success", collection };
}
