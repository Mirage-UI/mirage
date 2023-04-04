import { useState, useEffect } from 'react';

const TimerCard = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const countdownDate = new Date('2023-05-17T00:00:00').getTime();
      const now = new Date().getTime();
      const timeDifference = countdownDate - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="flex justify-center md:gap-x-[150px] gap-x-[40px]">
        <div className="flex flex-col items-center">
          <span className="md:text-core80 text-h5 font-bold">
            {timeLeft.days}
          </span>
          <span className="md:text-h5 text-xs font-medium">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="md:text-core80 text-h5 font-bold">
            {timeLeft.hours}
          </span>
          <span className="md:text-h5 text-xs font-medium">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="md:text-core80 text-h5 font-bold">
            {timeLeft.minutes}
          </span>
          <span className="md:text-h5 text-xs font-medium">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="md:text-core80 text-h5 font-bold">
            {timeLeft.seconds}
          </span>
          <span className="md:text-h5 text-xs font-medium">Seconds</span>
        </div>
      </div>
    </section>
  );
};

export default TimerCard;
