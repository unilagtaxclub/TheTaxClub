import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "../svgs/Icons";

interface BlogStoryCardProps {
  imgSrc: string;
  tags: string[];
  title: string;
  authorName: string;
  date: string;
}

const BlogStoryCard: FC<BlogStoryCardProps> = ({
  imgSrc,
  tags,
  title,
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

      <div className="flex items-center space-x-3">
        {tags.map((tag, index) => (
          <div key={index} className="flex">
            <p className="bg-[#e6f4fc] text-[#0085CB] text-[14px] py-1 px-3 rounded-lg">
              {tag}
            </p>
          </div>
        ))}
      </div>
      <NavLink
        to={`/blog/${title}`}
        className="lg:text-[24px] text-[18px] text-[#333] font-semibold hover:underline"
      >
        {title}
      </NavLink>
      <div className="flex justify-between items-center mt-4 text-[#808080] lg:text-[14px] text-[10px]">
        <div className="flex items-center space-x-3">
          <div className="bg-[#ccc] rounded-full">
            <Avatar />
          </div>
          <span className="text-[#333]">{authorName}</span>
        </div>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default BlogStoryCard;
