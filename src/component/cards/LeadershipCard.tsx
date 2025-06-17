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
        className="w-[100%] h-[100%] object-cover"
      />
    </div>
  );
};

export default LeadershipCard;
