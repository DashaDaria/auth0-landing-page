import React, { Component } from 'react';
import './Videos.css';
import usecases from '../videos/01_UseCases.mp4';
import tech from '../videos/02_Technology.mp4';
import deploy from '../videos/03_Deployment.mp4';
import custom from '../videos/04_Customization.mp4';
import result from '../videos/05_Result.mp4';


class Videos extends Component {


  render() {
    const videos = [ usecases, tech, deploy, custom, result ]

    return (
        <video className="video" autoPlay muted>
          <source src={videos[0]} type='video/mp4' />
          <source src={videos[1]} type='video/mp4' />
          <source src={videos[2]} type='video/mp4' />
          <source src={videos[3]} type='video/mp4' />
          <source src={videos[4]} type='video/mp4' />
        </video>

    );
  }
}

export default Videos;
