import React from 'react';
import './ButtonBurger.css';

function ButtonBurger({ isActiveBth, onClickBtn }) {

    const stateBtnBurger = isActiveBth ? 'burder-botton-close' : 'burder-botton';

  return (
    <button onClick={onClickBtn} className={stateBtnBurger}></button>
  )
}

export default ButtonBurger
