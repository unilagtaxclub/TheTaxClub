import { NavLink } from "react-router-dom";
import Container from "../../../component/defaults/Container";
import Footer from "../../../component/defaults/Footer";
import Header from "../../../component/defaults/Header";
import { programmeItems } from "../../../component/rawitems/ProgrammeItems";

const Tandt = () => {
  return (
    <Container>
      <div className="lg:mt-[10vh] mt-6">
        <Header active="Our Programmes" />
        <div className="lg:w-[80vw] w-[90vw] lg:mt-14 mx-auto">
          <div className="lg:flex hidden items-center flex-wrap gap-6 text-[14px]">
            {programmeItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.id}
                className={`${item.title === "Tea and Taxes" ? "border-[#00689E] text-[#00689E] font-semibold" : "text-[#808080] border-[#808080]"} border rounded-full cursor-pointer py-3 px-6`}
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="lg:text-[20px]">
            <h2 className="lg:text-[40px] text-[24px] font-semibold lg:mt-10 mt-6">
              Tea and Taxes
            </h2>
            <p className="lg:mt-10 mt-6">
              Tea and Taxes is a signature initiative of Club designed as a
              breakfast meeting that brings together tax practitioners,
              students, and other stakeholders for informal yet insightful
              discussions about taxation. Unlike traditional seminars or
              lectures, Tea and Taxes creates a relaxed, conversational
              atmosphere, often over breakfast, where participants can freely
              exchange ideas, share experiences, and debate topical tax issues
              relevant to Nigeria’s fiscal landscape.
            </p>
            <p className="lg:mt-10 mt-6">
              The event is part of the club’s broader mission to increase youth
              tax literacy, educate the wider public, and provide networking
              opportunities between students and professionals from both the
              private and public sectors. Tea and Taxes sessions typically
              feature guest speakers or panelists who are seasoned tax experts,
              offering attendees the chance to learn directly from practitioners
              and ask questions about real-world tax challenges and
              developments. This format encourages active participation,
              critical thinking, and professional growth among students, making
              tax education more engaging and accessible.
            </p>

            <button className="px-20 py-3 lg:mt-20 lg:w-auto w-[100%] mt-6 font-semibold text-[#fff] bg-[#00689e] rounded-xl">
              <NavLink to="https://forms.gle/fUCN99VZVev6WNLTA" target="_blank">
                Support this Cause
              </NavLink>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Tandt;
