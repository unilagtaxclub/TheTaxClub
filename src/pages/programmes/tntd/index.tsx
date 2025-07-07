import { NavLink } from "react-router-dom";
import Container from "../../../component/defaults/Container";
import Footer from "../../../component/defaults/Footer";
import Header from "../../../component/defaults/Header";
import { programmeItems } from "../../../component/rawitems/ProgrammeItems";

const Tntd = () => {
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
                className={`${item.title === "The National Tax Debate" ? "border-[#00689E] text-[#00689E] font-semibold" : "text-[#808080] border-[#808080]"} border rounded-full cursor-pointer py-3 px-6`}
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="flex lg:flex-row flex-col justify-between space-x-10 lg:mt-20 mt-6">
            <div className="lg:w-[50%] w-[100%]">
              <img
                src="/assets/programme-imgs/tntd-one.png"
                alt="img"
                className="w-[100%] lg:h-[569px] h-[370px] rounded-3xl object-cover"
              />
            </div>
            <div className="lg:w-[50%] w-[100%] flex flex-col lg:mt-0 mt-6 justify-between">
              <img
                src="/assets/programme-imgs/tntd-two.png"
                alt="img"
                className="w-[100%] lg:h-[273px] h-[370px] object-cover rounded-3xl"
              />
              <img
                src="/assets/programme-imgs/tntd-three.png"
                alt="img"
                className="w-[100%] lg:h-[273px] h-[370px] object-cover lg:mt-0 mt-6 rounded-3xl"
              />
            </div>
          </div>

          <div className="lg:text-[20px]">
            <h2 className="lg:text-[40px] text-[24px] font-semibold lg:mt-10 mt-6">
              The National Tax Debate (NTD)
            </h2>
            <p className="lg:mt-10 mt-6">
              The National Tax Debate, pioneered in the year 2014, is the
              flagship event of The Tax Club, designed to advance tax education,
              stimulate intellectual engagement, and promote tax awareness among
              Nigerian students.
            </p>
            <p>
              The National Tax Debate aims to foster a deeper understanding of
              taxation and fiscal policy among youths, recognizing that
              increasing youth tax literacy is critical for improving Nigeria’s
              overall tax compliance and civic responsibility. This initiative
              brings together students from various academic backgrounds (law,
              accounting, economics, and others) to debate pressing tax issues,
              encouraging research, public speaking, and critical thinking.
            </p>

            <div className="space-y-4 lg:mt-10 mt-6">
              <p>The debate typically features multiple stages:</p>
              <div className="ml-4 space-y-2">
                <p>
                  - Essay Submission: Teams submit essays on selected
                  tax-related topics as a qualifying round.
                </p>
                <p>
                  - Preliminary Debates: Qualified teams participate in debate
                  rounds on specific themes.
                </p>
                <p>
                  - Final Presentations: Finalists deliver presentations on the
                  main stage, often accompanied by PowerPoint slides, on the
                  main theme of the event, followed by Q&A sessions with judges
                  and other teams.
                </p>
                <p>
                  - Impromptu Debates: Some editions include spontaneous debate
                  rounds to test participants’ ability to think on their feet.
                </p>
              </div>
            </div>

            <p className="lg:mt-10 mt-6">
              The debate attracts teams from leading universities across
              Nigeria, including UNILAG, University of Ibadan (UI), University
              of Nigeria (UNN), University of Benin (UNIBEN), University of
              Ilorin (UNILORIN), Lagos State University (LASU), Nnamdi Azikiwe
              University (UNIZIK), amongst others. Over the years, the event has
              grown in prestige, serving as a model for similar initiatives in
              other institutions and helping to establish tax clubs nationwide.
            </p>
            <p className="lg:mt-10 mt-6">
              The eighth edition (2024) was held at the J.F. Ade Ajayi Main
              Auditorium, UNILAG, with the theme: Reimagining Fiscal Strategies
              for Economic Growth and Development. Teams progressed through
              essay submissions, preliminary debates (e.g., “Give to Caesar vs.
              Take from Caesar: Making a case for Tax Equity”), and final
              presentations on the main theme. The event included a Q&A session
              and impromptu debate rounds, with prizes awarded to top teams
              (e.g., UI’s team won ₦150,000 as second runner-up). Earlier
              editions have covered topics like the criminalization of tax
              avoidance, taxation of illegal income, and the impact of free
              trade zones on economic development.
            </p>

            <div className="space-y-4 lg:mt-10 mt-6">
              <p>The National Tax Debate has been widely recognized for:</p>
              <div className="ml-4 space-y-2">
                <p>
                  - Promoting tax awareness and education among Nigerian youths.
                </p>
                <p>
                  - Providing a platform for discussing fiscal issues and
                  proposing innovative solutions for Nigeria’s economic
                  challenges.
                </p>
                <p>
                  - Encouraging comparative analysis of tax issues in Nigeria
                  and internationally, aiming for holistic, practical solutions.
                </p>
                <p>
                  - Building a network of future tax professionals and fostering
                  partnerships with public and private sector organizations.
                </p>
              </div>
            </div>

            <button className="px-20 py-3 lg:mt-20 lg:w-auto w-[100%] mt-6 font-semibold text-[#fff] bg-[#00689e] rounded-xl">
              <NavLink to="https://forms.gle/MuKfmBBhTaskt2TQ9" target="_blank">
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

export default Tntd;
