import React, { useState, useEffect } from 'react'
import "./countdownTimer.css"

export default function CountdownTimer() {
  const calculateTimeLeft = () => {
    let difference = +new Date('March 19, 2022 00:00:00 gmt-6') - +new Date();
  
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
  
    return timeLeft;
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });  
  const timerComponents = [];
  console.log('timerComponents', timerComponents)
  

Object.keys(timeLeft).forEach((interval) => {
  if (!timeLeft[interval]) {
    return;
  }
  
  timerComponents.push(
       timeLeft[interval] < 10 ? ['0', `${timeLeft[interval]}`] : timeLeft[interval].toString().split('')
  );
});
  return (
    <div>
      <div className="time time-increments">
      {Object.entries(timeLeft).map((timeUnit) => (
      <div className="time-unit">
      <div className="time-integer">{timeUnit[1] < 10 ? `0${timeUnit[1]}` : timeUnit[1]}</div>
      <div className="time-value">{timeUnit[0]}</div>
      </div>))}
      </div>
      
    </div>
  )
}
//////////

