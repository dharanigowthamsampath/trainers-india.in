// "use server";
// import { prisma } from "@/lib/prisma";

// export async function getJobs(page: number = 1, pageSize: number = 15) {
//   try {
//     const skip = (page - 1) * pageSize;
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
//       skip,
//       take: pageSize,
//     });

//     const totalJobs = await prisma.job.count();
//     const totalPages = Math.ceil(totalJobs / pageSize);

//     return { success: true, jobs, totalPages, currentPage: page };
//   } catch (error) {
//     console.error("Failed to fetch jobs:", error);
//     return { success: false, error: "Failed to fetch jobs" };
//   }
// }

"use server";

import { prisma } from "@/lib/prisma";

export type Job = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  userId: string;
  isHiring: boolean;
  user: {
    name: string | null;
  };
};

type GetJobsResult = {
  success: boolean;
  jobs?: Job[];
  totalPages?: number;
  currentPage?: number;
  error?: string;
};

export async function getJobs(
  page: number = 1,
  pageSize: number = 15
): Promise<GetJobsResult> {
  try {
    // Ensure page and pageSize are valid
    page = Math.max(1, page);
    pageSize = Math.max(1, Math.min(100, pageSize)); // Limit pageSize to a reasonable range

    const skip = (page - 1) * pageSize;

    // Fetch jobs
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

    // Count total jobs for pagination
    const totalJobs = await prisma.job.count();
    const totalPages = Math.ceil(totalJobs / pageSize);

    // Map the jobs to the expected format
    const formattedJobs: Job[] = jobs.map((job) => ({
      id: job.id,
      title: job.title,
      content: job.content,
      createdAt: job.createdAt,
      userId: job.userId,
      isHiring: job.isHiring,
      user: {
        name: job.user.name,
      },
    }));

    return {
      success: true,
      jobs: formattedJobs,
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return {
      success: false,
      error: "Failed to fetch jobs. Please try again later.",
    };
  }
}

// Optional: Function to get a single job by ID
export async function getJobById(
  id: string
): Promise<{ success: boolean; job?: Job; error?: string }> {
  try {
    const job = await prisma.job.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!job) {
      return { success: false, error: "Job not found" };
    }

    const formattedJob: Job = {
      id: job.id,
      title: job.title,
      content: job.content,
      createdAt: job.createdAt,
      userId: job.userId,
      isHiring: job.isHiring,
      user: {
        name: job.user.name,
      },
    };

    return { success: true, job: formattedJob };
  } catch (error) {
    console.error("Failed to fetch job:", error);
    return {
      success: false,
      error: "Failed to fetch job. Please try again later.",
    };
  }
}
