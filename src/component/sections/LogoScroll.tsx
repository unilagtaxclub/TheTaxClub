import {
  Acuity,
  Aelex,
  Ajayi,
  Andersen,
  AxMatter,
  BAI,
  Belo,
  CITN,
  Deloitte,
  Ey,
  FIRS,
  Flutterwave,
  IRS,
  Kenna,
  KPMG,
  SIAO,
} from "../svgs/Logos";

const LogoScroll = () => {
  return (
    <div className="w-[98vw] mx-auto mt-10 overflow-hidden">
      <div className="scroll-wrapper">
        <div className="scroll-track">
          {/* First set of logos */}
          <div className="flex items-center space-x-10 lg:space-x-20">
            <FIRS />
            <IRS />
            <CITN />
            <Acuity />
            <SIAO />
            <Deloitte />
            <Ajayi />
            <KPMG />
            <Kenna />
            <BAI />
            <Ey />
            <AxMatter />
            <Flutterwave />
            <Belo />
            <Andersen />
            <Aelex />
          </div>
          <div className="flex items-center space-x-10 lg:space-x-20 ml-10">
            <FIRS />
            <IRS />
            <CITN />
            <Acuity />
            <SIAO />
            <Deloitte />
            <Ajayi />
            <KPMG />
            <Kenna />
            <BAI />
            <Ey />
            <AxMatter />
            <Flutterwave />
            <Belo />
            <Andersen />
            <Aelex />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoScroll;
