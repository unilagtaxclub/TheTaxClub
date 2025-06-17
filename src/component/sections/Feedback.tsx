import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "/assets/feedback-imgs/img-one.png",
    caption:
      "“The Tax Club is made up of the best minds and is an avenue to not only broaden gain deep insights into taxation but also spread your wings and fly both on national and an international stages”",
    author: "Mazi Afam Osigwe",
    title: "President, Nigerian Bar Association",
  },
  {
    src: "/assets/feedback-imgs/img-two.png",
    caption:
      "“The Tax Club is made up of the best minds and is an avenue to not only broaden gain deep insights into taxation but also spread your wings and fly both on national and an international stages”",
    author: "Mazi Afam Osigwe",
    title: "President, Nigerian Bar Association",
  },
  {
    src: "/assets/feedback-imgs/img-three.png",
    caption:
      "“The Tax Club is made up of the best minds and is an avenue to not only broaden gain deep insights into taxation but also spread your wings and fly both on national and an international stages”",
    author: "Mazi Afam Osigwe",
    title: "President, Nigerian Bar Association",
  },
  {
    src: "/assets/feedback-imgs/img-four.png",
    caption:
      "“The Tax Club is made up of the best minds and is an avenue to not only broaden gain deep insights into taxation but also spread your wings and fly both on national and an international stages”",
    author: "Mazi Afam Osigwe",
    title: "President, Nigerian Bar Association",
  },
  {
    src: "/assets/feedback-imgs/img-five.png",
    caption:
      "“The Tax Club is made up of the best minds and is an avenue to not only broaden gain deep insights into taxation but also spread your wings and fly both on national and an international stages”",
    author: "Mazi Afam Osigwe",
    title: "President, Nigerian Bar Association",
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

      <div className="flex justify-center items-center w-full lg:space-x-4 px-4 lg:px-10">
        <motion.div
          key={getImage(-1).src}
          className="hidden lg:block w-[580px] h-[300px] rounded-xl -mt-[23vh]"
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

        <div className="flex flex-col items-center space-y-6 relative max-w-[90vw] lg:max-w-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={getImage(0).src}
              className="w-full h-[260px] lg:h-[360px] rounded-xl overflow-hidden shadow-xl"
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
            <p className="text-[16px] lg:text-[20px] text-gray-700 mb-4">
              {getImage(0).caption}
            </p>
            <h2 className="text-[#00689E] text-[20px] lg:text-[24px] font-semibold">
              {getImage(0).author}
            </h2>
            <p className="text-[14px] lg:text-[16px] text-[#808080]">
              {getImage(0).title}
            </p>
          </div>
        </div>

        <motion.div
          key={getImage(1).src}
          className="hidden lg:block w-[580px] h-[300px] rounded-xl overflow-hidden -mt-[23vh]"
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
    </div>
  );
};

export default Feedback;
