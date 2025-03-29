import { NavLink } from "react-router-dom";
import { EmailIcon } from "../svgs/Icons";
import { Facebook, Instagram, LinkedIn, Logo, Twitter } from "../svgs/Logos";

const Footer = () => {
  return (
    <div className="bg-[#00689e]">
      <div className="mt-10 text-[#fff] lg:w-[80vw] w-[90vw] mx-auto py-14">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="space-y-6 lg:w-[30%]">
            <h2 className="text-[18px] font-semibold">About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className="space-y-1">
              <p>
                <span className="font-semibold">Email:</span> TTC@web.net
              </p>
              <p>
                <span className="font-semibold">Phone:</span> 880123456789
              </p>
            </div>
          </div>

          <div className="space-y-6 lg:w-[25%] flex flex-col lg:items-center mt-10 lg:mt-0">
            <h2 className="text-[18px] font-semibold">Quick Links</h2>
            <div className="space-y-4 flex flex-col">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <p>Our People</p>
              <p>Blog</p>
              <p>Events</p>
              <p>Gallery</p>
              <p>Publication</p>
              <p>Contact Us</p>
            </div>
          </div>

          <div className="bg-[#fff] text-[#808080] lg:p-10 p-6 mt-10 lg:mt-0 rounded-3xl lg:w-[35%]">
            <h2 className="font-semibold">Subscribe</h2>
            <p className="mt-4 mb-8">
              Join our newsletter to stay up to date on features and releases
            </p>
            <div className="">
              <div className="flex items-center border border-[#ccc] space-x-3 rounded-lg px-4 py-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  className="w-[100%] outline-none border-none"
                />
                <EmailIcon />
              </div>
              <button className="bg-[#00689e] text-[#fff] text-[16px] font-semibold rounded-lg py-3 px-6 mt-2 w-[100%]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#fff] mt-10 pt-10 flex lg:flex-row flex-col justify-between lg:items-center space-y-6 lg:space-y-0">
          <div className="flex items-center space-x-2">
            <Logo />
            <div className="">
              <h2 className="text-[18px] font-semibold">TTC Website</h2>
              <p className="text-[15px]">
                TTC 2024. All rights reserved
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <LinkedIn />
            <Twitter />
            <Facebook />
            <Instagram />
          </div>

          <div className="flex space-x-4">
            <p className="text-[15px]">Privacy Policy</p>
            <p className="text-[15px]">|</p>
            <p className="text-[15px]">Terms of Use</p>
            <p className="text-[15px]">|</p>
            <p className="text-[15px]">Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
