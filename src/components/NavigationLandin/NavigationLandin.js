import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationLandin.css';

function NavigationLandin() {
    return (
        <ul className='navigation-landing'>
            <li className='navigation-landing__item'>
                <Link to='/signup' className='navigation-landing__sign-up'>Регистрация</Link>
            </li>
            <li className='navigation-landing__item'>
                <Link to='/signin' className='navigation-landing__sign-in'>Войти</Link>
            </li>
        </ul>
    )
}

export default NavigationLandin
