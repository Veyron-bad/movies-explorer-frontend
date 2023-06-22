import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SeachNotFound from '../SeachNotFound/SeachNotFound';
import {
    WINDOW_SIZE_1280,
    WINDOW_SIZE_768,
    WINDOW_SIZE_480,
    WINDOW_SIZE_320,
    CARD_FOR_SZ_1280,
    CARD_FOR_SZ_768,
    CARD_FOR_SZ_480,
    CARD_FOR_MORE_1280,
    CARD_FOR_MORE_768,
    CARD_FOR_MORE_480
} from '../../utils/constants/constants.js';
import { checkLike } from '../../utils/checkLike';

function MoviesCardList({ movies, searchSuccess, isProplem, isSavedPage, onSaveMovie, onDelSaveMovie }) {
    const [width, setWidth] = useState(window.innerWidth);
    const [currentCard, setCurrentCard] = useState(3);
    const {currentUser} = React.useContext(CurrentUserContext);

    const handelResize = (evt) => {
        setTimeout(() => {
            setWidth(evt.target.innerWidth);
        }, 1000);
    }
    window.addEventListener('resize', handelResize);

    const handelBtnMore = () => {
        if (width >= WINDOW_SIZE_1280) {
            setCurrentCard(currentCard + CARD_FOR_MORE_1280);
        } else if (width <= WINDOW_SIZE_1280 && width > WINDOW_SIZE_768) {
            setCurrentCard(currentCard + CARD_FOR_MORE_1280);
        } else if (width <= WINDOW_SIZE_768 && width > WINDOW_SIZE_480) {
            setCurrentCard(currentCard + CARD_FOR_MORE_768)
        } else if (width <= WINDOW_SIZE_480 && width >= WINDOW_SIZE_320) {
            setCurrentCard(currentCard + CARD_FOR_MORE_480)
        }
    }

    useEffect(() => {
        if (width >= WINDOW_SIZE_1280) {
            setCurrentCard(CARD_FOR_SZ_1280);
        } else if (width <= WINDOW_SIZE_1280 && width > WINDOW_SIZE_768) {
            setCurrentCard(CARD_FOR_SZ_1280);
        } else if (width <= WINDOW_SIZE_768 && width > WINDOW_SIZE_480) {
            setCurrentCard(CARD_FOR_SZ_768)
        } else if (width <= WINDOW_SIZE_480 && width >= WINDOW_SIZE_320) {
            setCurrentCard(CARD_FOR_SZ_480)
        }
    }, [movies, width])
    return (
        <>
            <ul className='cardlist'>
                {searchSuccess ? <SeachNotFound /> : null}
                {isProplem ? <div style={{ color: '#2BE080' }}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</div> : null}
                {movies.slice(0, currentCard).map((movie) => {
                    const isLikeCard = checkLike(movie);
                    const like = (isLikeCard.length > 0) ? true : false
                        return  (
                    <MoviesCard
                        key={movie.id || movie._id}
                        movie={movie}
                        userId={currentUser._id}
                        isSavedPage={isSavedPage}
                        isSave={like}
                        onSaveMovie={onSaveMovie}
                        onDelSaveMovie={onDelSaveMovie}
                    />
                )})}
            </ul>
            {((movies.length > 3) && (currentCard < movies.length)) ? <button onClick={handelBtnMore} className='cardlist__btn-more'>Ещё</button> : null}
        </>
    )
}

export default MoviesCardList
