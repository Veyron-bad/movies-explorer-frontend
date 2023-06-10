import React, { useState } from 'react';
import './MoviesCard.css';
import movieImage from '../../images/movie_img.jpg';

function MoviesCard({ isSavePage }) {
    const [isBthActive, setIsBtnActive] = useState(false);

    const handleBtnSave = () => {
        setIsBtnActive(!isBthActive);
    }

    const stateBtnSave = isBthActive ? 'movie__button-save-active' : 'movie__button-save';
    const stateBtnSaveText = isBthActive ? '' : 'Сохранить';

    return (
        <li className='movie'>
            <div className='movie__info'>
                <h3 className='movie__title'>В погоне за Бенкси</h3>
                <p className='movie__duration'>27 минут</p>
            </div>
            <a className='movie__link' target="_blank" rel="noreferrer" href='#'>
                <img className='movie__img' alt='Картинка из фильма' src={movieImage} />
            </a>
            {isSavePage
                ? <button className='movie__button-del' />
                : <button onClick={handleBtnSave} className={stateBtnSave}>{stateBtnSaveText}</button>}
        </li>
    )
}

export default MoviesCard
