"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import useSidebarStore from "@/store/sidebarStore";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Sidebar( { className }: { className?: string } ) {
  const { isSidebarMenuOpen, toggleSidebarMenu } = useSidebarStore();

  const router = useRouter();
  return (
    <div className={cn(
        className,
        "w-[280px] h-full bg-white border-r border-gray-200 flex-shrink-0 relative",
        "md:relative md:translate-x-0 transition-transform duration-300",
        isSidebarMenuOpen 
          ? "fixed top-0 left-0 z-50 translate-x-0" 
          : "fixed top-0 left-0 z-50 -translate-x-full md:translate-x-0"
      )}>
      <Button 
        variant="ghost" 
        size="sm"
        className="absolute top-4 right-4 p-2 hover:bg-gray-100 md:hidden" 
        onClick={toggleSidebarMenu}
      >
        <X size={16} />
      </Button>

      <div className="p-4 flex justify-center">
        <Button onClick={() => router.push("/add-post")}>Add Post</Button>
      </div>
      <Separator />
      <div className="">
        <Button variant="ghost" className="rounded-none w-full">
          Post List
        </Button>
      </div>
    </div>
  );
}
