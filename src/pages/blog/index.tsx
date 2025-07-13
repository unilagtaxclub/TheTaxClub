import { NavLink } from "react-router-dom";
import BlogStoryCard from "../../component/cards/BlogStoryCard";
import Container from "../../component/defaults/Container";
import Footer from "../../component/defaults/Footer";
import Header from "../../component/defaults/Header";
import { publicationItems } from "../../component/rawitems/PublicationItems";
import { Avatar, SearchIcon } from "../../component/svgs/Icons";
import { useEffect, useState } from "react";
import { BlogPost, useBlogStore } from "../../store/blogStore";
import axios from "axios";

const Blog = () => {
  const setPosts = useBlogStore((state) => state.setPosts);
  const posts = useBlogStore((state) => state.posts);
  const [loading, setLoading] = useState(true);

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
          slug: item.link?.split("/").pop() ?? "",
          coverImage: extractFirstImage(item.content || item.description || ""),
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

  if (!posts || posts.length === 0)
    return (
      <p className="p-4 min-h-screen flex items-center justify-center">
        No posts found.
      </p>
    );

  return (
    <Container>
      <div className="bg-[#f2f2f2] min-h-screen lg:pt-10 pt-4">
        <Header active="Blog" />
        <div className="w-[90vw] lg:w-[80vw] mx-auto lg:mt-10 mt-4 pb-10">
          <div className="lg:flex hidden items-center flex-wrap gap-6 mb-10 text-[14px]">
            {publicationItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.id}
                className={`${
                  item.title === "Blog"
                    ? "border-[#00689E] text-[#00689E] font-semibold"
                    : "text-[#808080] border-[#808080]"
                } border rounded-full cursor-pointer py-3 px-6`}
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          {posts[0]?.coverImage && (
            <div
              className="w-full lg:h-[644px] h-[296px] bg-cover bg-center text-white rounded-xl"
              style={{
                backgroundImage: `url(${posts[0].coverImage})`,
              }}
            >
              <div className="flex flex-col justify-end bg-black/50 lg:pb-20 lg:space-y-6 space-y-3 rounded-lg lg:px-16 pb-6 px-6 h-full">
                <p className="lg:text-[24px] text-[16px] lg:w-[50%] w-[90%]">
                  {posts[0].title}
                </p>
                <div className="flex">
                  <NavLink
                    to={`/blog/${posts[0].slug}`}
                    className="px-10 py-2 font-semibold text-white bg-[#00689e] rounded-xl lg:block hidden"
                  >
                    Read article
                  </NavLink>
                </div>
                <div className="flex items-center lg:space-x-3 text-[12px] lg:text-[16px]">
                  <div className="lg:scale-100 scale-50">
                    <Avatar />
                  </div>
                  <div className="flex lg:justify-normal space-x-6 justify-between w-full">
                    <p>{posts[0].author || "Unknown Author"}</p>
                    <p>{new Date(posts[0].pubDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center border border-[#ccc] bg-[#E5E5E5] space-x-3 rounded-full mt-10 lg:p-6 p-3 w-full">
            <SearchIcon />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Articles"
              className="w-full outline-none border-none bg-transparent"
            />
          </div>

          <div className="mt-10">
            <h2 className="lg:text-[30px] text-[20px] font-semibold">
              Featured Articles
            </h2>

            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-6 mt-10">
              {posts.map((item, index) => (
                <BlogStoryCard
                  key={index}
                  imgSrc={item.coverImage || "/assets/blog-imgs/bl-cover-1.png"}
                  title={item.title}
                  link={item.link}
                  author={item.author || "The Tax Club"}
                  date={new Date(item.pubDate).toLocaleDateString()}
                  tags={item.categories || []}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pb-20">
          <div className="lg:w-[40%] w-[90%] rounded-2xl shadow-md bg-white p-10 space-y-6 flex items-center justify-center flex-col">
            <h2 className="lg:text-[24px] text-[20px] font-semibold">
              Follow us on Medium
            </h2>
            <p className="lg:text-[18px] lg:w-[60%] mx-auto text-center">
              Be the first to receive notifications when we drop a new article
            </p>
            <a
              href="https://medium.com/@unilagtaxclub"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-2 font-semibold text-white bg-[#00689e] rounded-xl"
            >
              Follow
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  );
};

export default Blog;
