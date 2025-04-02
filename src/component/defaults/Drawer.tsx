import { NavLink } from "react-router-dom";
import { CaretDown } from "../svgs/Icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Drawer = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className="bg-[#f2f2f2] min-h-screen z-50 space-y-10 flex-col flex lg:hidden w-[100%] py-10 fixed px-8 mx-auto">
      <NavLink to="/">Home</NavLink>
      <div className="">
        <div
          onClick={() => setShowDropdown((prev) => !prev)}
          className="space-x-3 flex items-center justify-between"
        >
          <span>Publication</span>
          <div
            className={`${
              !showDropdown && "rotate-270"
            } transition-all duration-300 ease-in-out`}
          >
            <CaretDown />
          </div>
        </div>

        <AnimatePresence>
          {showDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-2 flex flex-col space-y-2 w-[100%] px-4"
            >
              <NavLink
                to="/publications/featured"
                className="text-[15px] hover:bg-[#ccc] border-b-2 border-[#ccc] p-2 transition-all duration-300 ease-in-out"
              >
                Featured
              </NavLink>
              <NavLink
                to="/publications/anthology"
                className="text-[15px] hover:bg-[#ccc] p-2 border-b-2 border-[#ccc] transition-all duration-300 ease-in-out"
              >
                Anthology
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <NavLink to="/about">About</NavLink>
      <span>Our People</span>
      <span>Blog</span>
      <NavLink to="/events">Events</NavLink>
      <span>Gallery</span>
      <button className="px-6 py-3 text-[#fff] bg-[#00689e] rounded-xl">
        Contact Us
      </button>
    </div>
  );
};

export default Drawer;
