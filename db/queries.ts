import { auth } from "@clerk/nextjs/server";
import { cache } from "react";
import db from "./drizzle";
import { eq } from "drizzle-orm";
import { goals } from "./schema";

export const getUserGoals = cache(async() => {
    const { userId } = await auth();

    if (!userId) {
        console.error("No userId found");
        return null;
    }

    try {
        const data = await db.query.goals.findMany({
            where: eq(goals.userId, userId),
        });
        return data;
    } catch (error) {
        console.error("Error fetching goals:", error);
        return null;
    }
})