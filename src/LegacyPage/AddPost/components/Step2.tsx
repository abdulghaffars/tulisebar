import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useFormStore } from "@/store/formStore";
import { CategoryOption, CategoryOptions } from "@/type/AddForm";

export default function Step2() {
  const { formData, updateFormData, setStepVisible } = useFormStore();

  const handleBlogCategoryChange = (value: string) => {
    updateFormData({ blogCategory: value });
  };
  const handleBlogSummaryChange = (value: string) => {
    updateFormData({ blogSummary: value });
  };
  const handleSubmit = () => {
    setStepVisible(3);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1>Blog Summary</h1>
      <Separator />
      <div className="flex flex-col gap-3">
        <Label htmlFor="blog-category">Blog Category</Label>
        <Select
          onValueChange={(value) => handleBlogCategoryChange(value)}
          value={formData.blogCategory}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {CategoryOptions.map((option: CategoryOption) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Label htmlFor="blog-summary">Blog Summary</Label>
          <Textarea
            placeholder="Enter Blog Summary"
            value={formData.blogSummary}
            className="resize-y"
            onChange={(e) => handleBlogSummaryChange(e.target.value)}
          />
        </div>
        <p className="text-sm text-gray-500">
          Write a brief summary of your blog post. This will help readers
          understand what your post is about.
        </p>
      </div>
      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          onClick={() => setStepVisible(1)}
          className="w-fit"
        >
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={!formData.blogCategory || !formData.blogSummary}
          className="w-fit"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
