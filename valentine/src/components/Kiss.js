// Kiss.js

import React from "react";
import gunjou from '../images/gunjou.png';
import suni from '../images/suni.png';
import '../styles/kiss.css';

const Kiss = () => {
  return (
    <div className="image-animation-container">
      <div className="image-wrapper1">
        <img src={suni} alt="Image 1" className="image image1" />
      </div>
      <div className="image-wrapper2">
        <img src={gunjou} alt="Image 2" className="image image2" />
      </div>
      <div>
      </div>
    </div>
  );
};

export default Kiss;
