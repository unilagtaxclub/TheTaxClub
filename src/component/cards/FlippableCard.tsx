import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  frontCard: string;
  name: string;
  title: string;
  bio: string;
};

const FlippableCard = ({ frontCard, name, title, bio }: Props) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-full cursor-pointer [perspective:1000px]"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden">
          <img
            src={frontCard}
            alt="front"
            className="w-full h-full object-cover rounded-xl"
          />
          {/* Bottom Overlay with Name and Title */}
          <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white px-4 py-3 rounded-b-xl">
            <p className="text-sm font-medium text-blue-500 pb-4">
              Tap to view bio
            </p>
            <p className="text-[20px] font-semibold uppercase pb-2">{name}</p>
            <p className="text-[18px] text-gray-300">{title}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden [transform:rotateY(180deg)]">
          <div className="bg-[#0F1A20] rounded-2xl w-full h-full p-6 flex flex-col justify-between">
            <p className="text-[#fff] lg:text-[20px] text-[18px] text-center">
              {bio}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlippableCard;
