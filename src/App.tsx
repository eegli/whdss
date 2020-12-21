import React from 'react';
import ClockTime from './components/ClockTime';
import yoda from './assets/yoda_2.jpg';
import { config } from './config';
import './styles/style.css';

const App: React.FC = () => {
  return (
    <div className='main'>
      <h1>{config.mainTitle}</h1>
      <ClockTime />
      <div className='image'>
        <img src={yoda} height='400px' alt='yoda' />
      </div>
    </div>
  );
};

export default App;
