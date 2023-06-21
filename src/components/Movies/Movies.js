import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ movies, searchMovie, path, isLoading, searchSuccess, isProplem, onSaveMovie, onDelSaveMovie, upgradeMovie }) {
  return (
    <div className='movies'>
      <div className='movies__container'>
        <SearchForm searchMovie={searchMovie} path={path} />
        {isLoading ? <Preloader /> : <MoviesCardList movies={movies} searchSuccess={searchSuccess} isProplem={isProplem} onSaveMovie={onSaveMovie} onDelSaveMovie={onDelSaveMovie} />}

      </div>
    </div>
  )
}

export default Movies
