import React from 'react';
import './clock.text.component.css';

const ClockText = ({ title, text }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{text}</h3>
    </div>
  );
};

export default ClockText;
