import React from "react";
import Link from "next/link";

const Video = () => {
    return (
        <div className="">
          <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover'}}>
            <source src="/video.webm"/>
          </video>
        </div>
      )
}

export default Video;