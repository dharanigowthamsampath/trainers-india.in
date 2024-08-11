// "use server";

// import { prisma } from "@/lib/prisma";

// export async function getJobs() {
//   try {
//     const jobs = await prisma.job.findMany({
//       include: {
//         user: {
//           select: {
//             name: true,
//           },
//         },
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     return { success: true, jobs };
//   } catch (error) {
//     console.error("Failed to fetch jobs:", error);
//     return { success: false, error: "Failed to fetch jobs" };
//   }
// }

"use server";
import { prisma } from "@/lib/prisma";

export async function getJobs(page: number = 1, pageSize: number = 15) {
  try {
    const skip = (page - 1) * pageSize;
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
      skip,
      take: pageSize,
    });

    const totalJobs = await prisma.job.count();
    const totalPages = Math.ceil(totalJobs / pageSize);

    return { success: true, jobs, totalPages, currentPage: page };
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return { success: false, error: "Failed to fetch jobs" };
  }
}
