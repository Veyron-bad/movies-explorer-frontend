import React, { useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ isSavePage, title, duration, trailerLink, image }) {
    const [isBthActive, setIsBtnActive] = useState(false);

    const handleBtnSave = () => {
        setIsBtnActive(!isBthActive);
    }

    const stateBtnSave = isBthActive ? 'movie__button-save-active' : 'movie__button-save';
    const stateBtnSaveText = isBthActive ? '' : 'Сохранить';

    const urlApi =  'https://api.nomoreparties.co/';

    return (
        <li className='movie'>
            <div className='movie__info'>
                <h3 className='movie__title'>{title}</h3>
                <p className='movie__duration'>{duration}</p>
            </div>
            <a className='movie__link' target="_blank" rel="noreferrer" href={trailerLink}>
                <img className='movie__img' alt='Картинка из фильма' src={urlApi + image} />
            </a>
            {isSavePage
                ? <button className='movie__button-del' />
                : <button onClick={handleBtnSave} className={stateBtnSave}>{stateBtnSaveText}</button>}
        </li>
    )
}

export default MoviesCard
