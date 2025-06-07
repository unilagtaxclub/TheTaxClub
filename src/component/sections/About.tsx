const About = () => {
  return (
    <div className="lg:mt-[15vh] mt-16 lg:w-[80vw] w-[90vw] mx-auto">
      <div className="flex lg:flex-row flex-col items-center justify-between">
        <div className="space-y-4 lg:w-[45%]">
          <h2 className="lg:text-[40px] text-[24px] font-semibold">
            Tax Education
          </h2>
          <p className="lg:text-[16px]">
            As the foremost tax club in Nigeria, we have held true to our
            mandate of delivering tax knowledge to students in tertiary
            institutions and the general public at large. Through our various
            initiatives, we have sensitized the public on tax compliance and
            other tax-related matters. We have also had the privilege of
            championing the birth of various tax clubs across the country.
          </p>
          <button className="px-6 py-3 text-[#fff] bg-[#00689e] lg:w-[50%] w-[100%] lg:max-w-[50%] lg:text-[20px] font-semibold rounded-lg mb-10 lg:mb-0">
            Support The Tax Club
          </button>
        </div>
        <div className="lg:w-[45%]">
          <img
            src="/assets/about-img-two.png"
            alt="about"
            className="w-[100%]"
          />
        </div>
      </div>

      <div className="lg:mt-[10vh] mt-16 lg:w-[80vw] w-[90vw] mx-auto flex lg:flex-row-reverse flex-col items-center justify-between">
        <div className="space-y-4 lg:w-[45%]">
          <h2 className="lg:text-[40px] text-[24px] font-semibold">
            Career Advancement
          </h2>
          <p className="lg:text-[16px]">
            The Tax Club has presented her members with numerous opportunities
            and has linked her members with potential career pathways in the
            field of taxation, hence the establishment of the Career Advancement
            Office which is in charge of sourcing and allotting internship
            placements as well as other networking opportunities.
          </p>
          <button className="px-6 py-3 text-[#fff] bg-[#00689e] lg:w-[50%] w-[100%] lg:max-w-[50%] font-semibold rounded-lg lg:text-[20px] mb-10 lg:mb-0">
            Become a Member
          </button>
        </div>
        <div className="lg:w-[45%]">
          <img
            src="/assets/about-img-one.png"
            alt="about"
            className="w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
