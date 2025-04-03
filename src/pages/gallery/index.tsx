import Container from "../../component/defaults/Container";
import Footer from "../../component/defaults/Footer";
import Header from "../../component/defaults/Header";
import LayoutOne from "../../component/gallery-layouts/LayoutOne";
import LayoutTwo from "../../component/gallery-layouts/LayoutTwo";
import { MiniCalendarIcon } from "../../component/svgs/Icons";

const Gallery = () => {
  return (
    <Container>
      <div className="bg-[#f2f2f2] min-h-screen pt-10">
        <Header />
        <div className="w-[90vw] lg:w-[80vw] mx-auto mt-10 pb-10">
          <div className="flex flex-col text-center items-center justify-center space-y-2">
            <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#808080] py-1 px-3 rounded-full">
              Our Memories
            </h2>
          </div>

          <div className="mt-10">
            <div className="flex justify-between items-center mb-10">
              <div className="">
                <h2 className="text-[32px] font-semibold">
                  NTDV Publicity Shot
                </h2>
                <div className="flex items-center space-x-2">
                  <MiniCalendarIcon />
                  <p>30th January, 2023</p>
                </div>
              </div>
              <p className="lg:text-[20px] underline text-[#00689e] font-semibold">
                See all
              </p>
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
                <h2 className="text-[32px] font-semibold">Tax Debate 6.0</h2>
                <div className="flex items-center space-x-2">
                  <MiniCalendarIcon />
                  <p>30th January, 2023</p>
                </div>
              </div>
              <p className="lg:text-[20px] underline text-[#00689e] font-semibold">
                See all
              </p>
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
