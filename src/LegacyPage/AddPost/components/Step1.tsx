import CustomInput from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useFormStore } from "@/store/formStore";

export default function Step1() {
  const { formData, updateFormData, setStepVisible } = useFormStore();

  const handleBlogTitleChange = (value: string) => {
    updateFormData({ blogTitle: value });
  };
  const handleAuthorNameChange = (value: string) => {
    updateFormData({ authorName: value });
  };

  const handleSubmit = () => {
    setStepVisible(2);
  };
  const InputLabel = [
    {
      label: "Blog Title",
      type: "text",
      id: "blog-title",
      placeholder: "Enter Blog Title",
      value: formData.blogTitle || undefined,
      onChange: handleBlogTitleChange,
    },
    {
      label: "Author Name",
      type: "text",
      id: "author-name",
      placeholder: "Enter Author Name",
      value: formData.authorName || undefined,
      onChange: handleAuthorNameChange,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <h1>Blog Meta Data</h1>
      <Separator />
      <div className="flex flex-col gap-4">
        {InputLabel.map(
          (input: {
            label: string;
            type: string;
            id: string;
            placeholder: string;
            value: string | undefined;
            onChange: (value: string) => void;
          }) => (
            <CustomInput
              key={input.id}
              label={input.label}
              type={input.type}
              id={input.id}
              placeholder={input.placeholder}
              value={input.value || ""}
              onChange={input.onChange}
            />
          )
        )}
      </div>
      <div className="flex justify-end gap-2">
      <Button
        onClick={handleSubmit}
        disabled={!formData.blogTitle || !formData.authorName}
        className="w-fit"
      >
          Next
        </Button>
      </div>
    </div>
  );
}
