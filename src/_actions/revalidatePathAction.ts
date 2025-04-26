"use server";

import { revalidatePath } from "next/cache";

async function revalidatePathAction(
  originalPath: string,
  type?: "layout" | "page"
) {
  revalidatePath(originalPath, type);
}

export default revalidatePathAction;
