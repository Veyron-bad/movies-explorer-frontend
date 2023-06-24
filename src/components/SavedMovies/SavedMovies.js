import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css'

function SavedMovies({ movies, onDelSaveMovie, path, onSearchSaveMovie, saveSearchSuccess, switchShorSavetMovies }) {
    return (
        <section className='movies-save'>
            <div className='movies-save__container'>
                <SearchForm path={path} onSearchSaveMovie={onSearchSaveMovie} switchShorSavetMovies={switchShorSavetMovies} />
                <MoviesCardList isSavedPage={true} movies={movies} onDelSaveMovie={onDelSaveMovie} saveSearchSuccess={saveSearchSuccess} />
            </div>
        </section>
    )
}

export default SavedMovies
