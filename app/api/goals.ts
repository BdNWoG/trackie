import { NextApiRequest, NextApiResponse } from "next";
import db from "@/db/drizzle";
import { goals } from "@/db/schema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { userId, goal, progress } = req.body;

        if (!userId || !goal || typeof progress !== "number") {
            return res.status(400).json({ error: "Invalid input" });
        }

        try {
            await db.insert(goals).values({ userId, goal, progress });

            return res.status(201).json({ message: "Goal added successfully" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Failed to add goal" });
        }
    }

    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}
