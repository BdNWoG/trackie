"use client";

import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import db from "@/db/drizzle";
import { goals } from "@/db/schema";

export const Trigger = () => {
    const [goal, setGoal] = useState("");
    const [progress, setProgress] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { userId } = useAuth(); 

    const handleAddGoal = async () => {
        if (!userId) {
            alert("User not authenticated");
            return;
        }

        try {
            await db.insert(goals).values({
                userId,
                goal,
                progress: parseInt(progress, 10),
            });

            setGoal("");
            setProgress("");
            setIsDialogOpen(false);
            alert("Goal added successfully!");
        } catch (error) {
            console.error(error);
            alert("Error adding goal");
        }
    };

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger className="bg-black text-white p-2 rounded-full">
                <Plus/>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>
                    Add Goal
                </DialogTitle>
                <div className="flex flex-col space-y-5">
                    <div className="flex flex-row items-center space-x-5">
                        <span>Goal</span>
                        <Input value={goal} onChange={(e) => setGoal(e.target.value)}/>
                    </div>
                    <div className="flex flex-row items-center space-x-5">
                        <span>Progress</span>
                        <Input value={progress} onChange={(e) => setProgress(e.target.value)} type="number"/>
                    </div>
                    <Button className="my-4" onClick={handleAddGoal}>
                        Add Goal
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}