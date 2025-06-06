import CountdownTimer from "../defaults/CountdownTimer";
import Header from "../defaults/Header";

const Hero = () => {
  return (
    <div className="bg-[url('/assets/hero.png')] lg:min-h-[650px] bg-cover bg-no-repeat">
      <div className="bg-[rgba(0,0,0,0.4)] text-[#fff] w-[100%] flex flex-col items-center justify-center lg:min-h-screen px-6">
      <Header />
        <h2 className="lg:text-[61px] text-[28px] font-semibold text-center lg:w-[100%] w-[80%] mb-3 lg:mb-1">Welcome to the Tax Club</h2>
        <p className="lg:text-[25px] text-[12px] text-center">
          Your Trusted Partner in Tax Knowledge and <br /> Community.
        </p>
        <CountdownTimer />

        <div className="carousel flex items-center space-x-3 mt-20">
            <div className="w-[56px] h-[16px] rounded-full bg-[#00689e]"></div>
            <div className="h-[16px] w-[16px] rounded-full bg-[#b3b3b3]"></div>
            <div className="h-[16px] w-[16px] rounded-full bg-[#b3b3b3]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
