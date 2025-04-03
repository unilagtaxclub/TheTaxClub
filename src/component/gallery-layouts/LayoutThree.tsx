import { FC } from "react";
import { LayoutProps } from "./LayoutOne";

const LayoutThree: FC<LayoutProps> = ({
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
  imgFive,
  imgSix,
  imgSeven,
}) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="space-y-4">
        <img
          src={imgOne}
          alt="gallery-img"
          className="w-[100%] object-cover h-[218px] rounded-2xl"
        />
        <img
          src={imgTwo}
          alt="gallery-img"
          className="w-[100%] object-cover h-[218px] rounded-2xl"
        />
        <img
          src={imgThree}
          alt="gallery-img"
          className="w-[100%] object-cover h-[218px] rounded-2xl"
        />
      </div>
      <div className="space-y-4">
        <img
          src={imgFour}
          alt="gallery-img"
          className="w-[100%] object-cover h-[339px] rounded-2xl"
        />
        <img
          src={imgFive}
          alt="gallery-img"
          className="w-[100%] object-cover h-[339px] rounded-2xl"
        />
      </div>

      <div className="space-y-4">
        <img
          src={imgSix}
          alt="gallery-img"
          className="w-[100%] object-cover h-[339px] rounded-2xl"
        />
        <img
          src={imgSeven}
          alt="gallery-img"
          className="w-[100%] object-cover h-[339px] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default LayoutThree;
