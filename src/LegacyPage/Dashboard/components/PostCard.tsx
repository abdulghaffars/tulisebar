import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { BlogPost } from "@/type/PostList";
import { useRouter } from "next/navigation";

export default function PostCard({ post }: { post: BlogPost }) {
  
  const router = useRouter();
  return (
    <div
          className="w-full h-full bg-white rounded-lg p-4 flex flex-col transition-shadow hover:shadow-sm"
          onClick={() => router.push(`/blog/${post.id}`)}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{post.blogTitle}</h1>
            <p className="text-sm text-gray-500">{post.authorName}</p>
          </div>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">
            {post.blogSummary}
          </p>
          <Badge variant="outline" className="w-fit mt-3">
            {post.blogCategory}
          </Badge>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            {formatDate(new Date(post.createdAt))}
          </p>
        </div>
  );
}