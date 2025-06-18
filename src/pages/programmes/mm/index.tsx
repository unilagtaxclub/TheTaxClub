import { NavLink } from "react-router-dom";
import Container from "../../../component/defaults/Container";
import Footer from "../../../component/defaults/Footer";
import Header from "../../../component/defaults/Header";
import { programmeItems } from "../../../component/rawitems/ProgrammeItems";

const Mm = () => {
  return (
    <Container>
      <div className="lg:mt-[10vh] mt-6">
        <Header active="Programmes" />
        <div className="lg:w-[80vw] w-[90vw] lg:mt-14 mx-auto">
          <div className="lg:flex hidden items-center flex-wrap gap-6 text-[14px]">
            {programmeItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.id}
                className={`${item.title === "Monday Memo" ? "border-[#00689E] text-[#00689E] font-semibold" : "text-[#808080] border-[#808080]"} border rounded-full cursor-pointer py-3 px-6`}
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="flex lg:flex-row flex-col justify-between space-x-10 lg:mt-20 mt-6">
            <div className="lg:w-[50%] w-[100%]">
              <img
                src="/assets/programme-imgs/mm-one.png"
                alt="img"
                className="w-[100%] lg:h-[569px] h-[370px] rounded-3xl object-cover"
              />
            </div>
            <div className="lg:w-[50%] w-[100%] flex flex-col lg:mt-0 mt-6 justify-between">
              <img
                src="/assets/programme-imgs/mm-two.png"
                alt="img"
                className="w-[100%] lg:h-[273px] h-[370px] object-cover rounded-3xl"
              />
              <img
                src="/assets/gallery/ntdv/img-seventeen.png"
                alt="img"
                className="w-[100%] lg:h-[273px] h-[370px] object-cover lg:mt-0 mt-6 rounded-3xl"
              />
            </div>
          </div>

          <div className="lg:text-[20px]">
            <h2 className="lg:text-[40px] text-[24px] font-semibold lg:mt-10 mt-6">
              Monday Memo
            </h2>
            <p className="lg:mt-10 mt-6">
              The Monday Memo is a regular publication initiative designed to
              keep students and the wider community informed about current
              developments, trends, and insights in taxation. Released every
              Monday, this newsletter-style memo provides updates on tax laws,
              policy changes, economic implications, and relevant news both
              within Nigeria and internationally. The Monday Memo serves as an
              accessible resource for continuous learning, helping to enhance
              tax literacy and awareness among its readers.
            </p>
            <p className="lg:mt-10 mt-6">
              The content of the Monday Memo typically explains and breaks down
              complex tax concepts for easy understanding to the layman. It also
              features contributions from club members, fostering a
              collaborative environment for knowledge sharing. By delivering
              timely and relevant information, the memo supports the club’s
              broader mission to educate and engage youths on taxation issues,
              bridging the gap between academic theory and practical
              understanding.
            </p>

            <p className="lg:mt-10 mt-6">
              The Monday Memo has become an important communication tool for The
              Tax Club UNILAG, helping to sustain interest and participation in
              tax education initiatives throughout the academic year.
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

export default Mm;
