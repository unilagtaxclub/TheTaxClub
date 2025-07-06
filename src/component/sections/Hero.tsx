import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../defaults/Header";

const backgroundImages = [
  "/assets/hero-imgs/hero.png",
  "/assets/hero-imgs/img-two.png",
  "/assets/hero-imgs/img-three.png",
  "/assets/hero-imgs/img-four.png",
  "/assets/hero-imgs/img-five.png",
  "/assets/hero-imgs/img-six.png",
  "/assets/hero-imgs/img-eight.png",
  "/assets/hero-imgs/img-nine.png",
  "/assets/hero-imgs/img-ten.png",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  return (
    <div className="relative lg:min-h-screen">
      {/* Desktop background slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="hidden lg:block absolute inset-0 w-full h-full bg-cover bg-no-repeat z-0"
          style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
        ></motion.div>
      </AnimatePresence>

      {/* Overlay for desktop */}
      <div className="lg:absolute lg:inset-0 lg:bg-black/40 lg:text-[#fff] text-[#333] z-10 w-full flex flex-col pt-6 lg:pt-20 lg:px-6">
        <motion.div variants={heroVariants} initial="hidden" animate="visible">
          <Header active="Home" />
        </motion.div>

        <div className="lg:w-[80vw] w-[90vw] mx-auto mt-6 lg:mt-[20vh] z-20">
          <motion.h2
            className="text-[#fff301] font-semibold"
            custom={0}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            The Tax Club, University of Lagos
          </motion.h2>

          <motion.h2
            className="lg:block hidden text-[56px] font-semibold"
            custom={1}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            Shaping the Future of Taxation, <br /> one step at a time
          </motion.h2>

          <motion.h2
            className="lg:hidden text-[22px] font-bold"
            custom={1}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            Shaping the Future of Taxation, one step at a time
          </motion.h2>

          <motion.p
            className="lg:w-[60%] mt-3 lg:pl-0 lg:border-none pl-4 border-l-4 border-[#00689E]"
            custom={2}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            We are a dynamic community of young and passionate individuals
            dedicated to mastering the field of taxation and spreading the
            gospel of taxation. We are the First, and we have no equals.
          </motion.p>

          <motion.div
            className="mt-10 flex lg:flex-row flex-col lg:space-x-10 space-y-6 lg:space-y-0 lg:text-[20px]"
            custom={3}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <button className="bg-[#00689e] text-white px-20 py-3 rounded-lg font-semibold hover:bg-[#005a7a] transition-all duration-300 ease-in-out">
              Partner with us
            </button>
            <a
              href="https://bit.ly/applicationformttcunilag"
              target="_blank"
              className="border border-[#00689e] text-[#00689e] flex items-center justify-center lg:px-20 py-3 rounded-lg font-semibold hover:bg-[#00689e] hover:text-white transition-all duration-300 ease-in-out"
            >
              Become a Member
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile slideshow at bottom */}
      <div className="lg:hidden mt-8 w-[90vw] mx-auto">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={backgroundImages[currentImage]}
            alt="Hero Mobile Slideshow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-[384px] object-cover rounded-2xl"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
