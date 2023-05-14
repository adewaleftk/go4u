import React from 'react'
import "../styles/howAppWorks.css";
import line from "../images/line.png";

function HowAppWorks() {
  return (
    <div className="how">
        <p className="words">How the app works</p>
        <img src={line} alt="line" />
    </div>
  );
}

export default HowAppWorks;