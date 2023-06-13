import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
            <a className='portfolio__list-link' href='https://veyron-bad.github.io/how-to-learn/' target="_blank" rel="noreferrer">Статичный сайт</a>
            <a className='portfolio__img-link' href='https://veyron-bad.github.io/how-to-learn/' target="_blank" rel="noreferrer"><p className='portfolio__list-img'>↗</p></a>
        </li>
        <li className='portfolio__list-item'>
            <a className='portfolio__list-link' href='https://veyron-bad.github.io/russian-travel/index.html' target="_blank" rel="noreferrer">Адаптивный сайт</a>
            <a className='portfolio__img-link' href='https://veyron-bad.github.io/russian-travel/index.html' target="_blank" rel="noreferrer"><p className='portfolio__list-img'>↗</p></a>
        </li>
        <li className='portfolio__list-item'>
            <a className='portfolio__list-link' href='https://veyronbad.danilovichiv.nomoredomains.monster/' target="_blank" rel="noreferrer">Одностраничное приложение</a>
            <a className='portfolio__img-link' href='https://veyronbad.danilovichiv.nomoredomains.monster/' target="_blank" rel="noreferrer"><p className='portfolio__list-img'>↗</p></a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio
