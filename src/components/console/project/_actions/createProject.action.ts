"use server";
import { auth } from "@/auth";
import prisma from "@/lib/db";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
export async function createProjectAction(formData: FormData) {
  const session = await auth();

  if (!session || !session.user.id) {
    redirect("/");
  }

  try {
    const creator = session.user.id.toString();

    const project = await prisma.project.create({
      data: {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        content: formData.get("content") as string,
        visibility: formData.get("visibility") as "PUBLIC" | "PRIVATE",
        userId: creator,
      },
    });

    const imageFile = formData.getAll("images") as File[];
    const supabase = createClient();
    const imageUrls = await Promise.all(
      imageFile.map(async (file) => {
        const { data } = await supabase.storage
          .from("project-images")
          .upload(`${project.id}/${uuidv4()}`, file);

        return data;
      })
    );

    await prisma.project.update({
      where: {
        id: project.id,
      },
      data: {
        images: imageUrls.filter((url) => !!url).map((url) => url.path),
      },
    });

    return {
      success: true,
      project,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
}
