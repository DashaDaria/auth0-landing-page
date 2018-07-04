Responsive Landing Page.



<!-- class VideoModule extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex: 0,
      autoplay: true
    }
    this.goToImage      = this.goToImage.bind(this);
    this.autoplayVideos = this.autoplayVideos.bind(this);
    this.goToNextVideo  = this.goToNextVideo.bind(this);
  }

  componentDidMount(){
    this.autoplayVideos()
  }

  autoplayVideos(){
    if(this.state.autoplay){
      let x = window.setInterval(() => {
        this.goToNextVideo()
      }, 3000)
      this.setState({ interval: x })
    } else {
      let x = window.clearInterval(this.state.interval)
      this.setState({ interval : x })
    }
  }

  goToNextVideo(){
    this.setState({ activeIndex: this.state.activeIndex + 1})
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
             video={asset.video.source}
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
} -->
