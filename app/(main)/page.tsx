import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button"
import { DialogTitle } from "@radix-ui/react-dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { getUserGoals } from "@/db/queries";
import { Input } from "@/components/ui/input";

export default async function Home() {
    const goals = await getUserGoals();

    return (
        <div className="mx-auto flex-1 w-full flex flex-col items-center">
            <div className="flex items-center mx-auto w-full px-[1.5rem] justify-between py-[1.5rem]">
                <Dialog>
                    <DialogTrigger asChild>
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
            </div>
            
            <Table className="w-min justify-center items-start mx-auto">
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Select
                        </TableHead>
                        <TableHead>
                            Goal
                        </TableHead>
                        <TableHead>
                            Progress
                        </TableHead>
                        <TableHead>
                            Modify
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {goals?.map((goals) => (
                        <TableRow key={goals.goal}>
                            <TableCell>
                                <Checkbox/>
                            </TableCell>
                            <TableCell>
                                {goals.goal}
                            </TableCell>
                            <TableCell>
                                {goals.progress}
                            </TableCell>
                            <TableCell>
                                <Input>
                                </Input>
                                <Button>
                                    -
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}