import { create } from "zustand";

export interface BlogPost {
  title: string | undefined;
  link: string | undefined;
  pubDate: string | number | Date;
  content: string | undefined;
  categories: string[] | undefined;
  slug: string | undefined;
  author: string | undefined;
  coverImage: string | undefined;
  description: string | undefined;
}

interface BlogStore {
  posts: BlogPost[];
  setPosts: (posts: BlogPost[]) => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));
