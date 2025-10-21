import BlogViewCard from "@/components/BlogViewCard";
import { useFormStore } from "@/store/formStore";
import { BlogPost } from "@/type/PostList";
import { useParams } from "next/navigation";
import Sidebar from "../Dashboard/components/Sidebar";

export default function BlogViewPage() {

    const params = useParams();
    const blogId = params.id as string;

    const blogPostData = useFormStore.getState().blogPosts.find((post) => post.id === parseInt(blogId));
    return (
        <div className="">
            <Sidebar className="md:hidden"/>
            <BlogViewCard blogPost={blogPostData as BlogPost} />
        </div>
    );
}