import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const goals = pgTable("goals", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    goal: text("goal").notNull(),
    progress: integer("progress").notNull(),
})