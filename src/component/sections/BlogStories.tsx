import BlogStoryCard from "../cards/BlogStoryCard";

const BlogStories = () => {
  return (
    <div className="lg:py-[5vh] lg:w-[80vw] w-[90vw] mx-auto">
      <div className="flex flex-col text-center items-center justify-center space-y-2">
        <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#808080] py-1 px-3 rounded-full">
          Blog stories
        </h2>
        <p className="lg:text-[48px] text-[24px] font-semibold">
          From Our Blog
        </p>
        <p className="lg:text-[25px] text-[#333] lg:w-[70%]">
          Discover why tax professionals and organisations trust us for insights
          and guidance, driven by our commitment to quality resources and member
          support.
        </p>
        <button className="bg-[#00689e] text-[#fff] text-[16px] font-semibold rounded-lg py-3 px-6 mt-4">
          Visit Our Blog
        </button>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:gap-10 mt-10">
        <BlogStoryCard
          imgSrc="/assets/blog-imgs/bl-cover-1.png"
          category="Tax"
          title="The Impact of Technology on the Workplace: How Technology is Changing"
          authorImg="/assets/blog-imgs/bl-avatar-1.png"
          authorName="Tracey Wilson"
          date="August 20, 2022."
        />
        <BlogStoryCard
          imgSrc="/assets/blog-imgs/bl-cover-2.png"
          category="Tax"
          title="The Impact of Technology on the Workplace: How Technology is Changing"
          authorImg="/assets/blog-imgs/bl-avatar-2.png"
          authorName="Jason Francisco"
          date="August 20, 2022."
        />
        <BlogStoryCard
          imgSrc="/assets/blog-imgs/bl-cover-3.png"
          category="Tax"
          title="The Impact of Technology on the Workplace: How Technology is Changing"
          authorImg="/assets/blog-imgs/bl-avatar-3.png"
          authorName="Elizabeth Slavin"
          date="August 20, 2022."
        />
        <BlogStoryCard
          imgSrc="/assets/blog-imgs/bl-cover-4.png"
          category="Tax"
          title="The Impact of Technology on the Workplace: How Technology is Changing"
          authorImg="/assets/blog-imgs/bl-avatar-4.png"
          authorName="Ernie Smith"
          date="August 20, 2022."
        />
        <BlogStoryCard
          imgSrc="/assets/blog-imgs/bl-cover-5.png"
          category="Tax"
          title="The Impact of Technology on the Workplace: How Technology is Changing"
          authorImg="/assets/blog-imgs/bl-avatar-5.png"
          authorName="Eric Smith"
          date="August 20, 2022."
        />
        <BlogStoryCard
          imgSrc="/assets/blog-imgs/bl-cover-6.png"
          category="Tax"
          title="The Impact of Technology on the Workplace: How Technology is Changing"
          authorImg="/assets/blog-imgs/bl-avatar-1.png"
          authorName="Tracey Wilson"
          date="August 20, 2022."
        />
      </div>
    </div>
  );
};

export default BlogStories;
