import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-09-20T16:00:00");

const CountdownTimer = () => {
  const [time, setTime] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = WEDDING_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  }

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="flex gap-6 md:gap-10 justify-center">
      {units.map((u) => (
        <div key={u.label} className="text-center">
          <div className="font-serif text-3xl md:text-5xl font-light text-foreground tabular-nums">
            {String(u.value).padStart(2, "0")}
          </div>
          <div className="text-xs tracking-widest uppercase text-muted-foreground mt-1">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
