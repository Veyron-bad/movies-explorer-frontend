import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ isSavePage }) {
    return (
        <>
            <ul className='cardlist'>
                <MoviesCard isSavePage={ isSavePage } />
                <MoviesCard isSavePage={ isSavePage } />
                <MoviesCard isSavePage={ isSavePage } />
                <MoviesCard isSavePage={ isSavePage } />
                <MoviesCard isSavePage={ isSavePage } />
            </ul>
            <button className='movie__more'>Ещё</button>
        </>
    )
}

export default MoviesCardList
