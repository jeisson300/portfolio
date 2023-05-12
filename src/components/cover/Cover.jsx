import React from 'react';
import '../../styles/styles.css';
import video from '../../assets/video.mp4';

export const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={video} autoPlay loop muted />
      <h1>Jose Jeisson Ceballos Leal</h1>
      <p>Web Developer</p>
    </div>
  )
}
