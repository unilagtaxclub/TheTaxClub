import { NavLink } from "react-router-dom";
import { EmailIcon } from "../svgs/Icons";
import { Logo } from "../svgs/Logos";

interface FooterProps {
  active?: string;
}

const Footer = ({ active }: FooterProps) => {
  return (
    <div className="bg-[#003D5E] relative lg:mt-[20vh] mt-14">
      {active === "Home" && (
        <div className="bg-[#fff] text-center z-10 mt-10 absolute -top-[15vh] lg:left-[30%] lg:px-20 lg:py-10 lg:space-y-6 space-y-3 py-4 px-6 lg:mt-0 rounded-3xl lg:w-[45%] w-[90%] left-6">
          <h2 className="mt-4 lg:mb-8 mb-4 lg:text-[34px] font-semibold">
            Haven't signed up to our Newsletter yet?
          </h2>
          <p className="text-[#808080] lg:text-[16px] text-[12px]">
            Subscribe to stay up to date on all our juicy and exciting content
            and events.
          </p>
          <div className="">
            <form action="https://getform.io/f/adrgxvja" method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_redirect" value="false" />

              <div className="flex items-center lg:mb-10 mt-6 border border-[#ccc] space-x-3 rounded-lg px-4 lg:py-4 py-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  className="w-[100%] outline-none border-none lg:text-[16px] text-[12px]"
                />
                <EmailIcon />
              </div>

              <button className="bg-[#00689e] text-[#fff] mt-6 lg:text-[16px] text-[12px] font-semibold rounded-lg lg:py-4 py-2 px-6 w-[100%]">
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>
      )}
      {active === "Home" && (
        <div className="relative lg:h-[400px] h-[328px] mt-30">
          <img
            src="/assets/footer-img.png"
            alt="footer-img"
            className="object-cover h-[100%] w-[100%]"
          />
          <div className="bg-[rgba(0,0,0,0.6)] absolute w-[100%] lg:h-[400px] h-[328px] top-0"></div>
        </div>
      )}
      <div className="mt-10 text-[#fff] lg:w-[80vw] w-[90vw] mx-auto lg:py-14 py-6">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="flex space-x-1 items-center lg:mx-0 -mx-3">
            <Logo />
            <div className="lg:text-[20px] text-[18px]">
              <h2 className="font-semibold">The Tax Club,</h2>
              <p className="">University of Lagos</p>
            </div>
          </div>
          <div className="space-y-6 flex flex-col lg:items-center mt-10 lg:mt-0">
            <h2 className="text-[20px] font-semibold">Quick Links</h2>
            <div className="space-y-4 flex flex-col">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/our-people">Our Programmes</NavLink>
              <NavLink to="/blog">Publications</NavLink>
              <NavLink to="/events">Our People</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
            </div>
          </div>

          <div className="space-y-6 flex flex-col mt-10 lg:mt-0">
            <h2 className="text-[20px] font-semibold">Reach Us</h2>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span>Email address:</span>
                <a href="mailto:unilagtaxclub@gmail.com" className="underline">
                  unilagtaxclub@gmail.com
                </a>
              </div>
              <div className="flex flex-col">
                <span>Address:</span>
                <span>University of Lagos, Akoka</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 flex flex-col mt-10 lg:mt-0">
            <h2 className="text-[20px] font-semibold">Social Media</h2>
            <div className="space-y-4 flex flex-col">
              <a
                href="https://www.linkedin.com/company/thetaxclub/"
                target="_blank"
                className="underline"
              >
                Linkedin
              </a>
              <a
                href="https://www.instagram.com/unilagtaxclub/?igsh=aW1ncGxyNzhhemUy&utm_source=qr"
                target="_blank"
                className="underline"
              >
                Instagram
              </a>
              <a
                href="https://x.com/unilagtaxclub?s=11"
                target="_blank"
                className="underline"
              >
                X
              </a>
              <span className="underline">Facebook</span>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#fff] mt-10 pt-10">
          <p className="text-center text-[14px] font-semibold">
            Copyright©The Tax Club UNILAG. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
