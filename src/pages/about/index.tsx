import Container from "../../component/defaults/Container";
import Footer from "../../component/defaults/Footer";
import Header from "../../component/defaults/Header";
import { RedirectIcon } from "../../component/svgs/Icons";

const About = () => {
  const scrollToTarget = (targetId: string, duration = 700) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return (
    <Container>
      <div className="lg:bg-[url('/assets/hero-imgs/img-eleven.png')] bg-[url('/assets/hero-imgs/about-hero-img.png')] lg:min-h-[650px] lg:h-[780px] bg-center lg:bg-cover bg-no-repeat scroll-smooth">
        <div className="bg-[rgba(0,0,0,0.4)] text-[#fff] w-[100%] flex flex-col pt-6 lg:pt-20 lg:min-h-screen pb-20 lg:pb-0 lg:px-6">
          <Header active="About Us" color="#ffffff" />
          <div className="lg:w-[80vw] w-[90vw] text-[#000] mx-auto mt-10 lg:mt-[20vh]">
            <div className="bg-[rgba(255,255,255,0.6)] lg:w-[40%] lg:p-10 p-6 rounded-2xl">
              <h2 className="lg:text-[56px] text-[30px] font-semibold">
                About Us
              </h2>
              <div className="lg:space-y-4 space-y-1 mt-6">
                {[
                  { label: "Our History", id: "history" },
                  { label: "Core Mandate", id: "mandate" },
                  { label: "Aims & Objectives", id: "aims" },
                  { label: "Our Impact", id: "impact" },
                  { label: "Our Achievements", id: "achievements" },
                ].map(({ label, id }) => (
                  <div
                    key={id}
                    className="flex items-center justify-between lg:text-[20px] text-[16px] text-[#00689E] cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToTarget(id);
                    }}
                  >
                    <span>{label}</span>
                    <div className="lg:scale-100 scale-75">
                      <RedirectIcon />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f2f2] lg:pt-[15vh] pt-20 min-h-screen">
        <div className="lg:w-[80vw] w-[90vw] mx-auto">
          <div className="flex lg:flex-row flex-col-reverse justify-between items-center space-x-10">
            <div className="lg:w-[45%] w-[100%] mx-auto lg:mx-0">
              <img
                src="/assets/about-imgs/img-one.png"
                alt="img"
                className="w-[100% object-cover h-[420px] lg:my-0 my-6 rounded-2xl"
              />
            </div>
            <div id="history" className="space-y-6 lg:w-[55%]">
              <div className="flex">
                <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
                  Our History
                </h2>
              </div>
              <p className="lg:text-[20px]">
                The Tax Club UNILAG was founded in 2005 with the aim of
                deepening understanding of tax, propagating the concept of tax,
                and providing an opportunity to network with industry
                practitioners. In essence, it could serve as a means for
                students with an interest in tax to build upon that interest and
                prepare for a career in the field. The founding members of the
                club considered various names, such as the Tax Awareness Forum
                UNILAG, before settling on simply the “The Tax Club”. Formed in
                the 2005/2006 academic session with only about twenty members,
                and a vision to increase tax education, particularly among
                youths, the club has made giant strides and can boast of up to
                380 members across the faculties of Law, Management Sciences,
                Social Sciences and Arts.
              </p>
            </div>
          </div>
          <p className="lg:text-[20px] mt-6">
            Initially, it faced problems of apathy, lack of publicity, and
            logistics. However, the club was able to find its footing by
            leveraging the support of the subnational tax authority, the Lagos
            Internal Revenue Service (LIRS); the national tax authority, the
            Federal Inland Revenue Service (FIRS); the professional body of tax
            practitioners, the Chartered Institute of Taxation, Nigeria (CITN);
            and reputable corporate organisations including the Big 4. This is
            in large part to the strong support from its founder, Professor
            Abiola Sanni. Through this network, members were able to organise
            seminars and invite reputable tax experts, provide internships for
            members in the taxation industry, and send representatives to
            taxation conferences.
          </p>
          <p className="lg:text-[20px] mt-4">
            An important part of the Club’s history is that it was the first
            student association within the Faculty of Law, University of Lagos,
            outside of chambers. This meant that substantial effort had to be
            put into convincing individuals of the benefits of the Club within
            the faculty. Some challenges were unique at the time, due to the
            novelty of a student organisation within the faculty.
          </p>

          {/* CORE MANDATE */}
          <div
            id="mandate"
            className="flex lg:flex-row-reverse flex-col-reverse mt-20 justify-between items-center space-x-10"
          >
            <div className="lg:w-[40%] w-[100%] mx-auto lg:mx-0">
              <img
                src="/assets/about-imgs/img-two.png"
                alt="img"
                className="w-[100%] object-cover h-[420px] lg:my-0 my-6 rounded-2xl"
              />
            </div>
            <div className="space-y-6 lg:w-[55%]">
              <div className="flex">
                <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
                  Core Mandate
                </h2>
              </div>
              <div className="space-y-3">
                <p className="lg:text-[20px]">
                  - To serve as a veritable machinery for providing sound and
                  qualitative knowledge of taxation for members.
                </p>
                <p className="lg:text-[20px]">
                  - To incite unprecedented interest in Nigerian Taxation
                  amongst Nigerian youth with a view to ensuring compliance and
                  participation.
                </p>
                <p className="lg:text-[20px]">
                  - To promote valuable soft skills amongst students with the
                  aim of developing leadership, team spirit, research and
                  organisational skills that will be useful in the mainstream
                  economy.
                </p>
                <p className="lg:text-[20px]">
                  - To play a pivotal role in taking taxation in Nigeria to its
                  rightful place, thereafter, sustaining its attained heights.
                </p>
              </div>
            </div>
          </div>

          {/* AIMS */}
          <div
            id="aims"
            className="flex lg:flex-row flex-col-reverse mt-20 justify-between items-center space-x-10"
          >
            <div className="lg:w-[40%] w-[100%] mx-auto lg:mx-0">
              <img
                src="/assets/about-imgs/img-three.png"
                alt="img"
                className="w-[100%] object-cover h-[420px] lg:my-0 my-6 rounded-2xl"
              />
            </div>
            <div className="space-y-6 lg:w-[55%]">
              <div className="flex">
                <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
                  Aims & Objectives
                </h2>
              </div>
              <div className="space-y-3">
                <p className="lg:text-[20px]">
                  - Serving as a breeding ground for Nigeria’s richest and
                  intellectually vibrant tax-oriented youth.
                </p>
                <p className="lg:text-[20px]">
                  - Provision of forums for healthy legal competition for
                  students.
                </p>
                <p className="lg:text-[20px]">
                  - Organising periodic training and mentorship programs which
                  are inalienably centered around taxation.
                </p>
                <p className="lg:text-[20px]">
                  - Creating a platform for members and enthusiasts to network.
                </p>
                <p className="lg:text-[20px]">
                  - Establishing a nexus between the Club and other lawful
                  societies, as well as consolidating the development of similar
                  structures in other institutions nationwide.
                </p>
              </div>
            </div>
          </div>

          {/* OUR IMPACT */}
          <div>
            <div
              id="impact"
              className="flex mt-20 lg:flex-row-reverse flex-col-reverse justify-between items-center space-x-10"
            >
              <div className="lg:w-[40%] w-[100%] mx-auto lg:mx-0">
                <img
                  src="/assets/about-imgs/img-four.png"
                  alt="img"
                  className="w-[100%] object-cover h-[420px] lg:my-0 my-6 rounded-2xl"
                />
              </div>
              <div className="space-y-6 lg:w-[55%]">
                <div className="flex">
                  <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
                    Our impact
                  </h2>
                </div>
                <div className="space-y-3">
                  <p className="lg:text-[20px]">
                    - Serving as a breeding ground for Nigeria’s richest and
                    intellectually vibrant tax-oriented youth.
                  </p>
                  <p className="lg:text-[20px]">
                    - Bi-Weekly meetings where salient and contemporary issues
                    bordering on taxation are discussed.
                  </p>
                  <p className="lg:text-[20px]">
                    - Development of tax lecture notes for members offering
                    taxation as a course.
                  </p>
                  <p className="lg:text-[20px]">
                    - Organising practical study tours for members, facilitated
                    by tax and accounting practices in Nigeria.
                  </p>
                  <p className="lg:text-[20px]">
                    - Annual sensitisation program in collaboration with both
                    the Federal Inland Revenue Service, and the Lagos Internal
                    Revenue Service, aimed at educating the general public on
                    the advantages of tax compliance and the inherent dangers
                    that accompany default.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-4">
              <p className="lg:text-[20px]">
                - Annual competitions such as the National Tax Debate where
                contestants from various Nigerian universities bear their minds
                on burning tax issues.
              </p>
              <p className="lg:text-[20px]">
                - Organising periodic training and mentorship programs which are
                inalienably centered around taxation.
              </p>
              <p className="lg:text-[20px]">
                - Our Publications are numerous and far-reaching. A major yearly
                publication is the Tax Anthology which covers various areas of
                tax, dissecting areas of conflict and proferring solutions to
                such conflict.
              </p>
              <p className="lg:text-[20px]">
                - Partnership with various institutions in both the public and
                private sectors of the Nigerian economy.
              </p>
            </div>
          </div>

          {/* OUR ACHIEVEMENTS */}
          <div
            id="achievements"
            className="flex mt-20 justify-between lg:flex-row flex-col-reverse items-center space-x-10"
          >
            <div className="lg:w-[40%] w-[100%] mx-auto lg:mx-0">
              <img
                src="/assets/about-imgs/img-five.png"
                alt="img"
                className="w-[100%] object-cover h-[420px] lg:my-0 my-6 rounded-2xl"
              />
            </div>
            <div className="space-y-6 lg:w-[55%]">
              <div className="flex">
                <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
                  Our Achievements
                </h2>
              </div>
              <div className="space-y-3">
                <p className="lg:text-[20px]">
                  - Winner of the National Tax Quiz at the Annual Tax Conference
                  organised by the Chartered Institute of Taxation of Nigeria.
                </p>
                <p className="lg:text-[20px]">
                  - Participation in the World Universities Comparative Projects
                  Legal Ratings organised by Allen & Overy Global Law
                  Intelligence Unit.
                </p>
                <p className="lg:text-[20px]">
                  - Defending Champions, The National Tax Debate
                </p>
                <p className="lg:text-[20px]">
                  - Yearly organisation of the Tax Walk.
                </p>
                <p className="lg:text-[20px]">
                  - Members of the Secretariat, Presidential Fiscal Policy and
                  Tax Reforms Committee.
                </p>
                <p className="lg:text-[20px]">
                  - Winner, O.J Taxation Challenge TV Gameshow.
                </p>
                <p className="lg:text-[20px]">
                  - 2nd Runner-Up, ANTAS National Essay Competition.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer active="About" />
      </div>
    </Container>
  );
};

export default About;
