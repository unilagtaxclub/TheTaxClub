import { NavLink } from "react-router-dom";
import Container from "../../../component/defaults/Container";
import Footer from "../../../component/defaults/Footer";
import Header from "../../../component/defaults/Header";
import { programmeItems } from "../../../component/rawitems/ProgrammeItems";

const Tt = () => {
  return (
    <Container>
      <div className="lg:mt-[10vh] mt-10">
        <Header active="Programmes" />
        <div className="lg:w-[80vw] w-[90vw] mt-14 mx-auto">
          <div className="lg:flex hidden items-center flex-wrap gap-6 text-[14px]">
            {programmeItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.id}
                className={`${item.title === "#TaxThursday" ? "border-[#00689E] text-[#00689E] font-semibold" : "text-[#808080] border-[#808080]"} border rounded-full cursor-pointer py-3 px-6`}
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="lg:text-[20px]">
            <h2 className="lg:text-[40px] text-[24px] font-semibold lg:mt-10 mt-6">
              #TaxThursday
            </h2>
            <p className="lg:mt-10 mt-6">
              The Tax Thursday is a weekly social media campaign initiated aimed
              at promoting tax awareness and fostering a positive tax culture in
              Nigeria. Held every Thursday, the campaign leverages digital
              platforms especially X (formerly twitter) to disseminate timely,
              relevant, and accessible information about taxation, including
              updates on tax laws, policy changes, and economic implications. By
              engaging a broad online audience, Tax Thursday seeks to increase
              youth tax literacy and encourage voluntary compliance.
            </p>
            <p className="lg:mt-10 mt-6">
              Tax Thursday is recognized for its innovative approach to public
              education, using social media’s reach to connect with young
              Nigerians who make up over 60% of the country’s population. The
              campaign features posts, spaces, infographics, expert opinions,
              vox-pops, and discussions on topical issues, such as recent tax
              reforms. It also provides a platform for interaction, allowing
              followers to ask questions and engage with tax professionals and
              academics affiliated with the Tax Club. The initiative has
              garnered notable endorsements, including public recognition by the
              ex-Vice President of the country, Yemi Osinbajo, underscoring its
              impact and credibility.
            </p>
            <p className="lg:mt-10 mt-6">
              As part of The Tax Club’s broader mission, Tax Thursday
              strengthens the club’s efforts to build a tax-conscious society by
              continuously informing and empowering citizens to understand their
              tax obligations and the benefits of compliance. Through this
              campaign, The Tax Club UNILAG has expanded its influence beyond
              the campus, contributing significantly to the national discourse
              on taxation and fiscal responsibility.
            </p>

            <button className="px-20 py-3 lg:mt-20 lg:w-auto w-[100%] mt-6 font-semibold text-[#fff] bg-[#00689e] rounded-xl">
              Support this Cause
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Tt;
