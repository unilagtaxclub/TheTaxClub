import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const ProgrammeDropdown = () => {
  const items = [
    {
      id: 1,
      title: "The National Tax Debate",
      link: "/publications/featured",
    },
    {
      id: 2,
      title: "The Tax Experience",
      link: "/publications/featured",
    },
    {
      id: 3,
      title: "The Tax Summer School",
      link: "/publications/featured",
    },
    {
      id: 4,
      title: "The Tax Masterclass",
      link: "/publications/featured",
    },
    {
      id: 5,
      title: "The Tax Walk",
      link: "/publications/featured",
    },
    {
      id: 6,
      title: "Prof. A. Sanni Essay Competition",
      link: "/publications/featured",
    },
    {
      id: 7,
      title: "Monday Memo",
      link: "/publications/featured",
    },
    {
      id: 8,
      title: "#TaxThursday",
      link: "/publications/featured",
    },
    {
      id: 9,
      title: "Tea and Taxes",
      link: "/publications/featured",
    },
    {
      id: 10,
      title: "Bi-weekly meetings",
      link: "/publications/featured",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute bg-gray-800 text-[#fff] rounded-xl shadow-lg mt-2 flex flex-col p-2 space-y-2 w-[20vw] top-12"
    >
      {items.map((item) => (
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
