import LeadershipCard from "../../component/cards/LeadershipCard";
import Container from "../../component/defaults/Container";
import Footer from "../../component/defaults/Footer";
import Header from "../../component/defaults/Header";

const OurPeople = () => {
  return (
    <Container>
      <div className="bg-[#f2f2f2] min-h-screen pt-10">
        <Header />
        <div className="w-[90vw] lg:w-[80vw] mx-auto mt-10 pb-10">
          <div className="flex flex-col text-center items-center justify-center space-y-2">
            <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#808080] py-1 px-3 rounded-full">
              Meet our People
            </h2>
            <p className="lg:text-[25px] text-[#333] lg:w-[70%]">
              Meet our world class ullamcorper cursus lectus. Fames aliquet ac
              dui adipiscing.{" "}
            </p>
          </div>

          <div className="mt-10">
            <h2 className="lg:text-[24px] text-[18px] font-semibold">
              Current Excos and Coordinators
            </h2>
              <div className="mt-6 grid lg:grid-cols-3 grid-cols-2 gap-10">
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-two.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-three.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-four.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-five.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-six.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-seven.jpeg" />
              </div>
          </div>

          <div className="lg:mt-[20vh] mt-20">
            <h2 className="lg:text-[24px] text-[18px] font-semibold">
              Staffs
            </h2>
              <div className="mt-6 grid lg:grid-cols-5 grid-cols-2 gap-10">
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-two.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-three.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-four.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-five.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-six.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-seven.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-four.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-five.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-six.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-seven.jpeg" />
              </div>
          </div>

          <div className="lg:mt-[20vh] mt-20 lg:mb-20 mb-10">
            <h2 className="lg:text-[24px] text-[18px] font-semibold">
              Hall of Fame
            </h2>
              <div className="mt-6 grid lg:grid-cols-5 grid-cols-2 gap-10">
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-two.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-three.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-four.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-five.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-six.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-seven.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-four.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-five.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-six.jpeg" />
                <LeadershipCard imgSrc="/assets/community-imgs/community-img-seven.jpeg" />
              </div>
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  );
};

export default OurPeople;
