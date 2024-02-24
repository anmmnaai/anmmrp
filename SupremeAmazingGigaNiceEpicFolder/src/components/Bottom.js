// Bottom.js
import React from 'react';
import './Bottom.css';
import logo from '../images/logo.PNG';
import name from '../images/webLogo.png';
import text from '../images/webLogo2.png';

function Bottom() {
  return (
    <div className="bottom-container">
      <hr className="horiLine" />
      <div className="bottom-content">
        <img src={logo} alt="Logo" className="logo" />
        <div className="name-text">
          <img src={name} alt="Name" className="name" />
          <img src={text} alt="Text" className="text" />
        </div>
      </div>
    </div>
  );
}

export default Bottom;