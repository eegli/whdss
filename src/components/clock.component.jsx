import React, { useEffect } from 'react';
import ClockTime from './clock/clock.time.component';
import ClockText from './clock/clock.text.component';
import yoda from '../img/yoda.jpeg';
import './clock.component.css';

const Clock = () => {
  useEffect(() => {
    document.title = 'WHDSS Brudi';
  }, []);
  return (
    <div className="clock">
      <ClockText title="Wiehnachtsässe Timer" />
      <ClockTime />
      <div className="image">
        <img src={yoda} height="400px" />
      </div>
    </div>
  );
};

export default Clock;
