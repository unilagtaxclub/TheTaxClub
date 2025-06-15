import { NavLink } from "react-router-dom";
import Container from "../../../component/defaults/Container";
import Footer from "../../../component/defaults/Footer";
import Header from "../../../component/defaults/Header";
import { programmeItems } from "../../../component/rawitems/ProgrammeItems";

const Ttw = () => {
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
                className={`${item.title === "The Tax Walk" ? "border-[#00689E] text-[#00689E] font-semibold" : "text-[#808080] border-[#808080]"} border rounded-full cursor-pointer py-3 px-6`}
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="flex lg:flex-row flex-col justify-between space-x-10 lg:mt-20 mt-10">
            <div className="lg:w-[50%] w-[100%] flex flex-col lg:mt-0 mt-6 space-y-6 justify-between">
              <img
                src="/assets/programme-imgs/ttw-one.png"
                alt="img"
                className="w-[100%] lg:h-[273px] h-[370px] object-cover rounded-3xl"
              />
              <img
                src="/assets/programme-imgs/ttw-two.png"
                alt="img"
                className="w-[100%] lg:h-[273px] h-[370px] object-cover lg:mt-0 mt-6 rounded-3xl"
              />
            </div>
            <div className="lg:w-[50%] w-[100%] flex flex-col lg:mt-0 mt-6 space-y-6 justify-between">
              <img
                src="/assets/programme-imgs/ttw-three.png"
                alt="img"
                className="w-[100%] lg:h-[273px] h-[370px] object-cover rounded-3xl"
              />
              <img
                src="/assets/programme-imgs/ttw-four.png"
                alt="img"
                className="w-[100%] lg:h-[273px] h-[370px] object-cover lg:mt-0 mt-6 rounded-3xl"
              />
            </div>
          </div>

          <div className="lg:text-[20px]">
            <h2 className="lg:text-[40px] text-[24px] font-semibold lg:mt-10 mt-6">
              The Tax Walk
            </h2>
            <p className="lg:mt-10 mt-6">
              The Tax Walk is driven towards enabling the capture of
              participants that make up the informal sector into the tax net.
              The Tax Club is aware of the fact that the capture of the informal
              sector is a key missing component of Nigeria’s taxation system.
              Thus, the sector remains largely elusive to the tax authorities
              and is principally unexploited. We also recognize the fact that
              the first step towards ensuring tax compliance in the informal
              sector, is to enlighten and educate the identified stakeholders in
              their work environment in a simply comprehensible manner. This
              walk is usually held in collaboration with the Federal Inland
              Revenue Service (FIRS), and the Lagos Internal Revenue Service
              (LIRS). In the past, this walk has been held within Alade Market,
              Bariga Market, Tejuosho market, Yaba and its environs.
            </p>

            <div className="space-y-4 lg:mt-10 mt-6">
              <p className="font-semibold">Objectives of the walk:</p>
              <div className="ml-4 space-y-2">
                <p>
                  - To orientate, sensitize and educate the populace on the need
                  to pay tax as well as to whom, where, and what taxes they
                  ought to pay:
                </p>
                <p>
                  - To get needful feedback from the informal sector, and the
                  citizenry as a whole on how the tax authorities can serve them
                  better;
                </p>
                <p>
                  - An avenue for tax officials to register new taxpayers,
                  encourage compliant persons, as well as convince defaulters to
                  pay their taxes:
                </p>
                <p>
                  - More often than not, intending taxpayers are deterred by
                  erroneous misconceptions on issues such as filing procedure,
                  amongst others. All of these are usually properly addressed;
                </p>
                <p>
                  - To sensitize the public on the reasons why tax payment is
                  imperative for the Nation as a whole.
                </p>
              </div>
            </div>

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

export default Ttw;
