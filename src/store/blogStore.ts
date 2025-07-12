import { create } from "zustand";

interface BlogPost {
  title: string | undefined;
  link: string | undefined;
  pubDate: string | undefined;
  content: string | undefined;
  slug: string | undefined;
}

interface BlogStore {
  posts: BlogPost[];
  setPosts: (posts: BlogPost[]) => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));
