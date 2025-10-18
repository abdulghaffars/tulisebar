// src/LegacyPage/AddPost/components/Step4.tsx
import { useFormStore } from "@/store/formStore";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Step4() {
  const { formData, addBlogPost, setStepVisible } = useFormStore();
  const router = useRouter();

  const handleSubmit = () => {
    const result = addBlogPost();
    if (result) {
      toast.success("Blog post added successfully");
      router.push("/");
    } else {
      toast.error("Failed to add blog post");
    }
  };

  return (
    <div className="flex flex-col gap-6 pb-4">
      <div>
        <h1 className="text-2xl font-bold mb-2">Review & Submit</h1>
        <p className="text-gray-600">
          Please review your blog post before submitting
        </p>
      </div>

      <Separator />

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Blog Title</h3>
        <p className="text-lg">{formData.blogTitle}</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Author</h3>
        <p className="text-lg">{formData.authorName}</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Category</h3>
        <p className="text-lg">{formData.blogCategory}</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Summary</h3>
        <p className="text-base whitespace-pre-wrap">{formData.blogSummary}</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Content</h3>
        <p className="text-base whitespace-pre-wrap">{formData.blogContent}</p>
      </div>

      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          onClick={() => setStepVisible(3)}
          className="w-fit"
        >
          Back
        </Button>
        <Button
          onClick={() => window.open("/add-post/preview")}
          className="w-fit"
        >
          Preview
        </Button>
        <Button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white px-8"
        >
          Submit Blog
        </Button>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
