"use client"

import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";

export default function Dashboard() {
  return (
    <div className="w-full h-full bg-[#E8E8E8] flex">
      <Sidebar />
      <PostList />
    </div>
  );
}
