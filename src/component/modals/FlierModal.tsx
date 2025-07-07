import { motion } from "framer-motion";

const FlierModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="rounded-lg shadow-lg p-6 w-full max-w-2xl text-black relative "
      >
        <button
          onClick={closeModal}
          className="absolute top-10 right-10 text-gray-100 hover:text-red-500 text-[30px] h-10 w-10 rounded-full flex items-center justify-center"
        >
          &times;
        </button>

        <img
          src="/assets/flier.jpg"
          alt="flier"
          className="w-full h-[100%] mb-4"
        />
      </motion.div>
    </div>
  );
};

export default FlierModal;
