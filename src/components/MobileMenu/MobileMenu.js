import React from 'react';
import { NavLink } from 'react-router-dom';

import ButtonAcount from '../ButtonAccount/ButtonAcount';

import './MobileMenu.css';

const setActiveLink = ({ isActive }) => isActive ? 'mobile-menu__link mobile-menu__link-active' : 'mobile-menu__link';

function MobileMenu({ isActiveBth }) {
    const setActiveMobileMenu = isActiveBth ? 'mobile-menu-active' : 'mobile-menu'
    return (
        <div className={setActiveMobileMenu}>
            <div className='blackout' />
            <div className='mobile-menu__content'>
                <ul className='mobile-menu__list'>
                    <li className='mobile-menu__item'>
                        <NavLink to='/' className={setActiveLink}>Главная</NavLink>
                    </li>
                    <li className='mobile-menu__item'>
                        <NavLink to='/movies' className={setActiveLink}>Фильмы</NavLink>
                    </li>
                    <li className='mobile-menu__item'>
                        <NavLink to='/saved-movies' className={setActiveLink}>Сохранённые фильмы</NavLink>
                    </li>
                </ul>
                <ButtonAcount />
            </div>
        </div>
    )
}

export default MobileMenu
