import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    const isExistingUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });
    if (isExistingUser) {
      return isExistingUser;
    }
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: `${user.firstName} ${user.lastName}`,
        username: user.username,
        imageUrl: user.imageUrl,
        lastLoginAt: new Date(user.lastSignInAt || Date.now()),
        lastActiveAt: new Date(user.lastActiveAt || Date.now()),
      },
    });
    return newUser;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};
