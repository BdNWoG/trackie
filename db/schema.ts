import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const goals = pgTable("goals", {
    userId: text("user_id").primaryKey(),
    user: text("user").notNull(),
    goal: text("goal").notNull(),
    progress: integer("progress").notNull(),
})