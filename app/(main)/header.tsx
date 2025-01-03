import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export const Header = () => {
    return (
        <header className='h-20 w-full border-b-2 border-slate-200 px-4'>
            <div className="lg:max-w-screen mx-auto flex items-center justify-between h-full">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/trackie.png" height={40} width={40} alt="Trackie"/>
                    <h1 className="text-2xl font-extrabold tracking-wide">
                        Trackie
                    </h1>
                </div>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal">
                        <Button size="lg">
                            Sign in
                        </Button>
                    </SignInButton>
                </SignedOut>
            </div>
        </header>
    );
}