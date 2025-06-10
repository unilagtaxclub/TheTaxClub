import BlogStoryCard from "../cards/BlogStoryCard";
import { RightArrow } from "../svgs/Icons";

const BlogStories = () => {
  const items = [
    {
      id: 1,
      img: "/assets/blog-imgs/bl-cover-1.png",
      title:
        "Taxing the Game: Can the Lagos State Lotteries and the Gaming Authority legally le...",
      tags: ["Tax", "Lotteries", "Gaming"],
      authorName: "Oluwatoyin Salami",
      date: "December 16, 2024",
    },
    {
      id: 2,
      img: "/assets/blog-imgs/bl-cover-2.png",
      title:
        "Navigating Taxation in Nigeria's Gig Economy: What are the Challenges and Pat...",
      tags: ["Tax", "Freelancing"],
      authorName: "Oluwatoyin Salami",
      date: "November 29, 2022",
    },
    {
      id: 3,
      img: "/assets/blog-imgs/bl-cover-3.png",
      title:
        "The New Tax regime in Nigeria: Witholding Tax Regulations 2024 adn the p...",
      tags: ["Tax"],
      authorName: "Adaora Obeleagu",
      date: "November 16, 2024",
    },
  ];
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
        {items.map((item) => (
          <BlogStoryCard
            imgSrc={item.img}
            title={item.title}
            authorName={item.authorName}
            date={item.date}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogStories;
