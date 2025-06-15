import { NavLink } from "react-router-dom";
import Container from "../../../component/defaults/Container";
import Footer from "../../../component/defaults/Footer";
import Header from "../../../component/defaults/Header";
import { publicationItems } from "../../../component/rawitems/PublicationItems";
import { DownloadIcon } from "../../../component/svgs/Icons";

const Anthology = () => {
  return (
    <Container>
      <div className="bg-[#f2f2f2] min-h-screen pt-10">
        <Header active="Publications" />
        <div className="w-[90vw] lg:w-[80vw] mx-auto mt-10 pb-10">
          <div className="lg:flex hidden items-center flex-wrap gap-6 mb-10 text-[14px]">
            {publicationItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.id}
                className={`${item.title === "The Tax Anthology" ? "border-[#00689E] text-[#00689E] font-semibold" : "text-[#808080] border-[#808080]"} border rounded-full cursor-pointer py-3 px-6`}
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="mt-10 flex justify-between lg:flex-row flex-col space-y-6 lg:space-y-0 lg:space-x-4">
            <div className="bg-[#fff] p-4 rounded-3xl lg:w-[33%]">
              <img
                src="/assets/anthology-imgs/img-one.png"
                className="w-[100%] h-[240px] object-cover rounded-2xl"
              />
              <div className="flex justify-between items-center mt-4">
                <button className="text-[#FF9E48] bg-[#FF9E4833] text-[14px] font-semibold px-6 py-2 rounded-lg">
                  Volume 5
                </button>
                <span className="text-[14px] text-[#808080]">
                  October, 2021
                </span>
              </div>
              <h2 className="text-[24px] font-semibold mt-6 mb-10">
                The Tax Anthology (2021)
              </h2>
              <a
                href="/downloads/THE TAX ANTHOLOGY 2021.pdf"
                download
                className="flex justify-center items-center space-x-3 text-[14px] font-semibold text-[#fff] bg-[#00689E] w-[100%] rounded-lg py-3"
              >
                <span>Download</span>
                <DownloadIcon />
              </a>
            </div>
            <div className="bg-[#fff] p-4 rounded-3xl lg:w-[33%]">
              <img
                src="/assets/anthology-imgs/img-two.png"
                className="w-[100%] h-[240px] object-cover rounded-2xl"
              />
              <div className="flex justify-between items-center mt-4">
                <button className="text-[#FF9E48] bg-[#FF9E4833] text-[14px] font-semibold px-6 py-2 rounded-lg">
                  Volume 4
                </button>
                <span className="text-[14px] text-[#808080]">August, 2019</span>
              </div>
              <h2 className="text-[24px] font-semibold mt-6 mb-10">
                The Tax Anthology (2019)
              </h2>
              <a
                href="/downloads/THE TAX ANTHOLOGY 2019.pdf"
                download
                className="flex justify-center items-center space-x-3 text-[14px] font-semibold text-[#fff] bg-[#00689E] w-[100%] rounded-lg py-3"
              >
                <span>Download</span>
                <DownloadIcon />
              </a>
            </div>
            <div className="bg-[#fff] p-4 rounded-3xl lg:w-[33%]">
              <img
                src="/assets/anthology-imgs/img-three.png"
                className="w-[100%] h-[240px] object-cover rounded-2xl"
              />
              <div className="flex justify-between items-center mt-4">
                <button className="text-[#FF9E48] bg-[#FF9E4833] text-[14px] font-semibold px-6 py-2 rounded-lg">
                  Volume 3
                </button>
                <span className="text-[14px] text-[#808080]">August, 2018</span>
              </div>
              <h2 className="text-[24px] font-semibold mt-6 mb-10">
                The Tax Anthology (2018)
              </h2>
              <a
                href="/downloads/THE TAX ANTHOLOGY 2018.pdf"
                download
                className="flex justify-center items-center space-x-3 text-[14px] font-semibold text-[#fff] bg-[#00689E] w-[100%] rounded-lg py-3"
              >
                <span>Download</span>
                <DownloadIcon />
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  );
};

export default Anthology;
