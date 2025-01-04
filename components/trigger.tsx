import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button"
import { DialogTitle } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";

export const Trigger = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Plus/>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>
                    Add Goal
                </DialogTitle>
                <div className="flex flex-col space-y-5">
                    <div className="flex flex-row items-center space-x-5">
                        <span>Goal</span>
                        <Input/>
                    </div>
                    <div className="flex flex-row items-center space-x-5">
                        <span>Progress</span>
                        <Input/>
                    </div>
                    <Button className="my-4">
                        Add Goal
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}