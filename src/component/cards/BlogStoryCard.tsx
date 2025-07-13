import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "../svgs/Icons";

export interface BlogStoryCardProps {
  imgSrc: string | undefined;
  tags: string[];
  title: string | undefined;
  author: string | undefined;
  link: string | undefined;
  date: string;
}

const BlogStoryCard: FC<BlogStoryCardProps> = ({
  imgSrc,
  tags,
  title,
  author,
  link,
  date,
}) => {
  return (
    <div
      key={title}
      className="bg-[#fff] p-4 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer space-y-4"
    >
      <img
        src={imgSrc}
        alt="blog-img"
        className="w-[100%] lg:h-[240px] object-cover rounded-lg"
      />

      <div className="flex items-center space-x-3 flex-wrap">
        {tags.map((tag, index) => (
          <div key={index} className="flex">
            <p className="bg-[#e6f4fc] text-[#0085CB] text-[14px] py-1 px-3 mt-3 rounded-lg">
              {tag}
            </p>
          </div>
        ))}
      </div>
      <NavLink
        to={link as string}
        target="_blank"
        className="lg:text-[24px] text-[18px] text-[#333] font-semibold hover:underline"
      >
        {title?.slice(0, 100)}...
      </NavLink>
      <div className="flex justify-between items-center mt-4 text-[#808080] lg:text-[14px] text-[10px]">
        <div className="flex items-center space-x-3">
          <div className="bg-[#ccc] rounded-full">
            <Avatar />
          </div>
          <span className="text-[#333]">{author}</span>
        </div>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default BlogStoryCard;
