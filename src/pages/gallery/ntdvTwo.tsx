import { NavLink } from "react-router-dom";
import Container from "../../component/defaults/Container";
import Footer from "../../component/defaults/Footer";
import Header from "../../component/defaults/Header";
import LayoutOne from "../../component/gallery-layouts/LayoutOne";
import LayoutThree from "../../component/gallery-layouts/LayoutThree";
import LayoutTwo from "../../component/gallery-layouts/LayoutTwo";
import { MiniCalendarIcon } from "../../component/svgs/Icons";

const NtdvTwo = () => {
  return (
    <Container>
      <div className="bg-[#f2f2f2] min-h-screen ">
        <div className="bg-[url('/assets/footer-img.png')] lg:h-[581px] bg-cover bg-no-repeat">
          <div className="bg-[rgba(0,0,0,0.6)] text-[#fff] w-[100%] flex flex-col pt-6 lg:pt-20 lg:h-[581px] pb-20 lg:pb-0 lg:px-6">
            <Header active="Gallery" />
            <div className="lg:w-[80vw] w-[90vw] mx-auto mt-10 lg:mt-[30vh]">
              <h2 className="lg:text-[56px] text-[30px] font-semibold">
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
            <div className="mb-10">
              <h2 className="lg:text-[32px] text-[20px] font-semibold">
                NTDV Publicity Shot
              </h2>
              <div className="flex items-center space-x-2">
                <MiniCalendarIcon />
                <p className="lg:text-[16px] text-[14px]">4th July, 2023</p>
              </div>
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
              <LayoutThree
                imgOne="/assets/gallery/ntdv/img-fifteen.png"
                imgTwo="/assets/gallery/ntdv/img-sixteen.png"
                imgThree="/assets/gallery/ntdv/img-seventeen.png"
                imgFour="/assets/gallery/ntdv/img-eighteen.png"
                imgFive="/assets/gallery/ntdv/img-nineteen.png"
                imgSix="/assets/gallery/ntdv/img-twenty.png"
                imgSeven="/assets/gallery/ntdv/img-twenty-one.png"
                imgEight="/assets/gallery/ntdv/img-twenty-two.png"
              />
              <LayoutOne
                imgOne="/assets/gallery/ntdv/img-twenty-three.png"
                imgTwo="/assets/gallery/ntdv/img-twenty-four.png"
                imgThree="/assets/gallery/ntdv/img-twenty-five.png"
                imgFour="/assets/gallery/ntdv/img-twenty-six.png"
                imgFive="/assets/gallery/ntdv/img-twenty-seven.png"
                imgSix="/assets/gallery/ntdv/img-twenty-eight.png"
                imgSeven="/assets/gallery/ntdv/img-twenty-nine.png"
                imgEight="/assets/gallery/ntdv/img-thirty.png"
              />
              <LayoutTwo
                imgOne="/assets/gallery/ntdv/img-thirty-one.png"
                imgTwo="/assets/gallery/ntdv/img-thirty-two.png"
                imgThree="/assets/gallery/ntdv/img-thirty-three.png"
                imgFour="/assets/gallery/ntdv/img-thirty-four.png"
                imgFive="/assets/gallery/ntdv/img-thirty-five.png"
                imgSix="/assets/gallery/ntdv/img-thirty-six.png"
                imgSeven="/assets/gallery/ntdv/img-thirty-seven.png"
                imgEight="/assets/gallery/ntdv/img-thirty-eight.png"
              />
              <LayoutThree
                imgOne="/assets/gallery/ntdv/img-twenty.png"
                imgTwo="/assets/gallery/ntdv/img-thirty-nine.png"
                imgThree="/assets/gallery/ntdv/img-forty.png"
                imgFour="/assets/gallery/ntdv/img-forty-one.png"
                imgFive="/assets/gallery/ntdv/img-forty-two.png"
                imgSix="/assets/gallery/ntdv/img-eight.png"
                imgSeven="/assets/gallery/ntdv/img-nineteen.png"
                imgEight="/assets/gallery/ntdv/img-ten.png"
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

export default NtdvTwo;
