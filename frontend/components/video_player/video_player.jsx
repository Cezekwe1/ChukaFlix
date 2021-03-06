import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = (props) => {
  const opts = {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    playerVars: {
      autohide: 1,
      showinfo: 0,
      autoplay: 1,
      controls: 2,
      modestBranding: 1
    }
  };

  return (
    <YouTube
      videoId={props.videoId}
      opts={opts}
    />
  );
};

export default VideoPlayer;
