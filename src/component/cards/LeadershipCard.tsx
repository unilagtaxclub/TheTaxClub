import { FC } from "react";

interface LeadershipCardProps {
  imgSrc: string;
}

const LeadershipCard: FC<LeadershipCardProps> = ({ imgSrc }) => {
  return (
    <div className="lg:h-[509px] h-[450px]">
      <img
        src={imgSrc}
        alt="community-img"
        className="w-[100%] h-[80%] object-cover"
      />
      <div className="bg-[#0F1A20] p-4 pb-10">
        <h3 className="lg:text-[20px] uppercase text-[#fff] text-[18px]">
          Sam Smith
        </h3>
        <p className="lg:text-[16px] text-[14px] text-[#fff]">
          CEO, Company Name
        </p>
      </div>
    </div>
  );
};

export default LeadershipCard;
