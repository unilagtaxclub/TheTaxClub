import LeadershipCard from "../cards/LeadershipCard";

const Leadership = () => {
  return (
    <>
      <div className="lg:mt-[10vh] mt-16 lg:w-[80vw] w-[90vw] mx-auto flex lg:flex-row flex-col items-center justify-between">
        <div className="flex flex-col lg:w-[50%]">
          <h2 className="lg:text-[48px] text-[24px] font-semibold">
            Our leadership
          </h2>
          <p className="lg:text-[25px] text-[#232323]">
            Lorem ipsum dolor sit amet consectetur. Justo aliquam laoreet justo
            amet vehicula ullamcorper cursus lectus. Fames aliquet ac dui
            adipiscing. Sed vitae ultricies at fermentum nulla volutpat commodo.
            Natoque pulvinar et.
          </p>

          <div className="mt-10 grid lg:grid-cols-3 grid-cols-2 gap-10">
            <LeadershipCard imgSrc="/assets/community-imgs/community-img-two.jpeg" />
            <LeadershipCard imgSrc="/assets/community-imgs/community-img-three.jpeg" />
            <LeadershipCard imgSrc="/assets/community-imgs/community-img-four.jpeg" />
            <LeadershipCard imgSrc="/assets/community-imgs/community-img-five.jpeg" />
            <LeadershipCard imgSrc="/assets/community-imgs/community-img-six.jpeg" />
            <LeadershipCard imgSrc="/assets/community-imgs/community-img-seven.jpeg" />
          </div>
        </div>
        <div className="lg:w-[40%] lg:mt-0 mt-10">
          <div
            className="w-[100%] lg:h-[758px] h-[443px] bg-cover bg-center flex items-end p-6 text-white rounded-xl"
            style={{
              backgroundImage:
                "url('/assets/community-imgs/community-img-one.jpeg')",
            }}
          >
            <p className="bg-black/50 p-4 rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi.
            </p>
          </div>
          <h3 className="lg:text-[40px] text-[24px] mt-4 text-center">
            Sam Smith
          </h3>
          <p className="lg:text-[20px] text-[#808080] text-center">
            CEO, Company Name
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <button className="lg:bg-[#00689e] border border-[#00689e] text-[#00689e] lg:text-[#fff] text-[16px] font-semibold rounded-lg py-3 px-10 mt-4 lg:w-auto w-[90%]">
          View All Members
        </button>
      </div>
    </>
  );
};

export default Leadership;
