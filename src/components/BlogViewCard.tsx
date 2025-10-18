import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/type/PostList";
import { FormAddPostData } from "@/type/AddForm";
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/utils";

export default function BlogViewCard({
  blogPost,
}: {
  blogPost: BlogPost | FormAddPostData;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-sm border p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {blogPost.blogTitle}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">
                    {blogPost.authorName.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {blogPost.authorName}
                  </p>
                  <p className="text-sm text-gray-500">
                    {(blogPost && "createdAt" in blogPost && blogPost.createdAt
                      ? formatDate(new Date(blogPost.createdAt))
                      : formatDate(new Date())
                    )}
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="ml-auto">
                {blogPost.blogCategory}
              </Badge>
            </div>

            <Separator />
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
              {blogPost.blogContent}
            </div>
          </div>
          <footer className="mt-12 pt-8 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline">{blogPost.blogCategory}</Badge>
              </div>
              <p className="text-sm text-gray-500">
                Published on {new Date().toLocaleDateString("id-ID")}
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
