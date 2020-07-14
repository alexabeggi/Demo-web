import React from 'react';

import './HomeSec.css';
import SliderComp from './SliderComp';

function HomeSec() {

  
  return (
    <div className="Home" id="home">
      <SliderComp />

      <p className="Home-p">
          We offer the benefits of yoga for the body and mindfulness for your mind.
      <br></br>Do you want to know better our philosophy? Come to one of our retreats.
      </p>

    </div>
  );
}
  
export default HomeSec;