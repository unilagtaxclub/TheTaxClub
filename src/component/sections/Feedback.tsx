const Feedback = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center lg:mt-[10vh] mt-10">
        <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#DFBD00] py-1 px-3 rounded-full">
          Feedback
        </h2>
      </div>
      <p className="text-[24px] font-semibold text-center">
        What people say about us
      </p>

      <div className="mt-10 flex justify-between space-x-3 items-center w-[98%] mx-auto overflow-x-auto overflow-y-hidden">
        <img
          src="/assets/gallery/debate/one.png"
          className="lg:h-[405px] lg:w-[100%] w-[30px] h-[198px] object-cover -rotate-y-30 rotate-x-6 transform"
          alt="img"
        />
        <img
          src="/assets/gallery/debate/two.png"
          className="lg:h-[405px] lg:w-[100%] w-[290px] h-[310px] object-cover"
          alt="img"
        />
        <img
          src="/assets/gallery/debate/three.png"
          className="lg:h-[405px] lg:w-[100%] w-[30px] h-[198px] object-cover rotate-y-30 rotate-x-6 transform"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Feedback;
