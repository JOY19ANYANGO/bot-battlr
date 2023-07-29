import React from 'react';
import starsVideo from "../stars.mp4"; 

function HeroSection() {
  return (
    <div className='hero-container'>
       <video autoPlay muted loop id="myVideo" >
        <source src={starsVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>WELCOME TO BOT BATTLR</h1>
      <p>Choose Your army</p>
     
    </div>
  );
}

export default HeroSection;