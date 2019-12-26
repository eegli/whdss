import React, { useState, useEffect } from 'react';

const ClockTime = () => {
  const date = '2019-12-28T17:00:00';
  const date2 = '2019-12-29T03:00:00';
  const [now, setNow] = useState(new Date().getTime());
  const essn = new Date(date).getTime();
  const essn2 = new Date(date2).getTime();

  useEffect(() => {
    setTimeout(() => {
      setNow(new Date().getTime());
    }, 1000);
  });

  const timeCalc = () => {
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

  const addLeadingZeros = value => {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  };

  const days = addLeadingZeros(timeCalc()[0]);
  const hours = addLeadingZeros(timeCalc()[1]);
  const minutes = addLeadingZeros(timeCalc()[2]);
  const seconds = addLeadingZeros(timeCalc()[3]);

  const futureAsseText = (
    <h3>
      {days} {days < 2 ? 'Tag' : 'Täg'}, {hours}{' '}
      {hours < 2 ? 'Stund' : 'Stunde'}, {minutes} Minute, {seconds} Sekunde
    </h3>
  );

  const midAsseText = <h3>Endlich!!! 😍 </h3>;

  const pastAsseText = <h3>Schön ischs gsi, freue mi scho ufs nächste ❤️</h3>;

  let text = () => {
    if (now < essn) {
      text = futureAsseText;
    } else if (essn < now && now < essn2) {
      text = midAsseText;
    } else {
      text = pastAsseText;
    }

    return text;
  };

  return text();
};

export default ClockTime;
