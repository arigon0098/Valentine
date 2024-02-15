import React from "react";
import "./styles/app.css";
import FloatingBalloon from "./components/balloon";
import Mail from "./components/mail";
import Kiss from "./components/Kiss";
import AnimatedHeart from "./components/animatedHeart";

function App() {
  return (
    <div className="App">
      <div className="balloon-container">
        <FloatingBalloon />
        <FloatingBalloon />
      </div>
      <Mail /> 
      <div className="balloon-container">
        <FloatingBalloon />
        <FloatingBalloon />
      </div>
      <div className="kiss">
        <Kiss />
        <p className="kissu_text">Yeh lehhhhh, Kissu kissu kisssuuuuuuuuuuu</p>
        <AnimatedHeart />
      </div>
    </div>
  );
}

export default App;