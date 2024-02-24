// Buttons.js
import React from 'react';
import './Buttons.css';
import b1 from '../images/createCamp.png';
import b2 from '../images/setStatus.png';
import b3 from '../images/trash.png';

function Buttons() {
  const handleClick = (buttonId) => {
    // Handle button click based on buttonId
  };

  return (
    <div className="button-container">
      <img src={b1} alt="Create Campaign" onClick={() => handleClick(1)} />
      <img src={b2} alt="Set Status" onClick={() => handleClick(2)} />
      <img src={b3} alt="Trash" onClick={() => handleClick(3)} />
    </div>
  );
}

export default Buttons;