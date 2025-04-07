import Container from "../../component/defaults/Container";
import Footer from "../../component/defaults/Footer";
import Header from "../../component/defaults/Header";

const About = () => {
  return (
    <Container>
      <div className="bg-[#f2f2f2] min-h-screen pt-10">
        <Header />
        <div className="w-[90vw] lg:w-[80vw] mx-auto lg:mt-20 mt-10 pb-10">
          <h1 className="lg:text-[61px] text-[30px] font-bold mb-4 text-center">Our Story</h1>

          <p className="lg:text-[25px] text-[#232323]">
            The Tax Club, UI started in November 2016 and has since grown
            rapidly under the mentorship of Prof Abiola Sanni the patron of the
            club as well as Dr Peter Oniemola and Dr Samuel Orekoya the Staff
            Advisers. Over the course of its few years, the club has taken giant
            strides in terms of recognition and strategic partnerships with
            relevant professionals and agencies, launching of its first tax
            workshop, membership growth, remarkable events amongst others.
          </p>
          <img
            src="/assets/about.png"
            alt="about-img"
            className="lg:h-[618px] h-[296px] w-[100%] object-cover my-10 rounded-3xl"
          />

          <div className="lg:w-[70%] w-[80%] mx-auto">
            <h1 className="lg:text-[40px] text-[24px] lg:text-start text-center font-bold mb-4">Vision</h1>
            <p className="lg:text-[25px] text-[#232323]">
              To play a pivotal role in taking Taxation in Nigeria to its
              rightful place by inciting unprecedented interest in the field,
              fostering intellectual vibrancy, and sustaining the heights
              attained.
            </p>

            <h1 className="lg:text-[40px] text-[24px] lg:text-start text-center font-bold mb-4 mt-10">
              Vision
            </h1>
            <p className="lg:text-[25px] text-[#232323]">
              To serve as a breeding ground for Nigeria&apos;s intellectually vibrant
              tax-oriented youth by promoting team spirit, harnessing
              leadership, and research skills, organising healthy legal
              competitions, facilitating training and mentorship programs,
              creating networking platforms, and consolidating development
              efforts with other institutions nationwide
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </Container>
  );
};

export default About;
