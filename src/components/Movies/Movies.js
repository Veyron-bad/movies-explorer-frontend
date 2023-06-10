import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <div className='movies'>
      <div className='movies__container content_m'>
        <SearchForm />
        <MoviesCardList />
      </div>
    </div>
  )
}

export default Movies
