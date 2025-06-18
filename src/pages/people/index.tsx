import FlippableCard from "../../component/cards/FlippableCard";
import Container from "../../component/defaults/Container";
import Footer from "../../component/defaults/Footer";
import Header from "../../component/defaults/Header";

const OurPeople = () => {
  const executives = [
    {
      id: 1,
      frontCard: "/assets/people-imgs/jesutofunmi-front.png",
      backCard: "/assets/people-imgs/jesutofunmi-back.png",
    },
    {
      id: 2,
      frontCard: "/assets/people-imgs/emmanuel-front.png",
      backCard: "/assets/people-imgs/emmanuel-back.png",
    },
    {
      id: 3,
      frontCard: "/assets/people-imgs/jedidiah-front.png",
      backCard: "/assets/people-imgs/jedidiah-back.png",
    },
    {
      id: 4,
      frontCard: "/assets/people-imgs/paul-front.png",
      backCard: "/assets/people-imgs/paul-back.png",
    },
    {
      id: 5,
      frontCard: "/assets/people-imgs/michael-front.png",
      backCard: "/assets/people-imgs/michael-back.png",
    },
    {
      id: 6,
      frontCard: "/assets/people-imgs/taiwo-front.png",
      backCard: "/assets/people-imgs/taiwo-back.png",
    },
    {
      id: 7,
      frontCard: "/assets/people-imgs/oluwafeyikemi-front.png",
      backCard: "/assets/people-imgs/oluwafeyikemi-back.png",
    },
    {
      id: 8,
      frontCard: "/assets/people-imgs/elum-front.png",
      backCard: "/assets/people-imgs/elum-back.png",
    },
    {
      id: 9,
      frontCard: "/assets/people-imgs/kehinde-front.png",
      backCard: "/assets/people-imgs/kehinde-back.png",
    },
  ];

  const staffAdvisers = [
    {
      id: 10,
      frontCard: "/assets/people-imgs/sanni-front.png",
      backCard: "/assets/people-imgs/sanni-back.png",
    },
    {
      id: 11,
      frontCard: "/assets/people-imgs/emmanuel-front.png",
      backCard: "/assets/people-imgs/emmanuel-back.png",
    },
    {
      id: 12,
      frontCard: "/assets/people-imgs/jesutofunmi-front.png",
      backCard: "/assets/people-imgs/jesutofunmi-back.png",
    },
  ];

  const elders = [
    {
      id: 13,
      frontCard: "/assets/people-imgs/zacch-front.png",
      backCard: "/assets/people-imgs/zacch-back.png",
    },
    {
      id: 14,
      frontCard: "/assets/people-imgs/ayodele-front.png",
      backCard: "/assets/people-imgs/ayodele-back.png",
    },
    {
      id: 15,
      frontCard: "/assets/people-imgs/jesutofunmi-front.png",
      backCard: "/assets/people-imgs/jesutofunmi-back.png",
    },
    {
      id: 15,
      frontCard: "/assets/people-imgs/oyedele-front.png",
      backCard: "/assets/people-imgs/oyedele-back.png",
    },
  ];

  return (
    <Container>
      <div className="bg-[#f2f2f2] min-h-screen">
        <div className="bg-[url('/assets/gallery/ntdv/img-fourteen.png')] lg:h-[581px] bg-cover bg-no-repeat">
          <div className="bg-[rgba(0,0,0,0.6)] text-[#fff] w-[100%] flex flex-col pt-6 lg:pt-20 lg:h-[581px] pb-10 lg:pb-0 lg:px-6">
            <Header active="Our People" color="#ffffff" />
            <div className="lg:w-[80vw] w-[90vw] mx-auto mt-10 lg:mt-[30vh]">
              <h2 className="lg:text-[56px] text-[24px] font-semibold">
                People
              </h2>
            </div>
          </div>
        </div>
        <div className="w-[90vw] lg:w-[80vw] mx-auto lg:mt-[10vh] mt-6 pb-10">
          <div className="mt-10">
            <div className="flex">
              <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
                Executives
              </h2>
            </div>
            <div className="mt-6 grid lg:grid-cols-3 grid-cols-1 gap-4">
              {executives.map((executive) => (
                <div key={executive.id} className="lg:h-[509px] h-[450px]">
                  <FlippableCard
                    frontCard={executive.frontCard}
                    backCard={executive.backCard}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:mt-[20vh] mt-20">
            <div className="flex">
              <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
                Staff Advisers
              </h2>
            </div>
            <div className="mt-6 grid lg:grid-cols-3 grid-cols-1 gap-4">
              {staffAdvisers.map((staff) => (
                <div key={staff.id} className="lg:h-[509px] h-[450px]">
                  <FlippableCard
                    frontCard={staff.frontCard}
                    backCard={staff.backCard}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:mt-[20vh] mt-20 lg:mb-20 mb-10">
            <div className="flex">
              <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
                Patrons/Matrons
              </h2>
            </div>
            <div className="mt-6 grid lg:grid-cols-3 grid-cols-1 gap-4">
              {elders.map((elder) => (
                <div key={elder.id} className="lg:h-[509px] h-[450px]">
                  <FlippableCard
                    frontCard={elder.frontCard}
                    backCard={elder.backCard}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer active="Our People" />
      </div>
    </Container>
  );
};

export default OurPeople;
