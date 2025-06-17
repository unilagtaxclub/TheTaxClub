import { NavLink } from "react-router-dom";
import BlogStoryCard from "../../component/cards/BlogStoryCard";
import Container from "../../component/defaults/Container";
import Footer from "../../component/defaults/Footer";
import Header from "../../component/defaults/Header";
import { publicationItems } from "../../component/rawitems/PublicationItems";
import { Avatar, SearchIcon } from "../../component/svgs/Icons";
import { useEffect, useState } from "react";
import { SanityDocument } from "@sanity/client";
import { client } from "../../sanity/client";
import { POSTS_QUERY } from "../../component/rawitems/BlogItems";
import { urlFor } from "../../sanity/imageBuilder";

const Blog = () => {
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
    <Container>
      <div className="bg-[#f2f2f2] min-h-screen pt-10">
        <Header active="Blog" />
        <div className="w-[90vw] lg:w-[80vw] mx-auto mt-10 pb-10">
          <div className="lg:flex hidden items-center flex-wrap gap-6 mb-10 text-[14px]">
            {publicationItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.id}
                className={`${item.title === "Blog" ? "border-[#00689E] text-[#00689E] font-semibold" : "text-[#808080] border-[#808080]"} border rounded-full cursor-pointer py-3 px-6`}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
          {posts && posts.length > 0 && (
            <div
              className="w-[100%] lg:h-[644px] h-[296px] bg-cover bg-center text-white rounded-xl"
              style={{
                backgroundImage: `url(${urlFor(posts[0].image).width(1200).height(600).url()})`,
              }}
            >
              <div className="flex flex-col justify-end bg-black/50 lg:pb-20 lg:space-y-6 space-y-3 rounded-lg lg:px-16 pb-6 px-6 h-[100%]">
                <p className="lg:text-[24px] text-[16px] lg:w-[50%] w-[90%]">
                  {posts[0].title}
                </p>

                <div className="flex">
                  <NavLink
                    to={`/blog/${posts[0].slug.current}`}
                    className="px-10 py-2 font-semibold text-[#fff] bg-[#00689e] rounded-xl lg:block hidden"
                  >
                    Read article
                  </NavLink>
                </div>

                <div className="flex items-center lg:space-x-3 text-[12px] lg:text-[16px]">
                  <div className="lg:scale-100 scale-50">
                    <Avatar />
                  </div>
                  <div className="flex lg:justify-normal space-x-6 justify-between w-[100%]">
                    <p>{posts[0].authorName}</p>
                    <p>{new Date(posts[0].publishedAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center border border-[#ccc] bg-[#E5E5E5] space-x-3 rounded-full mt-10 lg:p-6 p-3 w-[100%]">
            <SearchIcon />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Articles"
              className="w-[100%] outline-none border-none"
            />
          </div>

          <div className="mt-10">
            <h2 className="lg:text-[30px] text-[20px] font-semibold">
              Featured Articles
            </h2>

            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-6 mt-10">
              {posts.map((item) => (
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

            <div className="flex items-center justify-center mt-10 lg:mb-[15vh]">
              <button className="border border-[#00689e] text-[#00689e] font-semibold text-[18px] py-3 px-10 rounded-lg">
                Load More
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pb-20">
          <div className="lg:w-[40%] w-[90%] rounded-2xl shadow-md bg-[#fff] p-10 space-y-6 flex items-center justify-center flex-col">
            <h2 className="lg:text-[24px] text-[20px] font-semibold">
              Follow us on Medium
            </h2>
            <p className="lg:text-[18px] lg:w-[60%] mx-auto text-center">
              Be the first to receive notifications when we drop a new article
            </p>
            <button className="px-10 py-2 font-semibold text-[#fff] bg-[#00689e] rounded-xl">
              Follow
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  );
};

export default Blog;
