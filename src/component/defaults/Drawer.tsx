import { NavLink } from "react-router-dom";
import { CaretDown } from "../svgs/Icons";

const Drawer = () => {
  return (
    <div className="bg-[#f2f2f2] min-h-screen z-50 space-y-10 flex-col flex lg:hidden w-[100%] py-10 fixed px-8 mx-auto">
      <NavLink to="/">Home</NavLink>
      <div className="space-x-3 flex items-center justify-between">
        <span>Publication</span>
        <div className="rotate-270"><CaretDown /></div>
      </div>
      <NavLink to="/about">About</NavLink>
      <span>Our People</span>
      <span>Blog</span>
      <span>Events</span>
      <span>Gallery</span>
      <button className="px-6 py-3 text-[#fff] bg-[#00689e] rounded-xl">
        Contact Us
      </button>
    </div>
  );
};

export default Drawer;
