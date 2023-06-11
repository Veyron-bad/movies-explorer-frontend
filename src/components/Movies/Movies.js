import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';

function Movies() {
  return (
    <div className='movies'>
      <div className='movies__container'>
        <SearchForm />
        <MoviesCardList />
        {/* <Preloader /> */}
        <button className='movies__more'>Ещё</button>
      </div>
    </div>
  )
}

export default Movies
