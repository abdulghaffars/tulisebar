import { FormAddPostData } from '@/type/AddForm';
import { BlogPost } from '@/type/PostList';
import Swal from 'sweetalert2';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';



interface FormStore {
  currentStep: number;
  stepVisible: number;
  formData: FormAddPostData;
  blogPosts: BlogPost[];
  setStepVisible: (step: number) => void;
  setCurrentStep: (step: number) => void;
  updateFormData: (data: Partial<FormAddPostData>) => void;
  resetForm: () => void;
  addBlogPost: () => boolean;
  getBlogPosts: () => BlogPost[];
  clearBlogPosts: () => void;
}

export const useFormStore = create<FormStore>()(
  persist(
    (set, get) => ({
      currentStep: 1,
      stepVisible: 1,
      formData: {
        blogTitle: '',
        authorName: '',
        blogSummary: '',
        blogCategory: '',
        blogContent: '',
      },
      blogPosts: [],
      setStepVisible: (step) => {
        set({ stepVisible: step });
        console.log('stepVisible', step);
      },
      setCurrentStep: (step) => {
        set({ currentStep: step });
        console.log('currentStep', step);
      },
      updateFormData: (data) => set((state) => {
        const newFormData = { ...state.formData, ...data };
        
        let newCurrentStep = 1;
        
        if (newFormData.blogTitle && newFormData.authorName) {
          newCurrentStep = 2;
        }
        if (newFormData.blogTitle && newFormData.authorName && 
            newFormData.blogSummary && newFormData.blogCategory) {
          newCurrentStep = 3;
        }
        if (newFormData.blogTitle && newFormData.authorName && 
            newFormData.blogSummary && newFormData.blogCategory && 
            newFormData.blogContent) {
          newCurrentStep = 4;
        }
        
        return { 
          formData: newFormData,
          currentStep: newCurrentStep
        };
      }),
      resetForm: () => set({ 
        currentStep: 1,
        stepVisible: 1,
        formData: {
          blogTitle: '',
          authorName: '',
          blogSummary: '',
          blogCategory: '',
          blogContent: '',
        }
      }),
      addBlogPost: () => {
        const state = get();
        const { formData, blogPosts } = state;
        
        const newId = blogPosts.length > 0 
          ? Math.max(...blogPosts.map(post => post.id)) + 1 
          : 1;
        
        if (!formData.blogTitle || !formData.authorName || !formData.blogSummary || 
            !formData.blogCategory || !formData.blogContent) {
          Swal.fire({
            title: 'Error!',
            text: 'All fields are required!',
            icon: 'error',
            confirmButtonText: 'OK'
          });
          return false;
        }
        
        const newPost: BlogPost = {
          id: newId,
          blogTitle: formData.blogTitle,
          authorName: formData.authorName,
          blogSummary: formData.blogSummary,
          blogCategory: formData.blogCategory,
          blogContent: formData.blogContent,
          createdAt: new Date().toISOString(),
        };
        
        set((state) => ({
          blogPosts: [...state.blogPosts, newPost],
          currentStep: 1,
          stepVisible: 1,
          formData: {
            blogTitle: '',
            authorName: '',
            blogSummary: '',
            blogCategory: '',
            blogContent: '',
          }
        }));
        
        console.log('Blog post saved with ID:', newId);
        alert(`Blog post berhasil disimpan dengan ID: ${newId}`);
        return true;
      },

      getBlogPosts: () => {
        return get().blogPosts;
      },

      clearBlogPosts: () => {
        set({ blogPosts: [] });
        console.log('All blog posts cleared');
      }
    }),
    {
      name: 'blog-storage',
    }
  )
);