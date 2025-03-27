import { FC } from "react";

interface LeadershipCardProps {
  imgSrc: string;
}

const LeadershipCard: FC<LeadershipCardProps> = ({ imgSrc }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imgSrc}
        alt="community-img"
        className="w-[100%] h-[200px] rounded-lg object-cover"
      />
      <h3 className="lg:text-[24px] text-[18px] mt-4">Sam Smith</h3>
      <p className="lg:text-[16px] text-[14px] text-[#808080]">CEO, Company Name</p>
    </div>
  );
};

export default LeadershipCard;
