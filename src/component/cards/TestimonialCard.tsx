import { FC } from "react";

interface TestimonialCardProps {
  name: string;
  location: string;
  testimonial: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  location,
  testimonial,
}) => {
  return (
    <div className="bg-[#fff] p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer lg:min-w-[100%] min-w-[70vw]">
      <div className="flex items-center space-x-3">
        <img
          src="/assets/test-avatar.png"
          alt="test-avatar"
          className="w-[56px] h-[56px] rounded-full"
        />
        <div className="">
          <h3 className="text-[#333] font-semibold text-[14px]">{name}</h3>
          <p className="text-[#808080] text-[12px]">{location}</p>
        </div>
      </div>
      <div className="border-t-2 pt-3 mt-3 border-[#ccc]">
        <p className="text-[14px] text-[#333]">{testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
