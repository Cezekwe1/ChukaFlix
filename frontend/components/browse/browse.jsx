import React from 'react';
import TopPageContainer from '../top_page/top_page_container';
import YouTube from 'react-youtube';
import GenreContainer from '../genres/genres_container';


const opts = {
  height: '600px',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  playerVars: {
    autohide: 1,
    showinfo: 0,
    autoplay: 0,
    controls: 0,
    loop: 1,
    modestBranding: 1,
    iv_load_policy: 3,
    playlist:"e_FTFwlIOV4"
  }
};

 class Browse extends React.Component{

  constructor(props){
    super(props)
    this.checkProfile = this.checkProfile.bind(this);
  }

  componentDidMount(){
    
  }

  checkProfile(){
    if(this.props.profile === "no profile"){
      this.props.router.push("/profiles")
    }
  }

    render(){
        return(
            <div>
              <TopPageContainer/>
              <div className="video-wrapper">
                <YouTube videoId="e_FTFwlIOV4" alt="" opts={opts}/>
                <div className="browse-video-motto">
                <div className="browse-video-title">ChukaFlix Presents: "Bukas and Joints"</div>
                <div className="browse-video-description">A colorful food show about Nigerian cuisine</div>
              </div>
              </div>
              <GenreContainer/>
            </div>
        )
     }

}

export default Browse
