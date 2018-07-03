import React, { Component } from 'react';
import './VideoModule.css';
import Videos from './Videos';
import VideoText from './VideoText';
import NavButton from './NavButton';


class VideoModule extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex: 0,
    }
    this.goToImage = this.goToImage.bind(this)
  }

  goToImage(index){
    this.setState({
      activeIndex: index
    })
  }

  render() {
    return (
      <div className="video-container">
        <div className="auth0-intro">What's' Auth0 </div>
        <VideoText />
        <Videos />

        <div className="navigation">
          {this.props.assets.map((asset, index) =>
          <NavButton
            key={index}
            index={index}
            label={asset.name}
            activeIndex={this.state.activeIndex}
            isActive={this.state.activeIndex===index}
            onClick={e => this.goToImage(index)}
          />
        )}
      </div>
    </div>
    );
  }
}

export default VideoModule;
