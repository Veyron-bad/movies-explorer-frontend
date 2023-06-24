import React from 'react';
import Title from '../Title/Title';
import studPhoto from '../../images/my_foto.jpg';

import './AboutMe.css'
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
    return (
        <section className='aboutme'>
            <div className='aboutme__container content'>
                <Title text='Студент' />
                <div className='aboutme__info'>
                    <div className='aboutme__text-info'>
                        <h3 className='aboutme__name'>Данилович Илья</h3>
                        <p className='aboutme__description'>Фронтенд-разработчик, 32 года</p>
                        <p className='aboutme__text'>Я родился и живу в Красноярск, закончил Институт Космических и Информацилнных технологий СФУ. У меня есть жена
                            и сын. Я люблю спорт и играю в хоккей с шайбой в любительских лигах Красноярска.
                            С 2014 года работал в компании "ТТК" о своив проффессию "Инженер IP-сети".
                            В данный момент являюсь ведущим инженером "Банка России"</p>
                        <a className='aboutme__githab-link' href="https://github.com/Veyron-bad">Github</a>
                    </div>
                    <div className='aboutme__photo-container'>
                        <img className='aboutme__photo' src={studPhoto} alt='Фото студента' />
                    </div>
                </div>
                <Portfolio />
            </div>
        </section >
    )
}

export default AboutMe
