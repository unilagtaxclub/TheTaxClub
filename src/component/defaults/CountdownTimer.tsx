import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const parseDate = (input: string): Date => {
  const parsed = Date.parse(input);
  if (isNaN(parsed)) throw new Error("Invalid date format.");
  return new Date(parsed);
};

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +parseDate(targetDate) - +new Date();

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0",
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0",
      ),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        "0",
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [prevTime, setPrevTime] = useState<TimeLeft>(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      setPrevTime(timeLeft);
      setTimeLeft(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, timeLeft]);

  const FlipCard = ({
    label,
    value,
    prevValue,
  }: {
    label: string;
    value: string;
    prevValue: string;
  }) => {
    const hasChanged = value !== prevValue;

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-[40px] lg:w-[80px] h-[40px] lg:h-[100px] bg-[#00689e] text-white font-bold text-[24px] lg:text-[48px] rounded-xl overflow-hidden perspective">
          <AnimatePresence initial={false}>
            {hasChanged ? (
              <motion.div
                key={value}
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center backface-hidden"
              >
                {value}
              </motion.div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                {value}
              </div>
            )}
          </AnimatePresence>
        </div>
        <span className="text-xs lg:text-sm text-[#00689e] mt-1 uppercase">
          {label}
        </span>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-4">
      <FlipCard label="Days" value={timeLeft.days} prevValue={prevTime.days} />
      <span className="text-[#00689E] lg:text-3xl font-bold">:</span>
      <FlipCard
        label="Hours"
        value={timeLeft.hours}
        prevValue={prevTime.hours}
      />
      <span className="text-[#00689E] lg:text-3xl font-bold">:</span>
      <FlipCard
        label="Minutes"
        value={timeLeft.minutes}
        prevValue={prevTime.minutes}
      />
      <span className="text-[#00689E] lg:text-3xl font-bold">:</span>
      <FlipCard
        label="Seconds"
        value={timeLeft.seconds}
        prevValue={prevTime.seconds}
      />
    </div>
  );
};

export default CountdownTimer;
