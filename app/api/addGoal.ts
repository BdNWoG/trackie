"use server";

import db from "@/db/drizzle";
import { goals } from "@/db/schema";

type AddGoalParams = {
    userId: string;
    goal: string;
    progress: number;
};

export async function addGoal({ userId, goal, progress }: AddGoalParams) {
    if (!userId || !goal || isNaN(progress)) {
        throw new Error("Invalid input");
    }

    await db.insert(goals).values({
        userId,
        goal,
        progress,
    });
}
