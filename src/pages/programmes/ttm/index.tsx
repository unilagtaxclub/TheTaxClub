import { NavLink } from "react-router-dom";
import Container from "../../../component/defaults/Container";
import Footer from "../../../component/defaults/Footer";
import Header from "../../../component/defaults/Header";
import { programmeItems } from "../../../component/rawitems/ProgrammeItems";

const Ttm = () => {
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
                className={`${item.title === "The Tax Masterclass" ? "border-[#00689E] text-[#00689E] font-semibold" : "text-[#808080] border-[#808080]"} border rounded-full cursor-pointer py-3 px-6`}
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="flex lg:flex-row flex-col justify-between space-x-10 lg:mt-20 mt-6">
            <div className="lg:w-[50%] w-[100%]">
              <img
                src="/assets/programme-imgs/ttm-one.png"
                alt="img"
                className="w-[100%] lg:h-[569px] h-[370px] rounded-3xl object-cover"
              />
            </div>
            <div className="lg:w-[50%] w-[100%] flex flex-col lg:mt-0 mt-6 justify-between">
              <img
                src="/assets/programme-imgs/ttm-two.png"
                alt="img"
                className="w-[100%] lg:h-[273px] h-[370px] object-cover rounded-3xl"
              />
              <img
                src="/assets/programme-imgs/ttm-three.png"
                alt="img"
                className="w-[100%] lg:h-[273px] h-[370px] object-cover lg:mt-0 mt-6 rounded-3xl"
              />
            </div>
          </div>

          <div className="lg:text-[20px]">
            <h2 className="lg:text-[40px] text-[24px] font-semibold lg:mt-10 mt-6">
              The Tax Masterclass
            </h2>
            <p className="lg:mt-10 mt-6">
              The Tax Masterclass is a flagship educational initiative that
              intends to deepen students’ practical and theoretical
              understanding of taxation. It brings top tax practitioners
              directly to students, offering hands-on learning experiences that
              extend beyond traditional classroom instruction. The program is
              open to both members and non-members of the Tax Club, primarily
              targeting students from faculties such as law, accounting,
              business, and finance. Participants also have the opportunity to
              earn certification upon completion, adding professional value to
              their academic pursuits.
            </p>
            <p className="lg:mt-10 mt-6">
              This initiative complements our other programs like the National
              Tax Debate and the Tax Summer School by providing specialized,
              practitioner-led training focused on real-world tax issues and
              professional skills. The Tax Masterclass supports the club’s
              broader mission of increasing youth tax literacy, promoting public
              education, and fostering networking opportunities between students
              and tax professionals from both the public and private sectors. By
              equipping students with a deeper understanding of tax systems, the
              program also contributes to improving tax compliance and civic
              responsibility among Nigerian youths.
            </p>

            <p className="lg:mt-10 mt-6">
              The impact of the Tax Masterclass is significant in preparing
              students for careers in taxation and fiscal policy. It bridges the
              gap between academic theory and professional practice, enhancing
              participants’ employability and competence in the tax profession.
              As part of The Tax Club’s innovative approach to tax education,
              the Masterclass has helped inspire the creation of tax clubs
              across Nigerian universities and fostered partnerships with
              secondary schools, further expanding the reach and influence of
              youth tax education in Nigeria.
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

export default Ttm;
