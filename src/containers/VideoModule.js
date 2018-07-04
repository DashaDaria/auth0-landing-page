import React, { Component } from 'react';
import './VideoModule.css';
import AssetCreative from './AssetCreative';
import AssetText from './AssetText';
import NavButton from './NavButton';
import VideoAutoplay from './VideoAutoplay';


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
      activeIndex: index,
      autoPlay: true
    })
  }

  render() {
    return (
      <div className="video-container">
        <div className="auth0-intro">What's' Auth0 </div>


        {this.props.assets.map((asset, index) =>
          <AssetText
            key={index}
            index={index}
            activeIndex={this.state.activeIndex}
            text={asset.text}
           />
         )}


         {this.props.assets.map((asset, index) =>
           <VideoAutoplay
             key={index}
             index={index}
             activeIndex={this.state.activeIndex}
             svg={asset.desktop}
             video={asset.video}
            />
          )}


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
