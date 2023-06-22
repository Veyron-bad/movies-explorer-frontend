import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css'

function SavedMovies({ movies, onDelSaveMovie, path, onSearchSaveMovie, searchSuccess }) {
    return (
        <section className='movies-save'>
            <div className='movies-save__container'>
                <SearchForm path={path} onSearchSaveMovie={onSearchSaveMovie} />
                <MoviesCardList isSavedPage={true} movies={movies} onDelSaveMovie={onDelSaveMovie} searchSuccess={searchSuccess} />
            </div>
        </section>
    )
}

export default SavedMovies
