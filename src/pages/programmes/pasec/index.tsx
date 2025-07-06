import { NavLink } from "react-router-dom";
import Container from "../../../component/defaults/Container";
import Footer from "../../../component/defaults/Footer";
import Header from "../../../component/defaults/Header";
import { programmeItems } from "../../../component/rawitems/ProgrammeItems";

const Pasec = () => {
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
                className={`${item.title === "Prof. A. Sanni Essay Competition" ? "border-[#00689E] text-[#00689E] font-semibold" : "text-[#808080] border-[#808080]"} border rounded-full cursor-pointer py-3 px-6`}
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="lg:text-[20px]">
            <h2 className="lg:text-[40px] text-[24px] font-semibold lg:mt-10 mt-6">
              Prof. Abiola Sanni (SAN) Essay Competition
            </h2>
            <p className="lg:mt-10 mt-6">
              The Professor Abiola Sanni (SAN) Essay Competition is a
              prestigious essay contest organized in honor of Professor Abiola
              Sanni, the founding father of Tax Clubs in Nigeria. The
              competition aims to encourage students to engage deeply with
              tax-related issues, promoting research, critical thinking, and
              awareness about taxation in Nigeria. It serves as a platform for
              participants to explore complex tax topics and contribute ideas
              toward improving tax compliance and fiscal policy in the country.
            </p>
            <p className="lg:mt-10 mt-6">
              The competition is usually conducted in two rounds. In the first
              round, participants submit essays on a given tax theme, with the
              top fifteen essays qualifying for the final round. The final round
              involves more rigorous evaluation, often culminating in awards and
              recognition for the best submissions. Past topics have included
              themes such as effective tax systems, tax equity, and the
              challenges of tax administration in Nigeria. Winners of the
              competition receive prizes and public acknowledgment, which helps
              motivate students to pursue excellence in tax scholarship and
              advocacy.
            </p>
            <p className="lg:mt-10 mt-6">
              Beyond fostering academic excellence, the Abiola Sanni Essay
              Competition plays a vital role in The Tax Club’s mission to
              increase youth tax literacy and public education. The competition
              also honors Professor Sanni’s legacy by inspiring a new generation
              of tax professionals and advocates committed to addressing
              Nigeria’s persistent tax compliance challenges.
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

export default Pasec;
