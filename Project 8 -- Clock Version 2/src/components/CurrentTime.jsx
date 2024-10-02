import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    console.log("Interval has been setup");
    const setIntervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(setIntervalId);
      console.log("Cancelled the interval");
    };
  }, []);
  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()}
      {" - "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
