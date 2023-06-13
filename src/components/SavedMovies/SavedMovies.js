import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css'

function SavedMovies() {
    const isSavePage = true;
    return (
        <section className='movies-save'>
            <div className='movies-save__container content_m'>
                <SearchForm />
                <MoviesCardList isSavePage={isSavePage} />
            </div>
        </section>
    )
}

export default SavedMovies
