import CountdownTimer from "../defaults/CountdownTimer";
import { RightArrow } from "../svgs/Icons";

const Upcoming = () => {
  return (
    <div className="bg-[#ffffff]">
      <div className="lg:mt-[10vh] mt-16 pt-20 pb-[10vh] lg:w-[80vw] w-[90vw] mx-auto">
        <div className="flex">
          <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
            Upcoming
          </h2>
        </div>
        <h2 className="lg:text-[40px] text-[24px] font-semibold">
          Something big is happening
        </h2>
        <div className="flex items-center justify-between lg:flex-row flex-col lg:space-x-10 space-y-10 lg:space-y-0 mt-10">
          <div className="bg-[#E6F4FC] space-y-6 lg:p-10 p-4 shadow-lg lg:w-[50%] rounded-2xl">
            <h2 className="lg:text-[32px] text-[20px] font-semibold">
              The 20th Anniversary Programme
            </h2>
            <div className="space-y-2 lg:text-[20px]">
              <h2 className="text-[#808080]">Theme:</h2>
              <p>The Legacy: Shaping Taxation for the next 20 years</p>
            </div>
            <div className="space-y-2 lg:text-[20px]">
              <h2 className="text-[#808080]">Date:</h2>
              <p>July 3rd, 2025</p>
            </div>

            <div className="mt-10 flex lg:flex-row flex-col lg:space-x-4 space-y-6 lg:space-y-0 lg:text-[20px]">
              <button className="bg-[#00689e] text-[#fff] px-10 py-3 rounded-lg font-semibold hover:bg-[#005a7a] transition-all duration-300 ease-in-out">
                Sponsor Event
              </button>
              <button className="border border-[#00689e] text-[#00689e] px-10 py-3 rounded-lg font-semibold hover:bg-[#00689e] hover:text-[#fff] transition-all duration-300 ease-in-out">
                Register for Event
              </button>
            </div>

            <div className="flex items-center space-x-3 lg:text-[18px] lg:px-6 px-3 pt-4 text-[#00689E] font-semibold">
              <p>See flier</p>
              <RightArrow />
            </div>
          </div>

          <div className="border-3 border-[#00689E] lg:w-[45%] w-[100%] flex flex-col justify-center items-center rounded-2xl py-10 lg:px-20 px-10">
            <h2 className="lg:text-[20px] font-semibold text-center text-[#00689E] uppercase">
              Time remaining for anniversary event
            </h2>
            <div className="my-6">
              <CountdownTimer targetDate="June 30, 2025 15:30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
