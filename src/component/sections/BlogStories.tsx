import BlogStoryCard from "../cards/BlogStoryCard";
import { useEffect, useState } from "react";
import { SanityDocument } from "@sanity/client";
import { client } from "../../sanity/client";
import { POSTS_QUERY } from "../rawitems/BlogQueries";
import { urlFor } from "../../sanity/imageBuilder";

const BlogStories = () => {
  const [posts, setPosts] = useState<SanityDocument[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch<SanityDocument[]>(POSTS_QUERY)
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!posts) return <p>No posts found.</p>;

  return (
    <div className="lg:mt-[10vh] mt-16 pb-[10vh] lg:w-[80vw] w-[90vw] mx-auto">
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
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-6 mt-10">
        {posts.slice(0, 3).map((item) => (
          <BlogStoryCard
            key={item.id}
            imgSrc={urlFor(item.image).width(800).height(400).url()}
            title={item.title}
            slug={item.slug.current}
            authorName={item.authorName}
            date={new Date(item.publishedAt).toLocaleDateString()}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogStories;
