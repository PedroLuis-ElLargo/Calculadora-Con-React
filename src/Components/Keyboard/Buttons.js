import React from 'react';
import './Buttons.css';

function Keyboard({ texto, clase, handleClick }) {
  return (
    <button className={clase} onClick={handleClick}>
      {texto}
    </button>
  );
}

export default Keyboard;
