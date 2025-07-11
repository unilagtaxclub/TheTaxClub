import Container from "../../component/defaults/Container";
import Footer from "../../component/defaults/Footer";
import Header from "../../component/defaults/Header";
import { AddressIcon, EmailIcon } from "../../component/svgs/Icons";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "../../component/svgs/Logos";

const Contact = () => {
  return (
    <Container>
      <div className="bg-[url('/assets/hero-imgs/contact-hero-img.png')] lg:h-[581px] bg-cover bg-no-repeat">
        <div className="bg-[rgba(0,0,0,0.4)] text-[#fff] w-[100%] flex flex-col pt-6 lg:pt-20 lg:h-[581px] pb-10 lg:pb-0 lg:px-6">
          <Header active="Contact" color="#ffffff" />
          <div className="lg:w-[80vw] w-[90vw] mx-auto mt-10 lg:mt-[30vh]">
            <h2 className="lg:text-[56px] text-[24px] font-semibold">
              Contact Us
            </h2>
          </div>
        </div>
      </div>

      <div className="lg:mt-[10vh] mt-10 lg:w-[80vw] w-[90vw] mx-auto">
        <div className="flex">
          <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
            Get in touch
          </h2>
        </div>
        <h2 className="lg:text-[40px] text-[20px] mt-4 font-semibold">
          Do you have any questions or inquiries?
        </h2>

        <form action="https://getform.io/f/adrgxvja" method="POST">
          {/* Input */}
          <input type="hidden" name="_captcha" value="false" />

          <div className="lg:mt-10 mt-6 flex lg:flex-row flex-col justify-between space-y-10 lg:space-y-0 lg:space-x-10">
            <div className="space-y-2 flex flex-col lg:w-[45%]">
              <label className="lg:text-[18px] text-[#232323] font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                className="p-3 rounded-lg border border-[#ccc] w-[100%] outline-none"
              />
            </div>
            <div className="space-y-2 flex flex-col lg:w-[45%]">
              <label className="lg:text-[18px] text-[#232323] font-semibold">
                Subject of inquiry
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Enter Subject"
                className="p-3 rounded-lg border border-[#ccc] w-[100%] outline-none"
              />
            </div>
          </div>

          <div className="lg:mt-10 mt-6 flex lg:flex-row flex-col justify-between space-y-10 lg:space-y-0 lg:space-x-10">
            <div className="lg:space-y-10 space-y-6 lg:w-[45%]">
              <div className="space-y-2 flex flex-col w-[100%]">
                <label className="lg:text-[18px] text-[#232323] font-semibold">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter Phone Number"
                  className="p-3 rounded-lg border border-[#ccc] w-[100%] outline-none"
                />
              </div>
              <div className="space-y-2 flex flex-col w-[100%]">
                <label className="lg:text-[18px] text-[#232323] font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                  className="p-3 rounded-lg border border-[#ccc] w-[100%] outline-none"
                />
              </div>
            </div>
            <div className="space-y-2 flex flex-col lg:w-[45%]">
              <label className="lg:text-[18px] text-[#232323] font-semibold">
                How can we help you?
              </label>
              <textarea
                rows={6}
                name="message"
                placeholder="Type in your question"
                className="p-3 rounded-lg border border-[#ccc] w-[100%] outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-10 py-2 lg:text-[20px] font-semibold text-[#fff] bg-[#00689e] rounded-lg mt-10"
          >
            Contact Us
          </button>
        </form>

        {/* Socials */}
        <div>
          <div className="flex mt-20">
            <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
              Social Media
            </h2>
          </div>
          <h2 className="lg:text-[40px] text-[20px] mt-4 font-semibold">
            Connect with us via any of our social media
          </h2>
          <div className="space-y-6 mt-6">
            <div className="flex items-center space-x-3">
              <LinkedIn />
              <a
                href="https://www.linkedin.com/company/thetaxclub/"
                target="_blank"
                className="text-[#232323] underline"
              >
                Linkedin
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Instagram />
              <a
                href="https://www.instagram.com/unilagtaxclub/?igsh=aW1ncGxyNzhhemUy&utm_source=qr"
                target="_blank"
                className="text-[#232323] underline"
              >
                Instagram
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Twitter />
              <a
                href="https://x.com/unilagtaxclub?s=11"
                target="_blank"
                className="text-[#232323] underline"
              >
                X
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Facebook />
              <span className="text-[#232323] underline">Facebook</span>
            </div>
          </div>
        </div>

        {/* Reach Us */}
        <div>
          <div className="flex mt-20">
            <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
              Reach Us
            </h2>
          </div>
          <h2 className="lg:text-[40px] text-[20px] mt-4 font-semibold">
            Reach us through these channels
          </h2>
          <div className="space-y-6 mt-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <AddressIcon />
                <span className="text-[14px] text-[#808080]">Address</span>
              </div>
              <p className="lg:text-[18px]">
                University of Lagos, Akoka, Yaba, Lagos state, Nigeria
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <EmailIcon />
                <span className="text-[14px] text-[#808080]">
                  Email Address
                </span>
              </div>
              <a
                href="mailto:unilagtaxclub@gmail.com"
                className="lg:text-[18px] underline"
              >
                unilagtaxclub@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Contact;
