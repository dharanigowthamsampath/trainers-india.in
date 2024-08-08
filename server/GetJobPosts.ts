"use server";

import { prisma } from "@/lib/prisma";

export async function getJobs() {
  try {
    const jobs = await prisma.job.findMany({
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { success: true, jobs };
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return { success: false, error: "Failed to fetch jobs" };
  }
}
