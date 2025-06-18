import { NavLink } from "react-router-dom";
import { CaretDown } from "../svgs/Icons";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProgrammeDropdown from "../dropdowns/ProgrammeDropdown";
import PublicationDropdown from "../dropdowns/PublicationDropdown";

const Drawer = () => {
  const [showProgrammesDropdown, setShowProgrammesDropdown] =
    useState<boolean>(false);
  const [showPublicationsDropdown, setShowPublicationsDropdown] =
    useState<boolean>(false);

  return (
    <div className="bg-gray-800 text-[#fff] min-h-screen z-50 space-y-10 flex-col flex lg:hidden w-[100%] py-10 fixed px-4 mx-auto">
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
          {showProgrammesDropdown && <ProgrammeDropdown />}
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
          {showPublicationsDropdown && <PublicationDropdown />}
        </AnimatePresence>
      </div>
      <NavLink to="/our-people">Our People</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <button className="px-6 py-3 text-[#fff] bg-[#00689e] w-[90%] rounded-xl">
        Join Us
      </button>
    </div>
  );
};

export default Drawer;
