const CountdownTimer = () => {
  return (
    <div className="flex items-center justify-between text-[#fff] w-[100%] space-x-2 lg:text-[30px] text-[18px] font-semibold mt-3">
      <div className="box bg-[#00689e] lg:text-[54px] text-[18px] font-semibold py-2 lg:px-4 px-3 rounded-xl">
        5
      </div>
      <span className="text-[#00689E]">:</span>
      <div className="box bg-[#00689e] lg:text-[54px] text-[18px] font-semibold py-2 lg:px-4 px-3 rounded-xl">
        20
      </div>
      <span className="text-[#00689E]">:</span>
      <div className="box bg-[#00689e] lg:text-[54px] text-[18px] font-semibold py-2 lg:px-4 px-3 rounded-xl">
        12
      </div>
      <span className="text-[#00689E]">:</span>
      <div className="box bg-[#00689e] lg:text-[54px] text-[18px] font-semibold py-2 lg:px-4 px-3 rounded-xl">
        39
      </div>
    </div>
  );
};

export default CountdownTimer;
