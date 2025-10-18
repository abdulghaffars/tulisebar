import AddPostForm from "./AddPostForm";
import AddPostSidebar from "./AddPostSidebar";


export default function AddPostPage() {
  return (
    <div className="w-full h-[calc(100vh-82px)] bg-[#E8E8E8] flex overflow-hidden">
      <AddPostSidebar />
      <div className="flex-1 min-w-0 flex-grow overflow-y-auto">
        <AddPostForm />
      </div>
    </div>
  );
}
  