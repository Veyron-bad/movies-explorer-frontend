import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css'

function SavedMovies({ movies }) {
    return (
        <section className='movies-save'>
            <div className='movies-save__container'>
                <SearchForm />
                <MoviesCardList isSavedPage={true} movies={movies} />
            </div>
        </section>
    )
}

export default SavedMovies
