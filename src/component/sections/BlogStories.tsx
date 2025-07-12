import BlogStoryCard from "../cards/BlogStoryCard";
import { useEffect, useState } from "react";
import { urlFor } from "../../sanity/imageBuilder";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useBlogStore } from "../../store/blogStore";

const BlogStories = () => {
  const [loading, setLoading] = useState(true);
  const setPosts = useBlogStore((state) => state.setPosts);
  const posts = useBlogStore((state) => state.posts);

  useEffect(() => {
    const fetchFeed = async () => {
      setLoading(true);
      try {
        const rssFeedUrl = "https://medium.com/feed/@towardsdatascience";
        const apiURL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssFeedUrl)}`;

        const { data } = await axios.get(apiURL);
        console.log("data", data);
        const withSlugs = data.items.map((item) => ({
          ...item,
          slug: item?.link?.split("/").pop(),
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

  console.log(posts);
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
        {/* {posts.slice(0, 3).map((item, idx) => (
                                        <BlogStoryCard
                                          key={idx}
                                          imgSrc={urlFor(item.image).width(800).height(400).url()}
                                          title={item.title}
                                          slug={item.slug.current}
                                          authorName={item.authorName}
                                          date={new Date(item.publishedAt).toLocaleDateString()}
                                          tags={item.tags}
                                        />
                                      ))} */}
      </div>
    </div>
  );
};

export default BlogStories;
