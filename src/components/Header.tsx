"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { HouseIcon, Menu } from "lucide-react";
import useSidebarStore from "@/store/sidebarStore";

export default function Header() {
  const router = useRouter();
  const { toggleSidebarMenu } = useSidebarStore();

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 md:px-8 md:py-4 bg-white shadow-md border-b">
      <button
        onClick={toggleSidebarMenu}
        className="md:hidden p-2 rounded-md hover:bg-gray-100"
      >
        <Menu size={20} />
      </button>

      <div className="flex items-center hover:cursor-pointer">
        <Image
          src={"/icons/tulisebaricon/tulisebar-full-nb.png"}
          alt="logo"
          width={140}
          height={36}
          className="h-8 w-auto md:h-10 lg:h-12"
          priority
          onClick={() => router.push("/")}
        />
      </div>

      <Button
        variant="ghost"
        className="hidden md:flex items-center gap-2"
        onClick={() => router.push("/")}
      >
        <HouseIcon className="size-6" />
        <span className="text-lg font-medium">Home</span>
      </Button>

      <Button variant="ghost" className="gap-2">
        <Avatar>
          <AvatarImage src="/icons/user-solid-full.svg" alt="user" />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
        <span className="text-xs md:text-sm lg:text-base font-medium text-gray-800">
          Profile
        </span>
      </Button>
    </div>
  );
}
