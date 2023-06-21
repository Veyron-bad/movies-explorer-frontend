import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css'

function SavedMovies({ movies, onDelSaveMovie, path }) {
    return (
        <section className='movies-save'>
            <div className='movies-save__container'>
                <SearchForm path={path} />
                <MoviesCardList isSavedPage={true} movies={movies} onDelSaveMovie={onDelSaveMovie} />
            </div>
        </section>
    )
}

export default SavedMovies
