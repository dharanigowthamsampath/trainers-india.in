"use server";

import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Define a schema for job post validation
const jobPostSchema = z.object({
  title: z.string().min(10).max(100),
  content: z.string().min(10).max(10000),
});

export async function AddJobPost(formData: FormData) {
  const clerkUser = await currentUser();

  if (!clerkUser || !clerkUser.id) {
    throw new Error("User not authenticated");
  }

  const jobPostTitle = formData.get("title");
  const jobPostDescription = formData.get("content");

  try {
    // Validate the form data
    const validatedData = jobPostSchema.parse({
      content: jobPostDescription,
      title: jobPostTitle,
    });

    // If validation passes, create the job post
    await prisma.job.create({
      data: {
        title: validatedData.title,
        content: validatedData.content,
        userId: clerkUser.id,
      },
    });

    revalidatePath("/");
    return { success: true, message: "Job post created successfully" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // If it's a validation error, return the error messages
      return {
        success: false,
        errors: error.errors.map((e) => ({
          field: e.path[0],
          message: e.message,
        })),
      };
    }
    // For any other type of error
    console.error("Error creating job post:", error);
    return { success: false, message: "An unexpected error occurred" };
  }
}
