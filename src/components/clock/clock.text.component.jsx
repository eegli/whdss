import React from 'react';
import './clock.text.component.css';

const ClockText = ({ title, teaser, text }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{teaser}</h3>
      <h3>{text}</h3>
    </div>
  );
};

export default ClockText;
