import React, { Component } from 'react';
import './App.css';
import Intro from  './Intro';
import Static from  './Static';
import Columns from  './Columns';
import VideoModule from  '../containers/VideoModule';

////////VIDEOS//////
import usecase from '../videos/01_UseCase.mp4';
import tech from '../videos/02_Technologies.mp4';
import deploy from '../videos/03_Deployment.mp4';
import custom from '../videos/04_Customization.mp4';
import result from '../videos/05_Result.mp4';

////////DESKTOP SVG//////
import usecaseDesktop from '../svg/desktop/01_UseCase.svg';
import techDesktop from '../svg/desktop/02_Technologies.svg';
import deployDesktop from '../svg/desktop/03_Deployment.svg';
import customDesktop from '../svg/desktop/04_Customization.svg';
import resultDesktop from '../svg/desktop/05_Result.svg';

////////MOBILE SVG//////
import usecaseMobile from '../svg/mobile/01_UseCase.svg';
import techMobile from '../svg/mobile/02_Technologies.svg';
import deployMobile from '../svg/mobile/03_Deployment.svg';
import customMobile from '../svg/mobile/04_Customization.svg';
import resultMobile from '../svg/mobile/05_Result.svg';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <VideoModule assets={assetData} />
        <Intro />
        <Static />
        <Columns />
      </div>
    );
  }
}

export default App;
