import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "/assets/feedback-imgs/img-one.png",
    caption:
      "“The Tax Club is made up of the best minds and is an avenue to not only broaden gain deep insights into taxation but also spread your wings and fly both on national and an international stages”",
    author: "Mazi Afam Osigwe",
  },
  {
    src: "/assets/feedback-imgs/img-two.png",
    caption:
      "“Becoming a member of the tax club, Unilag gave me the exposure i neened to not only learn and understand Tax, but also to make valuable contributions to the development of Taxation in the country.” I would definitely recommend joining the Tax Club to anybody who cares to listen",
    author: "Prince Obiora",
  },
  {
    src: "/assets/feedback-imgs/img-three.png",
    caption:
      "“Founding the Tax Club, University of Lagos, was a defining moment in my academic and professional journey. It laid the foundation for impactful tax education, created a platform for future leaders, and showed how student-driven initiatives can influence national policy conversations. I am proud to see the legacy thrive across Nigeria today.",
    author: "ThankGod Enahoro",
  },
];

const Feedback = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getImage = (offset: number) => {
    const index = (centerIndex + offset + images.length) % images.length;
    return images[index];
  };

  return (
    <div className="w-full bg-white py-16 overflow-hidden">
      <div className="flex justify-center items-center mb-4">
        <h2 className="text-[#808080] text-[12px] lg:text-[20px] font-semibold uppercase border border-[#DFBD00] py-1 px-3 rounded-full">
          Feedback
        </h2>
      </div>

      <p className="text-[20px] lg:text-[28px] font-semibold text-center mb-10">
        What people say about us
      </p>

      {/* Desktop View */}
      <div className="hidden lg:flex justify-center items-center w-full space-x-4 px-10">
        <motion.div
          key={getImage(-1).src}
          className="w-[580px] h-[300px] rounded-xl -mt-[23vh]"
          initial={{ opacity: 0, rotateY: -45, scale: 0.9 }}
          animate={{ opacity: 1, rotateY: -25, scale: 0.95 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={getImage(-1).src}
            alt="Left"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        <div className="flex flex-col items-center space-y-6 relative max-w-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={getImage(0).src}
              className="w-full h-[360px] rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1.02 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={getImage(0).src}
                alt="Center"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </AnimatePresence>

          <div className="text-center px-4">
            <p className="text-[20px] text-gray-700 mb-4">
              {getImage(centerIndex).caption}
            </p>
            <h2 className="text-[#00689E] text-[24px] font-semibold">
              {getImage(centerIndex).author}
            </h2>
          </div>
        </div>

        <motion.div
          key={getImage(1).src}
          className="w-[580px] h-[300px] rounded-xl overflow-hidden -mt-[23vh]"
          initial={{ opacity: 0, rotateY: 45, scale: 0.9 }}
          animate={{ opacity: 1, rotateY: 25, scale: 0.95 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={getImage(1).src}
            alt="Right"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex lg:hidden justify-center items-center gap-6 overflow-x-hidden min-h-[350px] w-full px-4">
          <div className="w-[306px] h-[198px] mt-10 opacity-60 shrink-0 rounded-md overflow-hidden">
            <img
              src={getImage(-1).src}
              alt="Left"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={getImage(0).src}
              className="w-[250px] h-[310px] shadow-xl z-10 shrink-0 overflow-hidden rounded-md"
              initial={{ opacity: 0, rotateY: -30, scale: 0.95 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1.05 }}
              exit={{ opacity: 0, rotateY: 50, scale: 0.9 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={getImage(0).src}
                alt="Center"
                className="w-full h-full object-cover rounded-md"
              />
            </motion.div>
          </AnimatePresence>

          <div className="w-[306px] h-[198px] mt-10 opacity-60 shrink-0 rounded-md overflow-hidden">
            <img
              src={getImage(1).src}
              alt="Right"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="text-center lg:hidden px-4 mt-6">
        <p className="text-[16px] text-gray-700 mb-4">
          {getImage(centerIndex).caption}
        </p>
        <h2 className="text-[#00689E] text-[20px] font-semibold">
          {getImage(centerIndex).author}
        </h2>
      </div>
    </div>
  );
};

export default Feedback;
