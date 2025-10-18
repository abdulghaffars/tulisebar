"use client"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

export default function Sidebar() {
    const router = useRouter();
    return (
        <div className="sticky top-0 self-start w-[280px] h-[calc(100vh-100px)] overflow-y-auto bg-white">
            <div className="p-4 flex justify-center">
            <Button onClick={() => router.push("/add-post")}>
                Add Post
            </Button>
            </div>
            <Separator />
            <div className="">
                <Button variant="ghost" className="rounded-none w-full">Post List</Button>
            </div>
        </div>
    );
}