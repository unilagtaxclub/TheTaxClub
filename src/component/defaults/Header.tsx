import { useState } from "react";
import { CaretDown, CloseIcon, Hamburger } from "../svgs/Icons";
import { motion, AnimatePresence } from "framer-motion";
import Drawer from "./Drawer";
import { NavLink } from "react-router-dom";
import { Logo } from "../svgs/Logos";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div>
      <div className="lg:w-[80vw] w-[90vw] mx-auto bg-[#fff] py-2 px-6 rounded-2xl text-[18px] flex justify-between items-center">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <div className="space-x-10 lg:flex hidden">
          <NavLink to="/">Home</NavLink>
          <div className="relative">
            <div
              className="space-x-3 flex items-center cursor-pointer"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <span>Publication</span>
              <CaretDown />
            </div>
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bg-[#fff] rounded-xl shadow-lg mt-2 flex flex-col p-2 space-y-2 w-[15vw] top-12"
                >
                  <span className="text-[15px] hover:bg-[#f1f1f1] hover:rounded-xl p-2 transition-all duration-300 ease-in-out">Featured</span>
                  <span className="text-[15px] hover:bg-[#f1f1f1] hover:rounded-xl p-2 transition-all duration-300 ease-in-out">Anthology</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <NavLink to="/about">About</NavLink>
          <span>Our People</span>
          <span>Blog</span>
          <NavLink to="/events">Events</NavLink>
          <span>Gallery</span>
        </div>
        <button className="px-6 py-3 text-[#fff] bg-[#00689e] rounded-xl lg:block hidden">
          Contact Us
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
