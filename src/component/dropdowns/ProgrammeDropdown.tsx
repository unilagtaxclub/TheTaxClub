import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { programmeItems } from "../rawitems/ProgrammeItems";

const ProgrammeDropdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute bg-gray-800 text-[#fff] rounded-xl shadow-lg mt-2 flex flex-col p-2 space-y-2 w-[20vw] top-12"
    >
      {programmeItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.link}
          className="text-[15px] hover:bg-gray-600 hover:rounded-xl p-2 transition-all duration-300 ease-in-out"
        >
          {item.title}
        </NavLink>
      ))}
    </motion.div>
  );
};

export default ProgrammeDropdown;
