import Container from "../../component/defaults/Container";
import Header from "../../component/defaults/Header";
import LayoutOne from "../../component/gallery-layouts/LayoutOne";
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
            <h2 className="text-[32px] font-semibold">NTDV Publicity Shot</h2>
            <div className="flex items-center space-x-2 mb-10">
              <MiniCalendarIcon />
              <p>30th January, 2023</p>
            </div>

            <LayoutOne
              imgOne="/assets/gallery/ntdv/img-one.png"
              imgTwo="/assets/gallery/ntdv/img-two.png"
              imgThree="/assets/gallery/ntdv/img-three.png"
              imgFour="/assets/gallery/ntdv/img-four.png"
              imgFive="/assets/gallery/ntdv/img-five.png"
              imgSix="/assets/gallery/ntdv/img-six.png"
              imgSeven="/assets/gallery/ntdv/img-seven.png"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
