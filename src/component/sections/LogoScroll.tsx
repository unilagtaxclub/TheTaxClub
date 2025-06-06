import {
  Acuity,
  CITN,
  Deloitte,
  FIRS,
  IRS,
  SIAO,
} from "../svgs/Logos";

const LogoScroll = () => {
  return (
    <>
      <div className="flex justify-center items-center lg:mt-[10vh] mt-10">
        <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#808080] py-1 px-3 rounded-full">
          Supported by our partners
        </h2>
      </div>
      <div className="w-[98vw] mx-auto mt-10 overflow-hidden">
        <div className="flex items-center scroll-content scroll-animation">
          <div className="flex items-center space-x-10 lg:space-x-20 lg:scale-100 scale-75">
            <FIRS />
            <IRS />
            <CITN />
            <Acuity />
            <SIAO />
            <Deloitte />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoScroll;
