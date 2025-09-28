import { useEffect, useState } from "react";

const Countdown = () => {
  const targetDate = new Date("2025-10-24T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
          ),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center text-center text-2xl font-semibold text-white animate-pulse">
      <div className="p-2 bg-lime-800 rounded-xl w-18 h-18 flex flex-col items-center justify-center">
        <p>{timeLeft.days}</p>
        <span className="text-sm">Hari</span>
      </div>
      <div className="p-2 bg-lime-800 rounded-xl w-18 h-18 flex flex-col items-center justify-center">
        <p>{timeLeft.hours}</p>
        <span className="text-sm">Jam</span>
      </div>
      <div className="p-2 bg-lime-800 rounded-xl w-18 h-18 flex flex-col items-center justify-center">
        <p>{timeLeft.minutes}</p>
        <span className="text-sm">Menit</span>
      </div>
      <div className="p-2 bg-lime-800 rounded-xl w-18 h-18 flex flex-col items-center justify-center">
        <p>{timeLeft.seconds}</p>
        <span className="text-sm">Detik</span>
      </div>
    </div>
  );
};

export default Countdown;
