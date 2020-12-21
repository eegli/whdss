import React from 'react';
import ClockTime from './components/ClockTime';
import yoda from './assets/yoda_2.jpg';
import { config } from './config';
import './styles/style.css';

const App: React.FC = () => {
  return (
    <>
      <head>
        <meta charSet='UTF-8' />
        <meta name='description' content='Free Web tutorials' />
        <meta name='keywords' content='HTML, CSS, JavaScript' />
        <meta name='author' content='John Doe' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta property='og:title' content={config.mainTitle} />
        <meta property='og:description' content={config.metaDesc} />
        <meta
          property='og:image'
          content='https://www.hindustantimes.com/rf/image_size_1200x900/HT/p2/2019/12/20/Pictures/_0745b0ec-231b-11ea-8c10-7db3e225203f.jpg'
        />
      </head>

      <div className='main'>
        <h1>{config.mainTitle}</h1>
        <ClockTime />
        <div className='image'>
          <img src={yoda} height='400px' alt='yoda' />
        </div>
      </div>
    </>
  );
};

export default App;
