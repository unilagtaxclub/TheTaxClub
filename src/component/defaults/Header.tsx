import { useState } from "react";
import { CaretDown, CloseIcon, Hamburger } from "../svgs/Icons";
import { motion, AnimatePresence } from "framer-motion";
import Drawer from "./Drawer";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  return (
    <div>
      <div className="lg:w-[80vw] w-[90vw] mx-auto bg-[#fff] py-2 px-6 rounded-2xl text-[18px] flex justify-between items-center">
        <img src="/assets/logo.svg" alt="logo" />
        <div className="space-x-10 lg:flex hidden">
          <span>Home</span>
          <div className="space-x-3 flex items-center">
            <span>Publication</span>
            <CaretDown />
          </div>
          <span>About</span>
          <span>Our People</span>
          <span>Blog</span>
          <span>Events</span>
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
