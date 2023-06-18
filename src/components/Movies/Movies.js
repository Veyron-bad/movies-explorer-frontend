import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';

function Movies({ movies, onSearchMovies, isLoadingMovie, filter, text, onFilterShortFilm, movieEmpty, isErrData }) {
  return (
    <div className='movies'>
      <div className='movies__container'>
        <SearchForm onSearchMovies={onSearchMovies} filter={filter} text={text} onFilterShortFilm={onFilterShortFilm} />
        <MoviesCardList movies={movies} isLoadingMovie={isLoadingMovie} movieEmpty={movieEmpty} isErrData={isErrData} />
        {/* <Preloader /> */}
      </div>
    </div>
  )
}

export default Movies
