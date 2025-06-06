import Header from "../defaults/Header";

const Hero = () => {
  return (
    <div className="bg-[url('/assets/hero.png')] lg:min-h-[650px] bg-cover bg-no-repeat">
      <div className="bg-[rgba(0,0,0,0.4)] text-[#fff] w-[100%] flex flex-col pt-6 lg:pt-20 lg:min-h-screen pb-20 lg:pb-0 px-6">
        <Header />
        <div className="lg:w-[80vw] w-[90vw] mx-auto mt-10 lg:mt-[20vh]">
          <h2 className="text-[#fff301] font-semibold">
            The Tax Club, University of Lagos
          </h2>
          <h2 className="lg:block hidden text-[56px] font-semibold">
            Shaping the Future of Taxation, <br /> one step at a time
          </h2>
          <h2 className="lg:hidden text-[30px] font-semibold">
            Shaping the Future of Taxation, one step at a time
          </h2>
          <p className="lg:w-[60%] mt-3">
            We are a dynamic community of young and passionate individuals
            dedicated to mastering the field of taxation and spreading the
            gospel of taxation. We are the First, and we have no equals.{" "}
          </p>
          <div className="mt-10 flex lg:flex-row flex-col lg:space-x-10 space-y-6 lg:space-y-0 text-[20px]">
            <button className="bg-[#00689e] text-[#fff] px-20 py-3 rounded-lg font-semibold hover:bg-[#005a7a] transition-all duration-300 ease-in-out">
              Partner with us
            </button>
            <button className="border border-[#00689e] text-[#00689e] px-20 py-3 rounded-lg font-semibold hover:bg-[#00689e] hover:text-[#fff] transition-all duration-300 ease-in-out">
              Become a Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
