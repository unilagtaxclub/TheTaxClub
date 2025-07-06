import { NavLink } from "react-router-dom";
import Container from "../../../component/defaults/Container";
import Footer from "../../../component/defaults/Footer";
import Header from "../../../component/defaults/Header";
import { programmeItems } from "../../../component/rawitems/ProgrammeItems";

const Tte = () => {
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
                className={`${item.title === "The Tax Experience" ? "border-[#00689E] text-[#00689E] font-semibold" : "text-[#808080] border-[#808080]"} border rounded-full cursor-pointer py-3 px-6`}
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="flex lg:flex-row flex-col justify-between space-x-10 lg:mt-20 mt-6">
            <div className="lg:w-[50%] w-[100%]">
              <img
                src="/assets/programme-imgs/tte-one.png"
                alt="img"
                className="w-[100%] lg:h-[569px] h-[370px] rounded-3xl object-cover"
              />
            </div>
            <div className="lg:w-[50%] w-[100%] flex flex-col lg:mt-0 mt-6 justify-between">
              <img
                src="/assets/programme-imgs/tte-two.png"
                alt="img"
                className="w-[100%] lg:h-[273px] h-[370px] object-cover rounded-3xl"
              />
              <img
                src="/assets/programme-imgs/tte-three.png"
                alt="img"
                className="w-[100%] lg:h-[273px] h-[370px] object-cover lg:mt-0 mt-6 rounded-3xl"
              />
            </div>
          </div>

          <div className="lg:text-[20px]">
            <h2 className="lg:text-[40px] text-[24px] font-semibold lg:mt-10 mt-6">
              The Tax Experience
            </h2>
            <p className="lg:mt-10 mt-6">
              The average Tax Club member is met with a plethora of career
              options with little or no practical knowledge on the length and
              breadth of actual work experience in such a sector. The seemingly
              up-to-date ones still desire an avenue to weigh their options
              especially on what area of tax to focus on.
            </p>
            <p className="lg:mt-10 mt-6">
              Thus, the Experience has been tagged the alter-ego of the
              customary career fair. The difference being the reversal of the
              habitual logistics i.e. instead of inviting resource persons to
              address an audience on a topical career, why not approach these
              professionals in their natural workspace thus creating an
              experiential and more practical career exposition.
            </p>

            <p className="lg:mt-10 mt-6">
              It is expected that the participants allotted to each firm will
              fully understand the rudiments of being a tax practitioner. Apart
              from learning first hand from Top Tax Professionals from these
              firms, it is anticipated that the participants will have a slight
              feel of what it is like to work in a challenging tax environment.
              Hence, a clearer perspective on a career choice such as tax will
              undoubtedly lead the participants into making an informed
              profession decision.
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

export default Tte;
