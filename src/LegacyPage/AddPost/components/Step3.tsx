import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useFormStore } from "@/store/formStore";

export default function Step3() {
  const { formData, updateFormData, setStepVisible } = useFormStore();
  const handleBlogContentChange = (value: string) => {
    updateFormData({ blogContent: value });
  };
  const handleSubmit = () => {
    setStepVisible(4);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1>Blog Content</h1>
      <Separator />
      <div className="flex flex-col gap-3">
        <Label htmlFor="blog-content">Blog Content</Label>
        <Textarea
          placeholder="Enter Blog Content"
          value={formData.blogContent}
          className="resize-y"
          onChange={(e) => handleBlogContentChange(e.target.value)}
        />
      </div>
      <p className="text-sm text-gray-500">
        Write the content of your blog post. This will be the main content of
        your blog post.
      </p>
      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          onClick={() => setStepVisible(2)}
          className="w-fit"
        >
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={!formData.blogContent}
          className="w-fit"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
