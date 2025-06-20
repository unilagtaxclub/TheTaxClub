import { FC } from "react";
import { LayoutProps } from "./LayoutOne";

const LayoutTwo: FC<LayoutProps> = ({
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
  imgFive,
  imgSix,
  imgSeven,
}) => {
  return (
    <div>
      {/* desktop */}
      <div className="lg:grid hidden grid-cols-3 gap-6">
        <div className="space-y-4">
          <img
            src={imgOne}
            alt="gallery-img"
            className="w-[100%] object-cover h-[339px] rounded-2xl"
          />
          <img
            src={imgTwo}
            alt="gallery-img"
            className="w-[100%] object-cover h-[339px] rounded-2xl"
          />
        </div>

        <div className="space-y-4">
          <img
            src={imgThree}
            alt="gallery-img"
            className="w-[100%] object-cover h-[339px] rounded-2xl"
          />
          <img
            src={imgFour}
            alt="gallery-img"
            className="w-[100%] object-cover h-[339px] rounded-2xl"
          />
        </div>
        <div className="space-y-4">
          <img
            src={imgFive}
            alt="gallery-img"
            className="w-[100%] object-cover h-[218px] rounded-2xl"
          />
          <img
            src={imgSix}
            alt="gallery-img"
            className="w-[100%] object-cover h-[218px] rounded-2xl"
          />
          <img
            src={imgSeven}
            alt="gallery-img"
            className="w-[100%] object-cover h-[218px] rounded-2xl"
          />
        </div>
      </div>

      {/* mobile */}
      <div className="grid lg:hidden gap-6 grid-cols-2">
        <img
          src={imgTwo}
          alt="gallery-img"
          className="w-[100%] object-cover h-[304px] rounded-2xl"
        />
        <img
          src={imgThree}
          alt="gallery-img"
          className="w-[100%] object-cover h-[304px] mt-6 rounded-2xl"
        />
        <img
          src={imgFour}
          alt="gallery-img"
          className="w-[100%] object-cover h-[304px] rounded-2xl"
        />
        <img
          src={imgFive}
          alt="gallery-img"
          className="w-[100%] object-cover h-[304px] mt-6 rounded-2xl"
        />
        <img
          src={imgSix}
          alt="gallery-img"
          className="w-[100%] object-cover h-[304px] rounded-2xl"
        />
        <img
          src={imgSeven}
          alt="gallery-img"
          className="w-[100%] object-cover h-[304px] mt-6 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default LayoutTwo;
