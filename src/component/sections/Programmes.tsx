import { NavLink } from "react-router-dom";
import { RightArrow } from "../svgs/Icons";

const Programmes = () => {
  const items = [
    {
      id: 1,
      img: "/assets/programme-imgs/img-one.png",
      title: "The National Tax Debate",
      link: "/programmes/tntd",
      excerpt:
        "The biggest taxation competition in Africa that brings together the finest orators from tertiary institutions to battle on the grandest stage.",
    },
    {
      id: 2,
      img: "/assets/programme-imgs/img-two.png",
      title: "The Tax Walk",
      link: "/programmes/ttw",
      excerpt:
        "A sensitization program on the streets about the importance of taxation and tax compliance amongst the informal sector",
    },
    {
      id: 3,
      img: "/assets/programme-imgs/img-three.png",
      title: "Monday Memo",
      link: "/programmes/mm",
      excerpt:
        "A weekly carousel memo on all topical tax issues meant to educate the general public through engaging images and texts.",
    },
    {
      id: 4,
      img: "/assets/programme-imgs/img-four.png",
      title: "The Tax Experience",
      link: "/programmes/tte",
      excerpt:
        "An excursion to tax-based organisations to understand the rudiments of tax practice from professionals.",
    },
    {
      id: 5,
      img: "/assets/programme-imgs/img-five.png",
      title: "The Tax Masterclass",
      link: "/programmes/ttm",
      excerpt:
        "An intensive learning experience where members recieve specialised training on chosen topics from seasoned expers in the field.",
    },
    {
      id: 6,
      img: "/assets/programme-imgs/img-six.png",
      title: "Prof. A. Sanni Essay Competition",
      link: "/programmes/pasec",
      excerpt:
        "A competition which is aimed at rewarding innovation and excellence, and promoting tax awareness amongst the youth at large.",
    },
  ];
  return (
    <div className="lg:mt-[10vh] mt-16 pb-[10vh] lg:w-[80vw] w-[90vw] mx-auto">
      <div className="flex lg:flex-row flex-col justify-between lg:items-end lg:space-x-10">
        <div className="flex flex-col lg:w-[50%]">
          <div className="flex">
            <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
              Our Programmes
            </h2>
          </div>
          <h2 className="lg:text-[40px] text-[24px] font-semibold">
            What we do
          </h2>
          <p className="lg:text-[20px] text-[#3D3D3D]">
            We create long-lasting and immeasurable value through our
            initiatives. No one is left behind.
          </p>
        </div>

        <div className="lg:w-[50%] w-[100%] flex lg:justify-end">
          <NavLink
            to="/programmes/tntd"
            className="lg:py-4 py-3 px-10 w-[100%] mt-6 lg:mt-0 lg:w-auto bg-[#00689E] text-[#fff] lg:text-[20px] flex items-center justify-center lg:justify-start font-semibold space-x-3 rounded-lg"
          >
            <span>View All Programmes</span>
            <RightArrow color="#ffffff" />
          </NavLink>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-6 mt-10">
        {items.map((item) => (
          <NavLink
            to={item.link}
            key={item.id}
            className="p-3 bg-[#ffffff] rounded-2xl group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[192px] rounded-xl object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
            />
            <div className="mt-4 space-y-2">
              <h2 className="lg:text-[20px] font-semibold">{item.title}</h2>
              <p className="text-[#333] lg:text-[14px] text-[12px]">
                {item.excerpt}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Programmes;
