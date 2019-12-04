import React from 'react';
import ClockTime from './clock/clock.time.component';
import ClockText from './clock/clock.text.component';
import './clock.component.css';

const Clock = () => {
  return (
    <div>
      <ClockText title="Wiehnachtsässe Timer" teaser="de countdown lauft" />
      <ClockTime />
      <ClockText text="huere guet oder" />
    </div>
  );
};

export default Clock;
