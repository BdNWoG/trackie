import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { getUserGoals } from "@/db/queries";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

export const TablePage = async () => {
    const goals = await getUserGoals();

    if (!goals || goals.length === 0) {
        return <div className="text-center mt-10">No goals found.</div>;
    }

    return (
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
    )
}