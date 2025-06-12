import { useState } from "react";
import { CaretDown, CloseIcon, Hamburger } from "../svgs/Icons";
import { motion, AnimatePresence } from "framer-motion";
import Drawer from "./Drawer";
import { NavLink } from "react-router-dom";
import { Logo } from "../svgs/Logos";
import ProgrammeDropdown from "../dropdowns/ProgrammeDropdown";
import PublicationDropdown from "../dropdowns/PublicationDropdown";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [showProgrammesDropdown, setShowProgrammesDropdown] =
    useState<boolean>(false);
  const [showPublicationsDropdown, setShowPublicationsDropdown] =
    useState<boolean>(false);

  return (
    <div>
      <div className="lg:w-[80vw] w-[90vw] mx-auto text-[18px] flex justify-between items-center">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <div className="space-x-10 lg:flex hidden">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <div className="relative">
            <div
              className="space-x-3 flex items-center cursor-pointer"
              onClick={() => {
                setShowProgrammesDropdown((prev) => !prev);
                setShowPublicationsDropdown(false);
              }}
            >
              <span>Our Programmes</span>
              <CaretDown />
            </div>
            <AnimatePresence>
              {showProgrammesDropdown && <ProgrammeDropdown />}
            </AnimatePresence>
          </div>
          <div className="relative">
            <div
              className="space-x-3 flex items-center cursor-pointer"
              onClick={() => {
                setShowPublicationsDropdown((prev) => !prev);
                setShowProgrammesDropdown(false);
              }}
            >
              <span>Publication</span>
              <CaretDown />
            </div>
            <AnimatePresence>
              {showPublicationsDropdown && <PublicationDropdown />}
            </AnimatePresence>
          </div>

          <NavLink to="/our-people">Our People</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/blog">Contact</NavLink>
        </div>
        <button className="px-10 py-2 font-semibold text-[#fff] bg-[#00689e] rounded-xl lg:block hidden">
          Join Us
        </button>

        <div
          className="lg:hidden"
          onClick={() => setShowDrawer((prev) => !prev)}
        >
          <AnimatePresence mode="wait">
            {showDrawer ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <CloseIcon />
              </motion.div>
            ) : (
              <motion.div
                key="hamburger"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Hamburger />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {showDrawer && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className=""
          >
            <Drawer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
