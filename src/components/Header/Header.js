import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavigationMain from '../NavigationMain/NavigationMain';
import NavigationLandin from '../NavigationLandin/NavigationLandin';
import ButtonBurger from '../ButtonBurger/ButtonBurger';
import MobileMenu from '../MobileMenu/MobileMenu';

function Header({ location }) {
    const [ isActiveBth, setIsBtnBurger ] = useState(false);

    const clickBthBurger = () => {
        setIsBtnBurger(!isActiveBth);
        console.log('pres')
    }

    const isLocation = location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile';

    return (
        <>
        <MobileMenu isActiveBth={isActiveBth} />
            <header className={isLocation ? 'header' : 'header header__main'}>
                <div className='header__container content_m'>
                    <Link to='/' className='header__logo-link'>
                        <div className='header__logo'></div>
                    </Link>
                    <nav className='header__navigation'>
                        {isLocation ? <NavigationMain /> : <NavigationLandin />}
                    </nav>
                </div>
                {isLocation && <ButtonBurger onClickBtn={clickBthBurger} isActiveBth={isActiveBth} />}
            </header>
        </>
    )
}

export default Header
