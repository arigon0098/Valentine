import React from 'react';
import '../styles/balloon.css';
import balloonImage from '../images/balloon.png';

function FloatingBalloon() {
  return (
    <div className="balloon">
      <img
        src={balloonImage}
        alt="Balloon"
        style={{ width: '100px', height: 'auto' }} 
      />
    </div>
  );
}

export default FloatingBalloon;
