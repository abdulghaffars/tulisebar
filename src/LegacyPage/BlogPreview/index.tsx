import { useFormStore } from "@/store/formStore";
import { Button } from "@/components/ui/button";
import BlogViewCard from "@/components/BlogViewCard";

export default function BlogPreviewPage() {
    const { formData } = useFormStore();

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold text-gray-900">Blog Preview</h1>
                        <Button 
                            variant="outline" 
                            onClick={() => window.close()}
                        >
                            Close Preview
                        </Button>
                    </div>
                </div>
            </div>

                <div className="max-w-4xl mx-auto px-4 py-8">
                <BlogViewCard blogPost={formData} />
            </div>
        </div>
    );
}