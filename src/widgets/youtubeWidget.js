import React from 'react'
import YouTube from "react-youtube"

export default function YoutubeWidget({videoId}) {
    const opts = {
        playerVars: {
          autoplay: 0,
        },
      };
    
      return (
        <div className="w-full aspect-w-16 aspect-h-9">
          <YouTube videoId={videoId} opts={opts} className="mx-auto w-full" />
        </div>
      );
}
