import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavigationMain from '../NavigationMain/NavigationMain';
import NavigationLandin from '../NavigationLandin/NavigationLandin';
import ButtonBurger from '../ButtonBurger/ButtonBurger';
import MobileMenu from '../MobileMenu/MobileMenu';

function Header({ location, isLoggedIn }) {
    const [ isActiveBth, setIsBtnBurger ] = useState(false);

    const clickBthBurger = () => {
        setIsBtnBurger(!isActiveBth);
    }

    const isLocation = location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile' || location.pathname === '/';

    return (
        <>
        <MobileMenu isActiveBth={isActiveBth} />
            <header className={isLoggedIn ? 'header' : 'header header__main'}>
                <div className='header__container'>
                    <Link to='/' className='header__logo-link'>
                        <div className='header__logo'></div>
                    </Link>
                    <nav className='header__navigation'>
                        {isLoggedIn ? <NavigationMain /> : <NavigationLandin />}
                    </nav>
                </div>
                {isLocation && <ButtonBurger onClickBtn={clickBthBurger} isActiveBth={isActiveBth} />}
            </header>
        </>
    )
}

export default Header
