"use server";

import { auth } from "@/auth";
import prisma from "@/lib/db";

export async function getProjects() {
  const session = await auth();

  if (!session || !session.user.id) {
    return [];
  }

  try {
    const creator = session.user.id.toString();
    const projects = await prisma.project.findMany({
      where: {
        userId: creator,
      },
    });

    return projects || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
