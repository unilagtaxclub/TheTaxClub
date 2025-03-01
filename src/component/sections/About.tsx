const About = () => {
  return (
    <div className="lg:mt-[15vh] mt-16 lg:w-[80vw] w-[90vw] mx-auto flex lg:flex-row flex-col items-center justify-between">
      <div className="space-y-4 lg:w-[45%]">
        <h2 className="lg:text-[48px] text-[24px] font-semibold">About Us</h2>
        <p className="lg:text-[25px]">
          This is a foremost student organization aimed at promoting the
          awareness and relevance of taxation in the various sectors of the
          economy as well as building a tax-conscious society. The Tax Club, UI
          started in November 2016 and has since grown rapidly under the
          mentorship of Prof Abiola Sanni the patron of the club as well as Dr
          Peter Oniemola and Dr Samuel Orekoya the Staff Advisers. Over the
          course of its few years, the club has taken giant strides in terms of
          recognition and strategic partnerships with relevant professionals and
          agencies, launching of its first tax workshop, membership growth,
          remarkable events amongst others.
        </p>
        <button className="px-6 py-3 text-[#fff] bg-[#00689e] lg:w-[40%] w-[100%] lg:max-w-[45%] font-semibold rounded-lg mb-10 lg:mb-0">
          Learn More
        </button>
      </div>
      <div className="lg:w-[45%]">
        <img src="/assets/about.png" alt="about" className="w-[100%] lg:h-[714px]" />
      </div>
    </div>
  );
};

export default About;
