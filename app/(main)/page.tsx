import { TablePage } from "@/components/table";
import { Trigger } from "@/components/trigger";

export default async function Home() {
    return (
        <div className="mx-auto flex-1 w-full flex flex-col items-center">
            <div className="flex items-center justify-center w-full px-[1.5rem] py-[1rem] md:py-[1.5rem]">
                <Trigger />
            </div>
            <TablePage/>
        </div>
    );
}