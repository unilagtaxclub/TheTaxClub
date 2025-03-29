const Memories = () => {
  return (
    <div className="lg:mt-[20vh] pb-20 mt-16 lg:w-[80vw] w-[90vw] relative mx-auto flex flex-col">
      <div className="flex">
        <h2 className="text-[#808080] lg:text-[20px] text-[12px] font-semibold uppercase text-center border border-[#808080] py-1 px-3 rounded-full">
          Archive
        </h2>
      </div>
      <h2 className="lg:text-[48px] text-[24px] font-semibold">Our Memories</h2>
      <p className="lg:text-[25px] text-[#333] lg:w-[70%]">
        Lorem ipsum dolor sit amet consectetur. Praesent ultricies nunc
        dignissim in eget fusce vel diam in. Odio tellus vivamus elit vulputate
        eu nibh. Est condimentum viverra ut risus id fusce aliquam nunc.
        Vestibulum leo turpis.
      </p>
      <div className="flex">
        <button className="bg-[#00689e] text-[#fff] text-[16px] font-semibold rounded-lg py-3 px-6 mt-6 lg:w-auto w-[100%]">
          See More Memories
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-10">
        <div className="space-y-6">
            <img src="/assets/memories-imgs/img-one.png" alt="img-one" className="lg:h-[339px] h-[218px] w-[100%] object-cover rounded-2xl" />
            <img src="/assets/memories-imgs/img-two.png" alt="img-two" className="lg:h-[339px] h-[218px] w-[100%] object-cover rounded-2xl" />
        </div>
        <div className="space-y-6">
            <img src="/assets/memories-imgs/img-two.png" alt="img-two" className="h-[218px] w-[100%] lg:block hidden object-cover rounded-2xl" />
            <img src="/assets/memories-imgs/img-three.png" alt="img-four" className="h-[218px] w-[100%] object-cover rounded-2xl" />
            <img src="/assets/memories-imgs/img-four.png" alt="img-four" className="h-[218px] w-[100%] object-cover rounded-2xl" />
        </div>
        <div className="space-y-6">
            <img src="/assets/community-imgs/community-img-one.jpeg" alt="img-one" className="lg:h-[339px] h-[218px] w-[100%] rounded-2xl object-cover" />
            <img src="/assets/memories-imgs/img-one.png" alt="img-one" className="lg:block hidden h-[339px] w-[100%] object-cover rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Memories;
