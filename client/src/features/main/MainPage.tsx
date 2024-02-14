import React from 'react';
import mainVideo from './Candy2000.mp4';
import './mainPage.css';

const MainPage = (): JSX.Element => {
  return (
    <div className="video1">
      <video className="video__media1" src={mainVideo} autoPlay muted loop></video>
    </div>
  );
};

export default MainPage;
