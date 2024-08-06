"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  if (loggedInUser) {
    return loggedInUser;
  }

  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      emailId: user.emailAddresses[0].emailAddress,
      name: user.fullName,
      imageUrl: user.imageUrl,
    },
  });

  return newUser;
};
