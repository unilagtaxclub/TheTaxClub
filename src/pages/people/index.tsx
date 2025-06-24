import FlippableCard from "../../component/cards/FlippableCard";
import Container from "../../component/defaults/Container";
import Footer from "../../component/defaults/Footer";
import Header from "../../component/defaults/Header";

const OurPeople = () => {
  const executives = [
    {
      id: 1,
      frontCard: "/assets/people-imgs/tofu-front.png",
      name: "Jesutofunmi Bola-Rotimi",
      title: "President",
      bio: "Jesutofunmi Bola-Rotimi is a final year student at the University of Lagos, where she is pursuing her Bachelor of Laws (LL.B) degree. She has a keen interest in taxation, intellectual property, and technology, and has gained experience as a Research Assistant & Analyst for the Presidential Committee on Fiscal Policy and Tax Reforms in Nigeria. Beyond her legal pursuits, she is also a product designer passionate about creating accessible digital interfaces for users worldwide. ",
    },
    {
      id: 2,
      frontCard: "/assets/people-imgs/chukwu-front.png",
      name: "Emmanuel Chukwu",
      title: "Vice President",
      bio: "Chukwu Emmanuel is a dedicated law student at the University of Lagos with a strong interest in taxation and public finance. He currently serves as the Vice President of the prestigious Tax Club, UNILAG, where he plays a key role in leading strategic initiatives and fostering a problem-solving culture within the club. He is known for his critical thinking abilities and his knack for developing innovative solutions to complex issues. He’s a die-hard Manchester United fan",
    },
    {
      id: 3,
      frontCard: "/assets/people-imgs/jedi-front.png",
      name: "Jedidiah Alphaeus",
      title: "General Secretary",
      bio: "Jedidiah is a 400level student of the faculty of law unilag who is passionate about spreading the gospel of tax, self development and growth. She serves as the General Secretary of the Tax Club, UNILAG and looks forward to implementing her skills and experience for the betterment of the club.",
    },
    {
      id: 4,
      frontCard: "/assets/people-imgs/paul-front.png",
      name: "Paul Osiyemi",
      title: "Assistant General Secretary",
      bio: "Paul Osiyemi is a 300L law student of the faculty of law Unilag, with a passion for Taxation and Finance. As Secretary at GboahTV, an online media platform with a substantial amount of followers, he has developed strong leadership and organizational skills. Previously, he served as Financial Secretary in his hall of residence, showcasing his financial expertise. With three years of experience as a Financial Analyst, Paul possesses a solid understanding of financial markets and strategic decision-making.",
    },
    {
      id: 5,
      frontCard: "/assets/people-imgs/michael-front.png",
      name: "Michael Adedayo",
      title: "Director of Research",
      bio: "Adedayo Michael is a 400 level law student of the Faculty of Law, University of Lagos. He currently serves as the Director of Research of the Tax Club where he heads initiatives to promote tax education among members of the Tax Club. He is a public speaker, debater, and orator, widely recognised for his excellent performances at public speaking and mooting competitions on national and international stages.",
    },
    {
      id: 6,
      frontCard: "/assets/people-imgs/taiwo-front.png",
      name: "Taiwo Agboola",
      title: "Public Relations Officer",
      bio: "Taiwo Agboola is a 500 level Law student at the University of Lagos and currently serve as the Public Relations Officer of the Tax Club. She ejoys blending creativity with strategy through writing, design, or just finding better ways to connect with people. Outside school, you’ll most likely find her reading a good novel or watching reality TV.",
    },
    {
      id: 7,
      frontCard: "/assets/people-imgs/feyi-front.png",
      name: "Oluwafeyikemi Alawode",
      title: "Admin/Career Advancement Officer",
      bio: "Oluwafeyikemi Alawode is a legal eagle in the making at the University of Lagos, who is not just acing her law degree but also bringing her A-game to the world of tax. As the Career Advancement and Administrative Director for the Tax Club, she is actively involved in initiatives that explore taxation and promote career development in the field.",
    },
    {
      id: 8,
      frontCard: "/assets/people-imgs/elum-front.png",
      name: "Elum Chioma",
      title: "Chief Financial Officer",
      bio: "Elum Chioma serves as the Chief Financial Officer of the Tax Club, overseeing all financial operations and ensuring transparency in budgeting and reporting. She is committed to promoting financial literacy and supporting the club’s mission to make tax education accessible and engaging. With a keen eye for detail and a passion for strategic planning, Jules helps drive the club’s growth and impact.",
    },
    {
      id: 9,
      frontCard: "/assets/people-imgs/kehinde-front.png",
      name: "Kehinde Bankole",
      title: "Liaison Officer",
      bio: "Kehinde Bankole is a final-year accounting student at the University of Lagos with a strong interest in taxation. He currently serves as the Liaison Officer of the Tax Club Unilag. Kehinde is dedicated to expanding his knowledge of tax systems and promoting active student involvement in the field.",
    },
  ];

  const staffAdvisers = [
    {
      id: 10,
      frontCard: "/assets/people-imgs/prof-sanni-front.png",
      name: "Prof. Abiola Sanni (SAN)",
      title: "Coordinator",
      bio: "Prof. Abiola Olaitan Sanni, (SAN), is a leading Nigerian legal scholar specializing in taxation and fiscal law. He holds the Lagos State Professorial Chair for the Advancement of Taxation and Fiscal Matters at the University of Lagos, where he is also the Dean of the Faculty of Law. A Fulbright Fellow and Senior Advocate of Nigeria, he has chaired various national tax policy committees, and is an editor of key Nigerian tax law reports",
    },
    {
      id: 11,
      frontCard: "/assets/people-imgs/chukwu-front.png",
      name: "Emmanuel Chukwu",
      title: "Vice President",
      bio: "Chukwu Emmanuel is a dedicated law student at the University of Lagos with a strong interest in taxation and public finance. He currently serves as the Vice President of the prestigious Tax Club, UNILAG, where he plays a key role in leading strategic initiatives and fostering a problem-solving culture within the club. He is known for his critical thinking abilities and his knack for developing innovative solutions to complex issues. He’s a die-hard Manchester United fan",
    },
    {
      id: 12,
      frontCard: "/assets/people-imgs/tofu-front.png",
      name: "Jesutofunmi Bola-Rotimi",
      title: "President",
      bio: "Jesutofunmi Bola-Rotimi is a final year student at the University of Lagos, where she is pursuing her Bachelor of Laws (LL.B) degree. She has a keen interest in taxation, intellectual property, and technology, and has gained experience as a Research Assistant & Analyst for the Presidential Committee on Fiscal Policy and Tax Reforms in Nigeria. Beyond her legal pursuits, she is also a product designer passionate about creating accessible digital interfaces for users worldwide. ",
    },
  ];

  const elders = [
    {
      id: 13,
      frontCard: "/assets/people-imgs/zacch-front.png",
      name: "Mr Zacch Adedeji",
      title: "Executive Chairman, FIRS",
      bio: "Zacch Adelabu Adedeji is a Nigerian accountant and public finance expert who currently serves as the Executive Chairman of the Federal Inland Revenue Service (FIRS). He previously held roles as Commissioner for Finance in Oyo State and Special Adviser to the President on Revenue. He is a first-class graduate of Obafemi Awolowo University and has extensive experience in both the private and public sectors.",
    },
    {
      id: 14,
      frontCard: "/assets/people-imgs/ayodele-front.png",
      name: "Mr Ayodele Subair",
      title: "Executive Chairman, LIRS",
      bio: "Ayodele Subair is a seasoned Nigerian accountant and tax administrator who is serving as the Executive Chairman of the Lagos State Internal Revenue Service (LIRS). With decades of experience in audit, tax, and financial consulting, he is recognized for driving significant improvements in Lagos State’s tax revenue and modernizing its tax administration systems.",
    },
    {
      id: 15,
      frontCard: "/assets/people-imgs/prof-teju-front.png",
      name: "Prof. Teju Somorin",
      title: "Past CID President",
      bio: "",
    },
    {
      id: 16,
      frontCard: "/assets/people-imgs/oyedele-front.png",
      name: "Mr Taiwo Oyedele",
      title: "Executive Chairman, PFPTRC",
      bio: "Taiwo Oyedele is a Nigerian accountant, economist, and tax expert currently serving as Chairman of the Presidential Committee on Fiscal Policy and Tax Reforms. He previously worked for over 20 years at PwC as Fiscal Policy Partner and Africa Tax Leader. He is also an associate professor at Babcock University and a guest lecturer at Lagos Business School, known for his leadership in fiscal governance and economic policy reform in Nigeria",
    },
    {
      id: 17,
      frontCard: "/assets/people-imgs/ade-front.png",
      name: "Mr Ade Ipaye",
      title: "Executive Chairman, PFPTRC",
      bio: "",
    },
    {
      id: 18,
      frontCard: "/assets/people-imgs/barr-front.png",
      name: "Barr, Samuel Agbeluyi",
      title: "President Chartered Institute Taxation NG",
      bio: "",
    },
  ];

  return (
    <Container>
      <div className="bg-[#f2f2f2] min-h-screen">
        <div className="bg-[url('/assets/gallery/ntdv/img-fourteen.png')] lg:h-[581px] bg-cover bg-no-repeat">
          <div className="bg-[rgba(0,0,0,0.6)] text-[#fff] w-[100%] flex flex-col pt-6 lg:pt-20 lg:h-[581px] pb-10 lg:pb-0 lg:px-6">
            <Header active="Our People" color="#ffffff" />
            <div className="lg:w-[80vw] w-[90vw] mx-auto mt-10 lg:mt-[30vh]">
              <h2 className="lg:text-[56px] text-[24px] font-semibold">
                People
              </h2>
            </div>
          </div>
        </div>
        <div className="w-[90vw] lg:w-[80vw] mx-auto lg:mt-[10vh] mt-6 pb-10">
          <div className="mt-10">
            <div className="flex">
              <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
                Executives
              </h2>
            </div>
            <div className="mt-6 grid lg:grid-cols-3 grid-cols-1 gap-4">
              {executives.map((executive) => (
                <div key={executive.id} className="h-[509px] lg:w-[386px]">
                  <FlippableCard
                    frontCard={executive.frontCard}
                    name={executive.name}
                    title={executive.title}
                    bio={executive.bio}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:mt-[20vh] mt-20">
            <div className="flex">
              <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
                Staff Advisers
              </h2>
            </div>
            <div className="mt-6 grid lg:grid-cols-3 grid-cols-1 gap-4">
              {staffAdvisers.map((staff) => (
                <div key={staff.id} className="h-[509px] lg:w-[386px]">
                  <FlippableCard
                    frontCard={staff.frontCard}
                    name={staff.name}
                    title={staff.title}
                    bio={staff.bio}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:mt-[20vh] mt-20 lg:mb-20 mb-10">
            <div className="flex">
              <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
                Patrons/Matrons
              </h2>
            </div>
            <div className="mt-6 grid lg:grid-cols-3 grid-cols-1 gap-4">
              {elders.map((elder) => (
                <div key={elder.id} className="h-[509px] lg:w-[386px]">
                  <FlippableCard
                    frontCard={elder.frontCard}
                    name={elder.name}
                    title={elder.title}
                    bio={elder.bio}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer active="Our People" />
      </div>
    </Container>
  );
};

export default OurPeople;
