import { NavLink } from "react-router-dom";
import Container from "../../component/defaults/Container";
import Footer from "../../component/defaults/Footer";
import Header from "../../component/defaults/Header";
import LayoutOne from "../../component/gallery-layouts/LayoutOne";
import LayoutThree from "../../component/gallery-layouts/LayoutThree";
import LayoutTwo from "../../component/gallery-layouts/LayoutTwo";
import { MiniCalendarIcon } from "../../component/svgs/Icons";

const TaxDebate = () => {
  return (
    <Container>
      <div className="bg-[#f2f2f2] min-h-screen ">
        <div className="bg-[url('/assets/footer-img.png')] lg:h-[581px] bg-cover bg-no-repeat">
          <div className="bg-[rgba(0,0,0,0.6)] text-[#fff] w-[100%] flex flex-col pt-6 lg:pt-20 lg:h-[581px] pb-10 lg:pb-0 lg:px-6">
            <Header active="Gallery" color="#ffffff" />
            <div className="lg:w-[80vw] w-[90vw] mx-auto mt-10 lg:mt-[30vh]">
              <h2 className="lg:text-[56px] text-[24px] font-semibold">
                Gallery
              </h2>
            </div>
          </div>
        </div>
        <div className="w-[90vw] lg:w-[80vw] mx-auto mt-10 pb-10">
          <div className="flex">
            <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
              Images
            </h2>
          </div>
          <p className="text-[#232323] my-3">
            Walk down memory lane here with us
          </p>

          <div className="mt-20">
            <div className="mb-10">
              <h2 className="lg:text-[32px] text-[20px] font-semibold">
                Tax Debate 6.0
              </h2>
              <div className="flex items-center space-x-2">
                <MiniCalendarIcon />
                <p className="lg:text-[16px] text-[14px]">30th January, 2023</p>
              </div>
            </div>

            <div className="space-y-6">
              <LayoutThree
                imgOne="/assets/gallery/debate/one.png"
                imgTwo="/assets/gallery/debate/two.png"
                imgThree="/assets/gallery/debate/three.png"
                imgFour="/assets/gallery/debate/four.png"
                imgFive="/assets/gallery/debate/five.png"
                imgSix="/assets/gallery/debate/six.png"
                imgSeven="/assets/gallery/debate/seven.png"
                imgEight="/assets/gallery/debate/eight.png"
              />
              <LayoutOne
                imgOne="/assets/gallery/debate/eight.png"
                imgTwo="/assets/gallery/debate/nine.png"
                imgThree="/assets/gallery/debate/ten.png"
                imgFour="/assets/gallery/debate/eleven.png"
                imgFive="/assets/gallery/debate/twelve.png"
                imgSix="/assets/gallery/debate/thirteen.png"
                imgSeven="/assets/gallery/debate/fourteen.png"
                imgEight="/assets/gallery/debate/fifteen.png"
              />
              <LayoutTwo
                imgOne="/assets/gallery/debate/sixteen.png"
                imgTwo="/assets/gallery/debate/seventeen.png"
                imgThree="/assets/gallery/debate/eighteen.png"
                imgFour="/assets/gallery/debate/nineteen.png"
                imgFive="/assets/gallery/debate/twenty.png"
                imgSix="/assets/gallery/debate/twenty-one.png"
                imgSeven="/assets/gallery/debate/twenty-two.png"
                imgEight="/assets/gallery/debate/twenty-three.png"
              />
              <LayoutOne
                imgOne="/assets/gallery/debate/twenty-four.png"
                imgTwo="/assets/gallery/debate/twenty-five.png"
                imgThree="/assets/gallery/debate/twenty-six.png"
                imgFour="/assets/gallery/debate/twenty-seven.png"
                imgFive="/assets/gallery/debate/twenty-eight.png"
                imgSix="/assets/gallery/debate/twenty-nine.png"
                imgSeven="/assets/gallery/debate/thirty.png"
                imgEight="/assets/gallery/debate/thirty-one.png"
              />
              <LayoutThree
                imgOne="/assets/gallery/debate/thirty-two.png"
                imgTwo="/assets/gallery/debate/thirty-three.png"
                imgThree="/assets/gallery/debate/thirty-four.png"
                imgFour="/assets/gallery/debate/thirty-five.png"
                imgFive="/assets/gallery/debate/thirty-six.png"
                imgSix="/assets/gallery/debate/thirty-seven.png"
                imgSeven="/assets/gallery/debate/thirty-eight.png"
                imgEight="/assets/gallery/debate/thirty-nine.png"
              />
              <LayoutTwo
                imgOne="/assets/gallery/debate/four.png"
                imgTwo="/assets/gallery/debate/twenty.png"
                imgThree="/assets/gallery/debate/forty.png"
                imgFour="/assets/gallery/debate/forty-one.png"
                imgFive="/assets/gallery/debate/forty-two.png"
                imgSix="/assets/gallery/debate/nine.png"
                imgSeven="/assets/gallery/debate/thirty.png"
                imgEight="/assets/gallery/debate/one.png"
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-10 lg:mb-[15vh]">
            <NavLink
              to="/gallery"
              className="border border-[#00689e] text-[#00689e] font-semibold lg:text-[18px] py-3 px-10 rounded-lg"
            >
              Show Less
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  );
};

export default TaxDebate;
