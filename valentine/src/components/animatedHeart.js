// AnimatedHeart.js

import React from "react";
import '../styles/animatedHeart.css';
import heartGif from '../images/animatedHeart.gif';

const AnimatedHeart = () => {
  return (
    <div className="heart-container">
      <img src={heartGif} alt="Heart" className="heart" />
    </div>
  );
};

export default AnimatedHeart;
