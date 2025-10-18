import { Post, SortCategoryType } from "./PostList";

export const PostListDummyData: Post[] = [
  {
    title: "The Future of Web Development",
    author: "Abdul Ghaffar Sidik",
    summary:
      "Explore the key trends shaping the future of web development, including AI integration, WebAssembly, and the rise of edge computing.",
    category: "Tech",
    content: `Web development continues to evolve rapidly, driven by advancements in tools, frameworks, and technologies. In 2025, the focus has shifted towards more efficient performance and smarter client-side capabilities.
      
      1. AI in Development
      AI-powered coding assistants are now deeply integrated into most IDEs, helping developers write better code faster.
      
      2. WebAssembly Growth
      WebAssembly enables high-performance applications to run directly in the browser, bridging the gap between native and web apps.
      
      3. Edge Computing
      By processing data closer to the user, edge computing reduces latency and improves scalability, creating faster user experiences.
      
      The future of web development is bright, and developers who stay updated will continue to thrive in this fast-paced industry.`,
    createdAt: "2025-10-17T09:30:00Z",
  },
  {
    title: "Balancing Work and Life in the Remote Era",
    author: "Nadia Rahmawati",
    summary:
      "Remote work offers flexibility, but maintaining a healthy balance between career and personal life is more important than ever.",
    category: "Lifestyle",
    content: `The rise of remote work has transformed the way people approach productivity and well-being. While it offers unmatched flexibility, it also introduces new challenges in separating professional and personal boundaries.
      
      1. Setting Clear Boundaries
      Designate a workspace and define clear working hours to maintain focus during the day and rest afterward.
      
      2. Prioritizing Mental Health
      Take regular breaks, stay physically active, and communicate with colleagues to prevent burnout.
      
      3. Continuous Learning
      Use the time saved from commuting to improve your skills and stay adaptable in a rapidly changing job market.
      
      Remote work is here to stay, and balance is the key to long-term success and happiness.`,
    createdAt: "2025-10-15T14:45:00Z",
  },
  {
    title: "Building a Startup That Scales",
    author: "Kevin Hartono",
    summary:
      "A practical guide to designing systems, teams, and cultures that enable sustainable startup growth.",
    category: "Business",
    content: `Scaling a startup is more than just gaining users; it's about building a sustainable foundation for long-term growth.
      
      1. Focus on Product-Market Fit
      Ensure that your product solves a real problem and that your target users are clearly defined.
      
      2. Build Scalable Systems
      Invest early in infrastructure and automation to handle future growth without chaos.
      
      3. Hire for Culture and Adaptability
      A strong company culture helps maintain direction even as your team expands.
      
      4. Measure What Matters
      Use data-driven decisions to guide growth and avoid vanity metrics.
      
      Startups that scale successfully focus on alignment — between product, people, and purpose.`,
    createdAt: "2025-10-12T08:15:00Z",
  },
];

export const SortCategoryDummyData: SortCategoryType[] = [
  {
    label: "Latest",
    value: "latest",
  },
  {
    label: "Oldest",
    value: "oldest",
  },
  {
    label: "Title",
    value: "title",
  },
  {
    label: "Author",
    value: "author",
  },
  {
    label: "Category",
    value: "category",
  },
];
