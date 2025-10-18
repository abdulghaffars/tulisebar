# 📝 Tulisebar - Blog Management Application

A modern blog management application built with Next.js, featuring a multi-step form for creating blog posts with real-time preview and persistent storage.

## ✨ Features

- **📝 Multi-Step Blog Creation**: Intuitive 4-step form for creating blog posts
- **👀 Real-time Preview**: Preview your blog post in a new tab before publishing
- **💾 Persistent Storage**: All data is saved to localStorage and persists across sessions
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🎨 Modern UI**: Clean and professional interface using Tailwind CSS
- **🔄 State Management**: Powered by Zustand for efficient state management
- **📊 Dashboard**: View and manage all your blog posts
- **🔍 Sorting & Filtering**: Sort posts by date, title, author, or category

## 🚀 Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **UI Components**: Shadcn/ui
- **Icons**: Lucide (modern open-source icon set)
- **Notifications**: SweetAlert2 (Beautiful alerts and notifications)
- **Date Handling**: Date-fns


## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdulghaffars/tulisebar.git
   cd tulisebar
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### Creating a Blog Post

1. **Navigate to Add Post**: Click the "Add Post" button from the dashboard
2. **Step 1 - Blog Meta Data**: Fill in the blog title and author name
3. **Step 2 - Blog Summary & Category**: Add a summary and select a category
4. **Step 3 - Blog Content**: Write your blog content
5. **Step 4 - Review & Submit**: Review your post and submit or preview

### Features Overview

- **Multi-Step Form**: Each step validates required fields before proceeding
- **Auto-Save**: Form data is automatically saved to localStorage
- **Preview Mode**: Preview your blog post in a new tab
- **Dashboard**: View all your published blog posts
- **Sorting**: Sort posts by latest, oldest, title, author, or category

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── add-post/          # Add post pages
│   ├── blog/[id]/         # Dynamic blog view pages
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/               # Shadcn/ui components
│   └── BlogViewCard.tsx  # Blog display component
├── LegacyPage/           # Page components
│   ├── AddPost/          # Add post form components
│   ├── BlogPreview/      # Blog preview component
│   ├── BlogView/         # Blog view component
│   └── Dashboard/        # Dashboard components
├── store/                # Zustand store
│   └── formStore.ts      # Form state management
└── type/                 # TypeScript type definitions
    ├── AddForm.ts        # Form types
    ├── DummyData.ts      # Sample data
    └── PostList.ts       # Blog post types
```

## 🔧 Key Components

- **AddPostForm**: Multi-step form for creating blog posts
- **AddPostSidebar**: Progress indicator and navigation
- **BlogPreview**: Real-time preview of blog posts
- **Dashboard**: Main dashboard with post management
- **PostCard**: Individual blog post display component

## 💾 Data Storage

- **Local Storage**: All blog posts and form data are stored in browser's localStorage
- **Auto-Persistence**: Data persists across browser sessions
- **Form Recovery**: Unfinished forms are automatically restored

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Mode Ready**: Built with modern design principles
- **Smooth Animations**: Subtle transitions and hover effects
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **SweetAlert2 Notifications**: Beautiful alerts and user feedback

## 👨‍💻 Author

**Abdul Ghaffar Sidik**
- GitHub: [@abdulghaffars](https://github.com/abdulghaffars)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Zustand](https://zustand-demo.pmnd.rs/) for the lightweight state management

---