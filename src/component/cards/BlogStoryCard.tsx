import { FC } from "react";

interface BlogStoryCardProps {
  imgSrc: string;
  category: string;
  title: string;
  authorImg: string;
  authorName: string;
  date: string;
}

const BlogStoryCard: FC<BlogStoryCardProps> = ({
  imgSrc,
  category,
  title,
  authorImg,
  authorName,
  date,
}) => {
  return (
    <div className="bg-[#fff] p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer space-y-4">
      <img
        src={imgSrc}
        alt="blog-img"
        className="w-[100%] lg:h-[240px] object-cover rounded-lg"
      />

      <div className="flex">
        <p className="bg-[#e6f4fc] text-[#0085CB] text-[14px] py-1 px-3 rounded-lg">
          {category}
        </p>
      </div>
      <h2 className="lg:text-[24px] text-[18px] text-[#333] font-semibold">{title}</h2>
      <div className="flex justify-between items-center text-[#808080] text-[14px]">
        <div className="flex items-center space-x-3">
          <img src={authorImg} alt="author" className="w-8 h-8 rounded-full" />
          <span className="text-[#333]">{authorName}</span>
        </div>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default BlogStoryCard;
