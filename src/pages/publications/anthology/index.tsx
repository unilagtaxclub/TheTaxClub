import FeaturedArticleCard from "../../../component/cards/FeaturedArticleCard";
import Container from "../../../component/defaults/Container";
import Footer from "../../../component/defaults/Footer";
import Header from "../../../component/defaults/Header";
import { Avatar, EmailIcon } from "../../../component/svgs/Icons";

const Anthology = () => {
  return (
    <Container>
      <div className="bg-[#f2f2f2] min-h-screen pt-10">
        <Header />
        <div className="w-[90vw] lg:w-[80vw] mx-auto mt-10 pb-10">
          <div className="w-[100%] lg:h-[644px] h-[296px] bg-[url('/assets/coa.png')] bg-cover bg-center text-white rounded-xl">
            <div className="flex flex-col justify-end bg-black/50 lg:pb-20 lg:space-y-6 space-y-3 rounded-lg lg:px-16 pb-6 px-6 h-[100%]">
              <div className="flex">
                <p className="bg-black/30 text-[#fff] text-[14px] py-1 px-3 rounded-lg">
                  Tax Law
                </p>
              </div>
              <h2 className="lg:text-[40px] text-[18px] font-semibold">
                National Tax Debate
              </h2>
              <p className="lg:text-[24px] text-[16px] lg:w-[50%] w-[90%]">
                Topic: Maximising Retirement Savings with Profit Sharing Plans
                for Solopreneurs
              </p>

              <div className="flex items-center space-x-3 text-[14px] lg:text-[16px]">
                <div className="lg:scale-100 scale-50">
                  <Avatar />
                </div>
                <p>Admin</p>
                <p>12th October 2023</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex justify-between items-center">
              <h2 className="lg:text-[30px] text-[20px] font-semibold">Anthology</h2>
              <p className="lg:text-[20px] underline text-[#00689e] font-semibold">
                See all
              </p>
            </div>

            <div className="mt-6 space-y-6">
              <FeaturedArticleCard
                imgSrc="/assets/coa.png"
                category="Tax Law"
                title="National Tax Debate"
                description="Topic: Maximising Retirement Savings with Profit Sharing Plans for Solopreneurs"
                author="Admin"
                date="12th October 2023"
                avatarImgSrc="/assets/blog-imgs/bl-avatar-1.png"
              />
              <FeaturedArticleCard
                imgSrc="/assets/coa.png"
                category="Tax Law"
                title="National Tax Debate"
                description="Topic: Maximising Retirement Savings with Profit Sharing Plans for Solopreneurs"
                author="Admin"
                date="12th October 2023"
                avatarImgSrc="/assets/blog-imgs/bl-avatar-1.png"
              />
              <FeaturedArticleCard
                imgSrc="/assets/coa.png"
                category="Tax Law"
                title="National Tax Debate"
                description="Topic: Maximising Retirement Savings with Profit Sharing Plans for Solopreneurs"
                author="Admin"
                date="12th October 2023"
                avatarImgSrc="/assets/blog-imgs/bl-avatar-1.png"
              />
            </div>
            <div className="flex flex-col text-center lg:w-[35%] my-20 mx-auto space-y-4">
              <h2 className="lg:text-[25px] font-semibold">
                Join our newsletter to stay up to date on all tax related
                contents
              </h2>
              <div className="flex items-center lg:flex-row flex-col space-y-4 lg:space-y-0 lg:space-x-3 w-[100%]">
                <div className="flex items-center border border-[#ccc] bg-[#fff] space-x-3 rounded-lg px-4 py-2 w-[90%] lg:w-[65%]">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    className="w-[100%] outline-none border-none"
                  />
                  <EmailIcon />
                </div>
                <button className="bg-[#00689e] text-[#fff] text-[16px] font-semibold rounded-lg py-2 px-6 lg:w-[30%] w-[90%]">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <FeaturedArticleCard
                imgSrc="/assets/coa.png"
                category="Tax Law"
                title="National Tax Debate"
                description="Topic: Maximising Retirement Savings with Profit Sharing Plans for Solopreneurs"
                author="Admin"
                date="12th October 2023"
                avatarImgSrc="/assets/blog-imgs/bl-avatar-1.png"
              />
              <FeaturedArticleCard
                imgSrc="/assets/coa.png"
                category="Tax Law"
                title="National Tax Debate"
                description="Topic: Maximising Retirement Savings with Profit Sharing Plans for Solopreneurs"
                author="Admin"
                date="12th October 2023"
                avatarImgSrc="/assets/blog-imgs/bl-avatar-1.png"
              />
              <FeaturedArticleCard
                imgSrc="/assets/coa.png"
                category="Tax Law"
                title="National Tax Debate"
                description="Topic: Maximising Retirement Savings with Profit Sharing Plans for Solopreneurs"
                author="Admin"
                date="12th October 2023"
                avatarImgSrc="/assets/blog-imgs/bl-avatar-1.png"
              />
            </div>

            <div className="flex items-center justify-center mt-10 lg:mb-[15vh]">
              <button className="border border-[#00689e] text-[#00689e] font-semibold text-[18px] py-3 px-10 rounded-lg">
                Load More
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  );
};

export default Anthology;
