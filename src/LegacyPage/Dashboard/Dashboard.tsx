"use client"

import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";

export default function Dashboard() {
  return (
    <div className="w-full h-[calc(100vh-82px)] bg-[#E8E8E8] flex overflow-hidden">
      <Sidebar />
      <div className="h-full flex-grow overflow-y-auto">
        <PostList />
      </div>
      
    </div>
  );
}
