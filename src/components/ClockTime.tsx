import { useState, useEffect } from 'react';
import { config } from '../config';

const ClockTime: React.FC = () => {
  const startDate = new Date(config.startDate).getTime();
  const endDate = new Date(config.endDate).getTime();
  const [now, setNow] = useState(new Date().getTime());

  useEffect(() => {
    setTimeout(() => {
      setNow(new Date().getTime());
    }, 1000);
  });

  const timeCalc = (): Array<number> => {
    let msec = startDate - now;
    const dd = Math.floor(msec / 1000 / 60 / 60 / 24);
    msec -= dd * 1000 * 60 * 60 * 24;
    const hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    const mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    const ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    return [dd, hh, mm, ss];
  };
  // Maybe needed in the future
  /*   const addLeadingZeros = (v: number): string => {
    let value = String(v);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }; */

  let days = timeCalc()[0];
  let hours = timeCalc()[1];
  let minutes = timeCalc()[2];
  let seconds = timeCalc()[3];

  const futureAsseText = (
    <>
      <h3>
        {days} {days < 2 ? config.daySingular : config.daysPlural}
      </h3>
      <h3>
        {hours} {hours < 2 ? config.hoursSingular : config.hoursPlural}
      </h3>
      <h3>
        {minutes} {minutes < 2 ? config.minutesSingular : config.minutesPlural}
      </h3>
      <h3>
        {seconds} {seconds < 2 ? config.secondsSingular : config.secondsPlural}
      </h3>
    </>
  );

  let text = (): JSX.Element => {
    if (now < startDate) {
      return futureAsseText;
    } else if (startDate < now && now < endDate) {
      return <h3>{config.startText}</h3>;
    } else {
      return <h3>{config.endText}</h3>;
    }
  };

  return text();
};

export default ClockTime;
