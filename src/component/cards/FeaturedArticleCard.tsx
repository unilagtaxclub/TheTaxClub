import { FC } from "react";
import { DownloadIcon } from "../svgs/Icons";

interface FeaturedArticleCardProps {
  title: string;
  category: string;
  date: string;
  author: string;
  imgSrc: string;
  avatarImgSrc: string;
  description: string;
}

const FeaturedArticleCard: FC<FeaturedArticleCardProps> = ({
  title,
  category,
  date,
  author,
  imgSrc,
  avatarImgSrc,
  description,
}) => {
  return (
    <div className="bg-[#fff] p-4 rounded-2xl cursor-pointer flex lg:flex-row flex-col justify-between">
      <div className="lg:w-[30%]">
        <img src={imgSrc} alt={title} className="w-[100%]" />
      </div>

      <div className="lg:w-[67%] mt-4 lg:mt-0 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex">
            <p className="bg-[#e6f4fc] text-[#00689e] text-[14px] py-1 px-3 rounded-lg">
              {category}
            </p>
          </div>
          <h2 className="lg:text-[24px] text-[18px] font-semibold">{title}</h2>
          <p className="lg:text-[20px] text-[16px]">{description}</p>
        </div>

        <div className="flex lg:flex-row flex-col justify-between lg:items-center space-y-4 mt-6 lg:mt-0 lg:space-y-0">
          <div className="flex items-center lg:space-x-10 lg:justify-start justify-between text-[14px] text-[#808080] lg:text-[16px]">
            <div className="flex items-center space-x-3 lg:space-x-1">
              <img
                src={avatarImgSrc}
                className="w-8 h-8 rounded-full"
                alt="avatar"
              />
              <p>{author}</p>
            </div>
            <p>{date}</p>
          </div>

          <button className="bg-[#dfbd00] text-[#fff] rounded-xl py-2 px-6 font-semibold flex justify-center items-center space-x-3">
            <span>Download</span>
            <DownloadIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticleCard;
