import LeadershipCard from "../../component/cards/LeadershipCard";
import Container from "../../component/defaults/Container";
import Footer from "../../component/defaults/Footer";
import Header from "../../component/defaults/Header";

const OurPeople = () => {
  return (
    <Container>
      <div className="bg-[#f2f2f2] min-h-screen">
        <div className="bg-[url('/assets/footer-img.png')] lg:h-[581px] bg-cover bg-no-repeat">
          <div className="bg-[rgba(0,0,0,0.6)] text-[#fff] w-[100%] flex flex-col pt-6 lg:pt-20 lg:h-[581px] pb-20 lg:pb-0 lg:px-6">
            <Header active="Our People" />
            <div className="lg:w-[80vw] w-[90vw] mx-auto mt-10 lg:mt-[30vh]">
              <h2 className="lg:text-[56px] text-[30px] font-semibold">
                People
              </h2>
            </div>
          </div>
        </div>
        <div className="w-[90vw] lg:w-[80vw] mx-auto mt-[10vh] pb-10">
          <div className="mt-10">
            <div className="flex">
              <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
                Executives
              </h2>
            </div>
            <div className="mt-6 grid lg:grid-cols-3 grid-cols-1 gap-10">
              <LeadershipCard imgSrc="/assets/community-imgs/community-img-two.jpeg" />
              <LeadershipCard imgSrc="/assets/community-imgs/community-img-three.jpeg" />
              <LeadershipCard imgSrc="/assets/community-imgs/community-img-four.jpeg" />
              <LeadershipCard imgSrc="/assets/community-imgs/community-img-five.jpeg" />
              <LeadershipCard imgSrc="/assets/community-imgs/community-img-six.jpeg" />
              <LeadershipCard imgSrc="/assets/community-imgs/community-img-seven.jpeg" />
            </div>
          </div>

          <div className="lg:mt-[20vh] mt-20">
            <div className="flex">
              <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
                Staff Advisers
              </h2>
            </div>
            <div className="mt-6 grid lg:grid-cols-3 grid-cols-1 gap-10">
              <LeadershipCard imgSrc="/assets/community-imgs/community-img-two.jpeg" />
              <LeadershipCard imgSrc="/assets/community-imgs/community-img-three.jpeg" />
              <LeadershipCard imgSrc="/assets/community-imgs/community-img-four.jpeg" />
            </div>
          </div>

          <div className="lg:mt-[20vh] mt-20 lg:mb-20 mb-10">
            <div className="flex">
              <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
                Patrons/Matrons
              </h2>
            </div>
            <div className="mt-6 grid lg:grid-cols-3 grid-cols-1 gap-10">
              <LeadershipCard imgSrc="/assets/community-imgs/community-img-two.jpeg" />
              <LeadershipCard imgSrc="/assets/community-imgs/community-img-three.jpeg" />
              <LeadershipCard imgSrc="/assets/community-imgs/community-img-four.jpeg" />
              <LeadershipCard imgSrc="/assets/community-imgs/community-img-five.jpeg" />
            </div>
          </div>
        </div>
        <Footer active="Our People" />
      </div>
    </Container>
  );
};

export default OurPeople;
