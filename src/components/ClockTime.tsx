import { useState, useEffect } from 'react';
import { config } from '../config';

const ClockTime: React.FC = () => {
  const startDate = config.startDate;
  const endDate = config.endDate;
  const [now, setNow] = useState(new Date().getTime());
  const essn = new Date(startDate).getTime();
  const essn2 = new Date(endDate).getTime();

  useEffect(() => {
    setTimeout(() => {
      setNow(new Date().getTime());
    }, 1000);
  });

  const timeCalc = (): Array<number> => {
    let msec = essn - now;
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

  const addLeadingZeros = (v: number): string => {
    let value = String(v);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  };

  let days = timeCalc()[0];
  let hours = timeCalc()[1];
  let minutes = timeCalc()[2];
  let seconds = timeCalc()[3];

  const futureAsseText = (
    <>
      <h3>
        {addLeadingZeros(days)}{' '}
        {days < 2 ? config.daySingular : config.daysPlural}
      </h3>
      <h3>
        {addLeadingZeros(hours)}{' '}
        {hours < 2 ? config.hoursSingular : config.hoursPlural}
      </h3>
      <h3>
        {addLeadingZeros(minutes)}{' '}
        {minutes < 2 ? config.minutesSingular : config.minutesPlural}
      </h3>
      <h3>
        {addLeadingZeros(seconds)}{' '}
        {seconds < 2 ? config.secondsSingular : config.secondsPlural}
      </h3>
    </>
  );

  let text = (): JSX.Element => {
    if (now < essn) {
      return futureAsseText;
    } else if (essn < now && now < essn2) {
      return <h3>{config.startText}</h3>;
    } else {
      return <h3>{config.endText}</h3>;
    }
  };

  return text();
};

export default ClockTime;
