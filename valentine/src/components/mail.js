import React, { useState } from "react";
import "../styles/mail.css";
import mailImage from "../images/mail3.png";
import pleaseGIF from "../images/kuromi-yes.gif";
import yesGIF from '../images/kuromi-yes2.gif';

const Mail = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [response, setResponse] = useState(null);
  const [pleaseeCount, setPleaseeCount] = useState(0);

  const handleToggle = () => {
    setIsTextVisible(!isTextVisible);
  };

  const handleResponseYes = (answer) => {
    setResponse(answer);
   setPleaseeCount(0)
  }

  const handleResponseNo = () => {
    setResponse("No");
    setPleaseeCount(pleaseeCount + 1);
  }

  return (
    <div className={`container ${isTextVisible ? "text-visible" : ""}`}>
      <div className="mail" onClick={handleToggle}>
        {isTextVisible ? (
          <div className="text">
            <strong>Hi Suni Chan 🍌</strong>
            <p>Will you be my Valentine for the rest of my life?</p>
            <div className="response-buttons">
              <div className="please-gif-container">
                {response === "Yes" ? (
                  <img src={yesGIF} alt="bubu-dudu" className="please-gif" />
                ) : (
                  <img src={pleaseGIF} alt="dudu" className="please-gif" />
                )}
              </div>
              <button onClick={(e) => { e.stopPropagation(); handleResponseYes("Yes"); }}>Yes</button>
              <button onClick={(e) => { e.stopPropagation(); handleResponseNo(); }}>No</button>
            </div>
            {response === "No" && (
              <div className="pleasee-text" style={{ fontSize: `${14 + pleaseeCount}px` }}>
                Pleasee
              </div>
            )}
          </div>
        ) : (
          <img src={mailImage} alt="Mail" />
        )}
      </div>
    </div>
  );
};

export default Mail;
