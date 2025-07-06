import { NavLink } from "react-router-dom";
import Container from "../../../component/defaults/Container";
import Footer from "../../../component/defaults/Footer";
import Header from "../../../component/defaults/Header";
import { programmeItems } from "../../../component/rawitems/ProgrammeItems";

const Ttss = () => {
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
                className={`${item.title === "The Tax Summer School" ? "border-[#00689E] text-[#00689E] font-semibold" : "text-[#808080] border-[#808080]"} border rounded-full cursor-pointer py-3 px-6`}
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="lg:text-[20px]">
            <h2 className="lg:text-[40px] text-[24px] font-semibold lg:mt-10 mt-6">
              The Tax Summer School
            </h2>
            <p className="lg:mt-10 mt-6">
              The Tax Summer School is the first of its kind in any University
              in the whole of Nigeria and Sub-Saharan Africa. It is that much
              needed platform for the very best Tax Students all over Nigeria to
              come together in a conglomeration for the sole purpose of
              achieving unprecedented knowledge of taxation as a focal economic
              sector, a formulation of cogent reform policies and amendment of
              our tax laws and career mentorship through one-on-one networking.
              This objectives are to be achieved through several trainings,
              seminars and challenges that keep every delegate up on his feet,
              ready to think and achieve results through the application of
              knowledge acquired during the Summer School.
            </p>
            <p className="lg:mt-10 mt-6">
              The Tax Summer School typically takes place during the academic
              summer break, offering a series of intensive workshops, lectures,
              and interactive sessions. It covers foundational and advanced tax
              topics, such as tax compliance, administration, tax law, and
              fiscal policy, with sessions led by academics, professionals, and
              industry experts. The Summer School also includes group projects,
              discussions, and networking opportunities, enabling students to
              engage with peers and mentors from both public and private
              sectors.
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

export default Ttss;
