import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationMain.css';
import ButtonAcount from '../ButtonAccount/ButtonAcount';

const setActiveLink = ({ isActive }) => isActive ? 'navigation-main__link navigation-main__link-active' : 'navigation-main__link';

function NavigationMain() {
    return (
        <div className='navigation-main'>
            <ul className='navigation-main__menu'>
                <li className='navigation-main__item'>
                    <NavLink to='/movies' className={setActiveLink}>Фильмы</NavLink>
                </li>
                <li className='navigation-main__item'>
                    <NavLink to='/saved-movies' className={setActiveLink}>Сохранённые фильмы</NavLink>
                </li>
            </ul>
            <ButtonAcount />
        </div>
    )
}

export default NavigationMain
