import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetTime }) => {
  const calculateTimeLeft = () => {
    const currentTime = new Date().getTime();
    const targetDate = new Date(targetTime).getTime();
    const timeDifference = targetDate - currentTime;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2 className='inline-block' >Expiration Time: </h2>&nbsp;
      <div className='inline-block' >
        {/* <span>{timeLeft.days}</span> days&nbsp;
        <span>{timeLeft.hours}</span> hours&nbsp; */}
        <span>{timeLeft.minutes}</span> minutes&nbsp;
        <span>{timeLeft.seconds}</span> seconds
      </div>
    </div>
  );
};

export default CountdownTimer;

// Usage
/* const App = () => {
  const targetTime = '2024-02-04T10:46:22.586Z'; // Replace with your target time
  return <CountdownTimer targetTime={targetTime} />;
};

export default App; */
