"use server";
import { prisma } from "@/lib/prisma";

export async function getCreatedJobs(
  userId: string,
  page: number = 1,
  pageSize: number = 15
) {
  try {
    const skip = (page - 1) * pageSize;
    const jobs = await prisma.job.findMany({
      where: {
        userId: userId, // Add this line to filter by userId
      },
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
      skip,
      take: pageSize,
    });

    const totalJobs = await prisma.job.count({
      where: {
        userId: userId, // Add this line to count only the user's jobs
      },
    });
    const totalPages = Math.ceil(totalJobs / pageSize);

    return { success: true, jobs, totalPages, currentPage: page };
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return { success: false, error: "Failed to fetch jobs" };
  }
}
