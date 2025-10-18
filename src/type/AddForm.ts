export interface CategoryOption {
    label: string;
    value: string;
}

export interface FormAddPostData {
  blogTitle: string;
  authorName: string;
  blogSummary: string;
  blogCategory: string;
  blogContent: string;
}

export const CategoryOptions: CategoryOption[] = [
    {
      label: "Technology",
      value: "technology",
    },
    {
      label: "Science",
      value: "science",
    },
    {
      label: "Health",
      value: "health",
    },
    {
      label: "Business",
      value: "business",
    },
    {
      label: "Education",
      value: "education",
    },
    {
      label: "Entertainment",
      value: "entertainment",
    },  
    {
      label: "Other",
      value: "other",
    },
  ];