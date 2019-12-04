import React, { useState } from 'react';
import './clock.time.component.css';

const ClockTime = () => {
  const now = new Date();
  const essn = new Date('2019-12-28T18:00:00');
  const diff_days = Math.round((essn.getTime() - now.getTime()) / 86400000);
  const diff_hours = Math.round(essn.getTime() - diff_days * 86400000);

  console.log(essn);

  // const [time, setTime] = useState(currentTime);
  return (
    <h1>
      {diff_days}, {diff_hours}
    </h1>
  );
};

export default ClockTime;
