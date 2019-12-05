import React, { useEffect } from 'react';
import ClockTime from './clock/clock.time.component';
import ClockText from './clock/clock.text.component';
import './clock.component.css';

const Clock = () => {
  useEffect(() => {
    document.title = 'WHDSS Brudi';
  }, []);
  return (
    <div className="clock">
      <ClockText title="Wiehnachtsässe Timer" />
      <ClockTime />
      <ClockText text="huere guet oder" />
    </div>
  );
};

export default Clock;
