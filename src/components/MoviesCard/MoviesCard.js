import React, { useState } from 'react';

import { URL_API } from '../../utils/constants/constants';
import { changeTheTime } from '../../utils/changeTheTime';
import './MoviesCard.css';

function MoviesCard({ isSavedPage, movie, isSave, onSaveMovie, onDelSaveMovie }) {
    const [isBthActive, setIsBtnActive] = useState(isSave);
    const movieDuration = changeTheTime(movie.duration);

    const handelBthSave = (evt) => {
        if (evt.target.className === 'movie__button-save') {
            const data = {
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: URL_API + movie.image.url,
                trailerLink: URL_API + movie.trailerLink,
                thumbnail: URL_API + movie.image.formats.thumbnail.url,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN
            }
            onSaveMovie(data);
            setIsBtnActive(true);
        } else {
            onDelSaveMovie(movie.id);
            setIsBtnActive(false);
        }
}



    const handelBtnDel = (evt) => {
        onDelSaveMovie(movie._id)
    }

    const stateBtnSave = isBthActive ? 'movie__button-save-active' : 'movie__button-save';
    const stateBtnSaveText = isBthActive ? '' : 'Сохранить';
    const imgUrl = isSavedPage ? movie.image : URL_API + movie.image.url;

    return (
        <li className='movie'>
            <div className='movie__info'>
                <h3 className='movie__title'>{movie.nameRU}</h3>
                <p className='movie__duration'>{movieDuration}</p>
            </div>
            <a className='movie__link' target="_blank" rel="noreferrer" href={movie.trailerLink}>
                <img className='movie__img' alt={movie.nameRU} src={imgUrl} />
            </a>
            {isSavedPage
                ? <button onClick={handelBtnDel} className='movie__button-del' />
                : <button onClick={handelBthSave} className={stateBtnSave}>{stateBtnSaveText}</button>}
        </li>
    )
}

export default MoviesCard
