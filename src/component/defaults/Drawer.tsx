import { NavLink } from "react-router-dom";
import { CaretDown } from "../svgs/Icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Drawer = () => {
  const [showProgrammesDropdown, setShowProgrammesDropdown] =
    useState<boolean>(false);
  const [showPublicationsDropdown, setShowPublicationsDropdown] =
    useState<boolean>(false);

  return (
    <div className="bg-[#f2f2f2] text-[#000] min-h-screen z-50 space-y-10 flex-col flex lg:hidden w-[100%] py-10 fixed px-4 mx-auto">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <div className="">
        <div
          onClick={() => setShowProgrammesDropdown((prev) => !prev)}
          className="space-x-3 flex items-center justify-between cursor-pointer"
        >
          <span>Our Programmes</span>
          <div
            className={`${
              !showProgrammesDropdown && "rotate-270"
            } transition-all duration-300 ease-in-out`}
          >
            <CaretDown />
          </div>
        </div>

        <AnimatePresence>
          {showProgrammesDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-2 flex flex-col space-y-2 w-[100%]"
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
      <div className="">
        <div
          onClick={() => setShowPublicationsDropdown((prev) => !prev)}
          className="space-x-3 flex items-center justify-between cursor-pointer"
        >
          <span>Publication</span>
          <div
            className={`${
              !showPublicationsDropdown && "rotate-270"
            } transition-all duration-300 ease-in-out`}
          >
            <CaretDown />
          </div>
        </div>

        <AnimatePresence>
          {showPublicationsDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-2 flex flex-col space-y-2 w-[100%]"
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
      <NavLink to="/our-people">Our People</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/blog">Contact</NavLink>
      <button className="px-6 py-3 text-[#fff] bg-[#00689e] w-[90%] rounded-xl">
        Join Us
      </button>
    </div>
  );
};

export default Drawer;
