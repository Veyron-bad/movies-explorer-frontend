import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__decription'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__bottom'>
            <p className='footer__copy'>© 2023</p>
            <ul className='footer__menu'>
                <li className='footer__menu-item'><a className='footer_menu-link' href='https://practicum.yandex.ru/' target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
                <li className='footer__menu-item'><a className='footer_menu-link' href='https://github.com/' target="_blank" rel="noreferrer">Github</a></li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
