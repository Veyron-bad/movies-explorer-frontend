import React from 'react';
import './AboutProject.css';
import Title from '../Title/Title';

function AboutProject() {
    return (
        <section className='about'>
            <div className='about_container content content_s'>
                <Title text='О проектe'/>
                <div className='about__colums'>
                    <div className='about__column'>
                        <h3 className='about__subtitle'>
                            Дипломный проект включал 5 этапов
                        </h3>
                        <p className='about__text'>
                            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                        </p>
                    </div>
                    <div className='about__column'>
                        <h3 className='about__subtitle'>
                            На выполнение диплома ушло 5 недель
                        </h3>
                        <p className='about__text'>
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                        </p>
                    </div>
                </div>
                <div className='about__schedule'>
                    <div className='about__schedule-startweek'>
                        <p className='about__schedule-green'>1 неделя</p>
                        <p className='about__schedule-stage'>Back-end</p>
                    </div>
                    <div className='about__schedule-endweek'>
                        <p className='about__schedule-grey'>4 недели</p>
                        <p className='about__schedule-stage'>Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject
