import React, { useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SeachNotFound from '../SeachNotFound/SeachNotFound';
import Preloader from '../Preloader/Preloader';
import { set } from 'react-hook-form';

function MoviesCardList({ movies, isLoadingMovie, movieEmpty, isErrData }) {
    const [countMovie, setCountMovie] = useState(3);

    const handelBtnMore = () => {
        setCountMovie(countMovie + 3);
    }

    console.log('count', countMovie);
    console.log('movies', movies.length);

    return (
        <>
            {/* <Preloader /> */}
            <ul className='cardlist'>
                {
                    (movieEmpty) ? <SeachNotFound /> : null
                }

                {isErrData ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз' : null}

                {/* {
                isLoadingMovie ? <Preloader /> : null
                } */}

                {isLoadingMovie ? <Preloader /> : movies.slice(0, countMovie).map((movie) => (
                    <MoviesCard
                        key={movie.id}
                        title={movie.nameRU}
                        duration={movie.duration}
                        trailerLink={movie.trailerLink}
                        image={movie.image.url}
                    />
                ))}
            </ul>
            {(movies.length > 3 && countMovie <= movies.length) && <button onClick={handelBtnMore} className='cardlist__btn-more'>Ещё</button>}
        </>
    )
}

export default MoviesCardList
