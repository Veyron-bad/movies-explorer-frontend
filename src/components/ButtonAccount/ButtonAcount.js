import React from 'react';
import './ButtonAccount.css';
import { Link } from 'react-router-dom';

function ButtonAcount() {
  return (
    <Link to='/profile'><button className='button-account'>Аккаунт</button></Link>
  )
}

export default ButtonAcount
