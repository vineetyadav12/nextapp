"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const title = formData.get("title")?.toString();
  const content = formData.get("content")?.toString();

  if (!title || !content) {
    throw new Error("Title and content are required");
  }

  await prisma.post.create({
    data: {
      title,
      content,
    },
  });

  revalidatePath("/posts");
}
