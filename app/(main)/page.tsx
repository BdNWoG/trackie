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
                            <Button className="justify-between my-4">
                                Add Goal
                            </Button>
                        </DialogTitle>
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