import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import '../Header/Header';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../context/CurrentUserContext';

function App() {
  const location = useLocation();
  const path = location.pathname;
  const setFooter = (path === '/') || (path === '/movies') || (path === '/saved-movies');
  const setHeader = (path === '/') || (path === '/movies') || (path === '/saved-movies') || (path === '/profile');

  const [movies, setMovies] = useState([]);
  const [myMovies, setMyMovies] = useState([]);
  const [isLoadingMovie, setIsLoadingMovie] = useState(false);
  const [isSearchFilter, setIsSearchFilter] = useState(false);
  const [isMoviesEmpty, setIsMovieEmpty] = useState(false);
  const [isErrData, setIsErrData] = useState(false);


  // Получаем данные о фильмах из localSorage
  useEffect(() => {
    if ((JSON.parse(localStorage.getItem('filterMovie')) !== null)) {
      setMovies(JSON.parse(localStorage.getItem('filterMovie')))
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('stateFilter') === null) {
      setIsSearchFilter(false);
    } else if (localStorage.getItem('stateFilter') === 'false') {
      setIsSearchFilter(false);
    } else {
      setIsSearchFilter(true);
    }
  }, [])

  const filterShortFilm = (value) => {
    setIsSearchFilter(value);
    localStorage.setItem('stateFilter', value);
  }

  //Обработчик формы поиска на странице всех фильмов
  const handelSearchMovies = (data) => {
    const allMovies = JSON.parse(localStorage.getItem('allMovie'));

    localStorage.setItem('stateFilter', data.stateFilter);

    if (allMovies === null) {
      setIsLoadingMovie(true);
      setIsErrData(false);
      moviesApi.getMovies()
        .then((res) => {
          localStorage.setItem('allMovie', JSON.stringify(res));

          const filterMovie = res.filter(movie => {
            if (data.stateFilter) {
              return ((movie.nameRU.toLowerCase().includes(data.text.toLowerCase())) || (movie.nameEN.toLowerCase().includes(data.text.toLowerCase()))) && (movie.duration <= 40);
            } else {
              return (movie.nameRU.toLowerCase().includes(data.text.toLowerCase())) || (movie.nameEN.toLowerCase().includes(data.text.toLowerCase()));
            }
          })

          if (filterMovie.length === 0) {
            setIsMovieEmpty(true);
          } else {
            setIsMovieEmpty(false)
          }

          localStorage.setItem('filterMovie', JSON.stringify(filterMovie));
          setMovies(filterMovie);
        })

        .catch((err) => {
          console.log(`Ошибка получения фильмов ${err.status}!`);
          setIsErrData(true);
        })

        .finally(() => {
          setIsLoadingMovie(false);
        })
    } else {
      const localMovie = JSON.parse(localStorage.getItem('allMovie'));

      const filterMovie = localMovie.filter(movie => {
        if (data.stateFilter) {
          return ((movie.nameRU.toLowerCase().includes(data.text.toLowerCase())) || (movie.nameEN.toLowerCase().includes(data.text.toLowerCase()))) && (movie.duration <= 40);
        } else {
          return (movie.nameRU.toLowerCase().includes(data.text.toLowerCase())) || (movie.nameEN.toLowerCase().includes(data.text.toLowerCase()));
        }
      })

      if (filterMovie.length === 0) {
        setIsMovieEmpty(true);
      } else {
        setIsMovieEmpty(false)
      }

      localStorage.setItem('filterMovie', JSON.stringify(filterMovie));
      setMovies(filterMovie);
    }
  }

  return (
    <CurrentUserContext >
      <div className="App">
        {setHeader && <Header location={location} />}
        <main>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/movies' element={<Movies
              movies={movies}
              onSearchMovies={handelSearchMovies}
              onFilterShortFilm={filterShortFilm}
              isLoadingMovie={isLoadingMovie}
              filter={isSearchFilter}
              movieEmpty={isMoviesEmpty}
              isErrData={isErrData}
            />} />
            <Route path='/saved-movies' element={<SavedMovies movies={myMovies} />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/signin' element={<Login />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </main>
        {setFooter && <Footer />}
      </div>
    </CurrentUserContext>
  );
}

export default App;
