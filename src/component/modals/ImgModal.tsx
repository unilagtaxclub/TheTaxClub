import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImgModal = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: ImageModalProps) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") onNext();
    if (e.key === "ArrowLeft") onPrev();
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl z-50"
        >
          <X />
        </button>
        <button
          onClick={onPrev}
          className="absolute left-4 text-white text-3xl z-50 hidden lg:block"
        >
          <ChevronLeft />
        </button>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="modal"
          className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-xl"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
        />
        <button
          onClick={onNext}
          className="absolute right-4 text-white text-3xl z-50 hidden lg:block"
        >
          <ChevronRight />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImgModal;
