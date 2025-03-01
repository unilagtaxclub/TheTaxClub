import { CaretDown } from "../svgs/Icons";

const Drawer = () => {
  return (
    <div className="bg-[#f2f2f2] z-50 space-y-10 flex-col flex lg:hidden w-[100%] fixed px-8 mt-10 mx-auto">
      <span>Home</span>
      <div className="space-x-3 flex items-center justify-between">
        <span>Publication</span>
        <div className="rotate-270"><CaretDown /></div>
      </div>
      <span>About</span>
      <span>Our People</span>
      <span>Blog</span>
      <span>Events</span>
      <span>Gallery</span>
      <button className="px-6 py-3 text-[#fff] bg-[#00689e] rounded-xl">
        Contact Us
      </button>
    </div>
  );
};

export default Drawer;
