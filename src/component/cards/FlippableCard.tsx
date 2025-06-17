import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  frontCard: string;
  backCard: string;
};

const FlippableCard = ({ frontCard, backCard }: Props) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-full cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <img
          src={frontCard}
          alt="front"
          className="absolute w-full h-full object-cover backface-hidden rounded-xl"
        />
        {/* Back */}
        <img
          src={backCard}
          alt="back"
          className="absolute w-full h-full object-cover backface-hidden rounded-xl"
          style={{ transform: "rotateY(180deg)" }}
        />
      </motion.div>
    </div>
  );
};

export default FlippableCard;
