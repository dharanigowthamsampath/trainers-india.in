// server/GetJobPosts.ts
"use server";

import { prisma } from "@/lib/prisma";

export async function GetJobPosts() {
  try {
    const posts = await prisma.job.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: {
          select: {
            name: true,
            imageUrl: true,
          },
        },
      },
    });

    return { success: true, posts };
  } catch (error) {
    console.error("Error fetching job posts:", error);
    return { success: false, message: "Failed to fetch job posts" };
  }
}
