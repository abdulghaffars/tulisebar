import { SortCategoryDummyData } from "@/type/DummyData";
import PostCard from "./PostCard";
import SortDropDownButton from "./SortDropDownButton";
import { useMemo, useState } from "react";
import { BlogPost, SortCategoryType } from "@/type/PostList";
import { useFormStore } from "@/store/formStore";
import { useRouter } from "next/navigation";

export default function PostList() {
  const [selectedCategory, setSelectedCategory] = useState<SortCategoryType>(
    SortCategoryDummyData[0]
  );
  const { blogPosts } = useFormStore();

  const sortedPostList = useMemo(() => {
    const posts = [...blogPosts];
    switch (selectedCategory.value) {
      case "latest":
        return posts.sort(
          (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)
        );
      case "oldest":
        return posts.sort(
          (a, b) => +new Date(a.createdAt) - +new Date(b.createdAt)
        );
      case "title":
        return posts.sort((a, b) =>
          a.blogTitle.localeCompare(b.blogTitle, undefined, { sensitivity: "base" })
        );
      case "author":
        return posts.sort((a, b) =>
          a.authorName.localeCompare(b.authorName, undefined, { sensitivity: "base" })
        );
      case "category":
        return posts.sort((a, b) =>
          a.blogCategory.localeCompare(b.blogCategory, undefined, {
            sensitivity: "base",
          })
        );
      default:
        return posts;
    }
  }, [selectedCategory, blogPosts]);

  const DashboardContent = blogPosts.length > 0 ? <BlogPostList sortedPostList={sortedPostList} /> : <EmptyBlogCard />;

  return (
    <div className="w-[calc(100%-296px)] h-full flex flex-col p-4 gap-4">
      <SortDropDownButton
        categories={SortCategoryDummyData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="w-full h-full flex flex-col">
        {DashboardContent}
      </div>
    </div>
  );
}

function BlogPostList({ sortedPostList }: { sortedPostList: BlogPost[] }) {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      {sortedPostList.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}

function EmptyBlogCard() {

  const router = useRouter();
  return (
    <div onClick={() => router.push("/add-post")} className="flex flex-col items-center justify-center w-full h-48 bg-white border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition">
      <span className="text-3xl mb-2 text-gray-400">+</span>
      <span className="font-medium text-gray-500">Add New Blog</span>
    </div>
  );
}
