import { NavLink } from "react-router-dom";
import Container from "../../component/defaults/Container";
import Footer from "../../component/defaults/Footer";
import Header from "../../component/defaults/Header";
import LayoutOne from "../../component/gallery-layouts/LayoutOne";
import LayoutTwo from "../../component/gallery-layouts/LayoutTwo";
import { MiniCalendarIcon } from "../../component/svgs/Icons";

const Gallery = () => {
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

          <div className="mt-10">
            <div className="flex justify-between items-center mb-10">
              <div className="">
                <h2 className="lg:text-[32px] text-[20px] font-semibold">
                  NTDV Publicity Shot
                </h2>
                <div className="flex items-center space-x-2">
                  <MiniCalendarIcon />
                  <p className="lg:text-[16px] text-[14px]">
                    30th February 2023
                  </p>
                </div>
              </div>
              <NavLink
                to="/gallery/ntdv-one"
                className="lg:text-[20px] underline text-[#00689e] font-semibold"
              >
                See all
              </NavLink>
            </div>

            <div className="space-y-6">
              <LayoutOne
                imgOne="/assets/gallery/ntdv-two/one.png"
                imgTwo="/assets/gallery/ntdv-two/two.png"
                imgThree="/assets/gallery/ntdv-two/three.png"
                imgFour="/assets/gallery/ntdv-two/four.png"
                imgFive="/assets/gallery/ntdv-two/five.png"
                imgSix="/assets/gallery/ntdv-two/six.png"
                imgSeven="/assets/gallery/ntdv-two/seven.png"
                imgEight="/assets/gallery/ntdv-two/eight.png"
              />
              <LayoutTwo
                imgOne="/assets/gallery/ntdv-two/fifteen.png"
                imgTwo="/assets/gallery/ntdv-two/sixteen.png"
                imgThree="/assets/gallery/ntdv-two/seventeen.png"
                imgFour="/assets/gallery/ntdv-two/eighteen.png"
                imgFive="/assets/gallery/ntdv-two/nineteen.png"
                imgSix="/assets/gallery/ntdv-two/twenty.png"
                imgSeven="/assets/gallery/ntdv-two/twenty-one.png"
              />
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-between items-center mb-10">
              <div className="">
                <h2 className="lg:text-[32px] text-[20px] font-semibold">
                  NTDV Publicity Shot
                </h2>
                <div className="flex items-center space-x-2">
                  <MiniCalendarIcon />
                  <p className="lg:text-[16px] text-[14px]">4 Jul 2023</p>
                </div>
              </div>
              <NavLink
                to="/gallery/ntdv-two"
                className="lg:text-[20px] underline text-[#00689e] font-semibold"
              >
                See all
              </NavLink>
            </div>

            <div className="space-y-6">
              <LayoutOne
                imgOne="/assets/gallery/ntdv/img-one.png"
                imgTwo="/assets/gallery/ntdv/img-two.png"
                imgThree="/assets/gallery/ntdv/img-three.png"
                imgFour="/assets/gallery/ntdv/img-four.png"
                imgFive="/assets/gallery/ntdv/img-five.png"
                imgSix="/assets/gallery/ntdv/img-six.png"
                imgSeven="/assets/gallery/ntdv/img-seven.png"
                imgEight="/assets/gallery/ntdv/img-eight.png"
              />
              <LayoutTwo
                imgOne="/assets/gallery/ntdv/img-eight.png"
                imgTwo="/assets/gallery/ntdv/img-nine.png"
                imgThree="/assets/gallery/ntdv/img-ten.png"
                imgFour="/assets/gallery/ntdv/img-eleven.png"
                imgFive="/assets/gallery/ntdv/img-twelve.png"
                imgSix="/assets/gallery/ntdv/img-thirteen.png"
                imgSeven="/assets/gallery/ntdv/img-fourteen.png"
              />
            </div>
          </div>

          <div className="mt-20">
            <div className="flex justify-between items-center mb-10">
              <div className="">
                <h2 className="lg:text-[32px] text-[20px] font-semibold">
                  Tax Debate 6.0
                </h2>
                <div className="flex items-center space-x-2">
                  <MiniCalendarIcon />
                  <p className="lg:text-[16px] text-[14px]">
                    30th January, 2023
                  </p>
                </div>
              </div>
              <NavLink
                to="/gallery/tax-debate"
                className="lg:text-[20px] underline text-[#00689e] font-semibold"
              >
                See all
              </NavLink>
            </div>

            <div className="space-y-6">
              <LayoutOne
                imgOne="/assets/gallery/debate/one.png"
                imgTwo="/assets/gallery/debate/two.png"
                imgThree="/assets/gallery/debate/three.png"
                imgFour="/assets/gallery/debate/four.png"
                imgFive="/assets/gallery/debate/five.png"
                imgSix="/assets/gallery/debate/six.png"
                imgSeven="/assets/gallery/debate/seven.png"
                imgEight="/assets/gallery/debate/eight.png"
              />
              <LayoutTwo
                imgOne="/assets/gallery/debate/eight.png"
                imgTwo="/assets/gallery/debate/nine.png"
                imgThree="/assets/gallery/debate/ten.png"
                imgFour="/assets/gallery/debate/eleven.png"
                imgFive="/assets/gallery/debate/twelve.png"
                imgSix="/assets/gallery/debate/thirteen.png"
                imgSeven="/assets/gallery/debate/fourteen.png"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  );
};

export default Gallery;
