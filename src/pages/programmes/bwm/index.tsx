import { NavLink } from "react-router-dom";
import Container from "../../../component/defaults/Container";
import Footer from "../../../component/defaults/Footer";
import Header from "../../../component/defaults/Header";
import { programmeItems } from "../../../component/rawitems/ProgrammeItems";

const Bwm = () => {
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
                className={`${item.title === "Bi-weekly meetings" ? "border-[#00689E] text-[#00689E] font-semibold" : "text-[#808080] border-[#808080]"} border rounded-full cursor-pointer py-3 px-6`}
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="flex lg:flex-row flex-col justify-between space-x-10 lg:mt-20 mt-6">
            <div className="lg:w-[50%] w-[100%]">
              <img
                src="/assets/programme-imgs/bwm-one.png"
                alt="img"
                className="w-[100%] lg:h-[569px] h-[370px] rounded-3xl object-cover"
              />
            </div>
            <div className="lg:w-[50%] w-[100%] flex flex-col lg:mt-0 mt-6 justify-between">
              <img
                src="/assets/programme-imgs/bwm-two.png"
                alt="img"
                className="w-[100%] lg:h-[273px] h-[370px] object-cover rounded-3xl"
              />
              <img
                src="/assets/programme-imgs/bwm-three.png"
                alt="img"
                className="w-[100%] lg:h-[273px] h-[370px] object-cover lg:mt-0 mt-6 rounded-3xl"
              />
            </div>
          </div>

          <div className="lg:text-[20px]">
            <h2 className="lg:text-[40px] text-[24px] font-semibold lg:mt-10 mt-6">
              Our bi-weekly meetings
            </h2>
            <p className="lg:mt-10 mt-6">
              The bi-weekly meetings are regular gatherings held every two weeks
              to engage members in discussions, workshops, and planning
              sessions. These meetings provide a platform for members—who come
              from diverse academic backgrounds including law, accounting,
              finance etc, to deepen their understanding of tax issues, share
              ideas, and prepare for upcoming events. The sessions often feature
              guest speakers, interactive presentations, and training on skills
              like public speaking and debating, helping members build both
              technical tax knowledge and professional competencies.
            </p>
            <p className="lg:mt-10 mt-6">
              These bi-weekly meetings are central to the club’s mission to
              increase youth tax literacy and foster a tax-conscious culture
              amongst students. By maintaining consistent engagement through
              these meetings, the club ensures that members remain active,
              informed, and equipped to contribute meaningfully to Nigeria’s tax
              education landscape. The meetings are sometimes held virtually via
              platforms like Google Meet, making them accessible to a wider
              audience.
            </p>

            <p className="lg:mt-10 mt-6">
              The bi-weekly meetings are a vital component of Club’s sustained
              impact, enabling continuous learning, networking, and
              collaboration among future tax professionals. They complement the
              club’s social media educational content and other outreach
              activities, creating an environment where the students can grow
              intellectually and professionally.
            </p>

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

export default Bwm;
