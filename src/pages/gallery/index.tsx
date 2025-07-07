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
        <div className="bg-[url('/assets/hero-imgs/gallery-hero-img.png')] lg:h-[581px] bg-cover bg-no-repeat">
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
            <NavLink
              to="#"
              className="lg:text-[32px] text-[20px] font-semibold"
            >
              NTD 8.0
            </NavLink>
            <div className="flex items-center space-x-2">
              <MiniCalendarIcon />
              <p className="lg:text-[16px] text-[14px]">30th February 2023</p>
            </div>

            <div className="space-y-6 mt-10">
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
                imgOne="/assets/gallery/ntdv-two/nine.png"
                imgTwo="/assets/gallery/ntdv-two/ten.png"
                imgThree="/assets/gallery/ntdv-two/eleven.png"
                imgFour="/assets/gallery/ntdv-two/twelve.png"
                imgFive="/assets/gallery/ntdv-two/thirteen.png"
                imgSix="/assets/gallery/ntdv-two/fourteen.png"
                imgSeven="/assets/gallery/ntdv-two/five.png"
              />
            </div>
          </div>

          <div className="mt-10">
            <NavLink
              to="https://drive.google.com/drive/folders/1KBgkL7SlddepbsKrlZTRrOyh4XH6GFXK"
              target="_blank"
              className="lg:text-[32px] text-[20px] font-semibold"
            >
              NTDV Publicity Shot
            </NavLink>
            <div className="flex items-center space-x-2">
              <MiniCalendarIcon />
              <p className="lg:text-[16px] text-[14px]">4 Jul 2023</p>
            </div>

            <div className="space-y-6 mt-10">
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
            <NavLink
              to="https://drive.google.com/drive/u/0/folders/15nt9cA6BpE7m58oW7wAaYJ4UUKgKMV2Z"
              target="_blank"
              className="lg:text-[32px] text-[20px] font-semibold"
            >
              National Tax Debate 7.0
            </NavLink>
            <div className="flex items-center space-x-2">
              <MiniCalendarIcon />
              <p className="lg:text-[16px] text-[14px]">30th January, 2023</p>
            </div>

            <div className="space-y-6 mt-10">
              <LayoutTwo
                imgOne="/assets/gallery/ntdv-two/fifteen.png"
                imgTwo="/assets/gallery/ntdv-two/sixteen.png"
                imgThree="/assets/gallery/ntdv-two/seventeen.png"
                imgFour="/assets/gallery/ntdv-two/eighteen.png"
                imgFive="/assets/gallery/ntdv-two/nineteen.png"
                imgSix="/assets/gallery/ntdv-two/twenty.png"
                imgSeven="/assets/gallery/ntdv-two/twenty-one.png"
              />
              <LayoutOne
                imgOne="/assets/gallery/ntdv-two/twenty-two.png"
                imgTwo="/assets/gallery/ntdv-two/twenty-three.png"
                imgThree="/assets/gallery/ntdv-two/twenty-four.png"
                imgFour="/assets/gallery/ntdv-two/twenty-five.png"
                imgFive="/assets/gallery/ntdv-two/twenty-six.png"
                imgSix="/assets/gallery/ntdv-two/twenty-seven.png"
                imgSeven="/assets/gallery/ntdv-two/twenty-eight.png"
                imgEight="/assets/gallery/ntdv-two/twenty-nine.png"
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
