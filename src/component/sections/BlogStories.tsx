import BlogStoryCard from "../cards/BlogStoryCard";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { BlogPost, useBlogStore } from "../../store/blogStore";

const BlogStories = () => {
  const [loading, setLoading] = useState(true);
  const setPosts = useBlogStore((state) => state.setPosts);
  const posts = useBlogStore((state) => state.posts);

  const extractFirstImage = (html: string): string | null => {
    if (!html || typeof html !== "string") return null;

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const images = doc.querySelectorAll("img");

      for (const img of Array.from(images)) {
        const src = img.getAttribute("src");
        if (
          src &&
          src.startsWith("http") &&
          !src.includes("medium.com/_/stat")
        ) {
          return src;
        }
      }

      const urlRegex = /(https?:\/\/[^\s"']+\.(?:png|jpg|jpeg|webp|gif))/gi;
      const matches = html.match(urlRegex);

      if (matches) {
        const validMatch = matches.find(
          (url) => !url.includes("medium.com/_/stat"),
        );
        return validMatch || null;
      }

      return null;
    } catch (e) {
      console.error("❌ Error extracting image:", e);
      return null;
    }
  };

  useEffect(() => {
    const fetchFeed = async () => {
      setLoading(true);
      try {
        const rssFeedUrl = "https://medium.com/feed/@unilagtaxclub";
        const apiURL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssFeedUrl)}`;

        const { data } = await axios.get(apiURL);

        const withSlugs = data.items.map((item: BlogPost) => ({
          ...item,
          slug: item?.link?.split("/").pop(),
          coverImage: extractFirstImage(
            item.content || (item.description as unknown as string),
          ),
        }));

        setPosts(withSlugs);
      } catch (error) {
        console.error("Failed to fetch Medium posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  if (loading)
    return (
      <p className="p-4 min-h-screen flex items-center justify-center">
        Loading...
      </p>
    );
  if (!posts)
    return (
      <p className="p-4 min-h-screen flex items-center justify-center">
        No posts found.
      </p>
    );

  return (
    <div className="lg:mt-[10vh] mt-16 pb-[10vh] lg:w-[80vw] w-[90vw] mx-auto min-h-screen">
      <div className="flex flex-col lg:w-[50%]">
        <div className="flex">
          <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
            Medium Articles
          </h2>
        </div>
        <h2 className="lg:text-[40px] text-[24px] font-semibold">
          From Our Blog
        </h2>
        <p className="lg:text-[20px] text-[#3D3D3D]">
          Discover why the public trust us for insights, driven by our
          commitment to quality resources and member support.
        </p>
        <div className="w-[100%] flex lg:hidden">
          <NavLink
            to="/blog"
            className="py-3 px-10 w-[100%] mt-6 bg-[#00689E] text-[#fff] lg:text-[20px] flex justify-center font-semibold space-x-3 rounded-lg"
          >
            See more blog stories
          </NavLink>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-6 mt-10">
        {posts.slice(0, 3).map((item, idx) => (
          <BlogStoryCard
            key={idx}
            imgSrc={item.coverImage || "/assets/medium.png"}
            title={item.title}
            link={item.link}
            author={item.author || "Unilag Tax Club"}
            date={new Date(item.pubDate).toLocaleDateString()}
            tags={item.categories || []}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-10 lg:mb-[15vh]">
        <button className="border border-[#00689e] text-[#00689e] font-semibold text-[18px] py-3 px-10 rounded-lg">
          <NavLink to="/blog">Load More</NavLink>
        </button>
      </div>
    </div>
  );
};

export default BlogStories;
