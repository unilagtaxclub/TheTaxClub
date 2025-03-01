const CountdownTimer = () => {
  return (
    <div className="mt-10 bg-[#979b9f]/30 backdrop-blur-xs lg:min-w-[490px] lg:min-h-[220px] rounded-xl lg:p-10 p-6 flex flex-col space-y-3">
      <h2 className="uppercase text-center font-semibold lg:text-[16px] text-[10px]">Time remaining for national tax <br /> debate</h2>
      <div className="flex items-center space-x-2 lg:text-[30px] text-[18px] font-semibold mt-3">
        <div className="box bg-[#00689e] lg:text-[54px] text-[18px] font-semibold py-2 lg:px-6 px-3 rounded-xl">
          5
        </div>
        <span>:</span>
        <div className="box bg-[#00689e] lg:text-[54px] text-[18px] font-semibold py-2 lg:px-6 px-3 rounded-xl">
          20
        </div>
        <span>:</span>
        <div className="box bg-[#00689e] lg:text-[54px] text-[18px] font-semibold py-2 lg:px-6 px-3 rounded-xl">
          12
        </div>
        <span>:</span>
        <div className="box bg-[#00689e] lg:text-[54px] text-[18px] font-semibold py-2 lg:px-6 px-3 rounded-xl">
          39
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
