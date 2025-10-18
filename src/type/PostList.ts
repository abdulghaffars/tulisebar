export interface Post {
    title: string;
    author: string;
    summary: string;
    category: string; 
    content: string;
    createdAt: string;
  }

  export interface BlogPost {
    id: number;
    blogTitle: string;
    authorName: string;
    blogSummary: string;
    blogCategory: string;
    blogContent: string;
    createdAt: string;
  }
  
export interface SortCategoryType {
    label: string;
    value: string;
  }