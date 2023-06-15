import { useState, useEffect } from "react";

const Hours = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p>Hora: {time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Hours;
