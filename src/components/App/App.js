import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
import { DURATION_FILM } from '../../utils/constants/constants';
import Preloader  from '../Preloader/Preloader';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';

function App() {
  const location = useLocation();
  const path = location.pathname;
  const setFooter = (path === '/') || (path === '/movies') || (path === '/saved-movies');
  const setHeader = (path === '/') || (path === '/movies') || (path === '/saved-movies') || (path === '/profile');
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [myMovies, setMyMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [searchSuccess, setSearchSuccess] = useState(false);
  const [saveSearchSuccess, setSaveSearchSuccess] = useState(false);
  const [isProplem, setIsProblem] = useState(false);
  const [errMessage, setErrMessage] = useState('')
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [isSwitchActive, setIsSwitchActive] = useState(false);

  // Получаем данные о фильмах из localSorage
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('filterMovie')) !== null)
      setMovies(JSON.parse(localStorage.getItem('filterMovie')))
  }, [])

  // Проверка авторизован пользователь или нет
  useEffect(() => {
    checkLoggedIn();
  }, [])

  // Получение с mainApi сохраненныe фильмы
  useEffect(() => {
    if(isLoggedIn) {
      mainApi.getMovies()
      .then((res) => {
        console.log(res)
        setMyMovies(res);
        localStorage.setItem('saveMovie', JSON.stringify(res));
      })

      .catch((err) => {
        console.log(`Ошибка получения данных ${err}`);
      })
    }
  }, [isLoggedIn])

  // Проверка авторизации пользователя
  const checkLoggedIn = () => {
    mainApi.checkToken()
      .then((res) => {
        if (res.message) {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
          setCurrentUser(res);
          // navigate(path, {replace: true });
        }
      })

      .catch((err) => {
        console.log(`Ошибка проверки токена: ${err}`)
      })
  }

  // Авторизация пользователья
  const authorization = (data) => {
    mainApi.login(data)
      .then((res) => {
        if (res.message) {
          setErrMessage(res.message);
        } else {
          setErrMessage('');
          checkLoggedIn();
          setIsLoggedIn(true);
          navigate('/movies', { replace: true })
        }
      })
  }

  //Регистрация пользователья
  const registration = (data) => {
    mainApi.registration(data)
      .then((res) => {
        if (res.message) {
          setErrMessage(res.message);
        } else {
          setErrMessage('');
          const { email } = res;
          mainApi.login({ email, password: data.password })
            .then((res) => {
              if (res.message) {
                setErrMessage(res.message);
              } else {
                setErrMessage('');
                checkLoggedIn();
                setIsLoggedIn(true);
                navigate('/movies', { replace: true })
              }
            })
        }
      })

      .catch((err) => {
        console.log(`Ошибка регистрации ${err}`)
      })
  }

  // Выход из аккаунат
  const signOut = () => {
    mainApi.signOut()
      .then(() => {
        setIsLoggedIn(false);
        navigate('/', { replace: true })
      })
  }

  const editUserProfile = (data) => {
    mainApi.editUserInfo(data)
      .then((res) => {
        if (res.message) {
          setErrMessage(res.message)
        } else {
          setCurrentUser(res)
          setInfoMessage('Данные успешно изменены!');
        }
      })

      .catch((err) => {
        console.log(`Ошибка редактирования пользователя ${err}`)
      })

      .finally(() => {
        setTimeout(() => {
          setInfoMessage('');
        }, 3000);
      })
  }

  //Обработчик сохранения фильмов
  const handelSaveMovie = (data) => {
    mainApi.saveMovie(data)
      .then((res) => {
        setMyMovies([res, ...myMovies]);
        localStorage.setItem('saveMovie', JSON.stringify([res, ...myMovies]))
      })
      .catch((err) => {
        console.log(`Ошибка сохранения фильма ${err}`)
      })
  }

  //Обработчик удаление фильма
  const handelDeleteMovie = (id) => {
    if (typeof id !== 'number') {
      mainApi.deleteMovie(id)
        .then((res) => {
          const movies = myMovies.filter(movie => movie._id !== id)
          setMyMovies(movies)
          localStorage.setItem('saveMovie', JSON.stringify(movies))
        })
        .catch((err) => {
          console.log(`Ошибка удаления карточки ${err}`)
        })
    } else {
      const movie = myMovies.find(movie => movie.movieId === id)
      mainApi.deleteMovie(movie._id)
        .then((res) => {
          const result = myMovies.filter(item => item._id !== movie._id)
          setMyMovies(result)
          localStorage.setItem('saveMovie', JSON.stringify(result))
        })
        .catch((err) => {
          console.log(`Ошибка удаления карточки ${err}`)
        })
    }
  }

  //Обработчик формы поиска на странице всех фильмов
  const handelSearchMovies = (data) => {
    const allMovies = JSON.parse(localStorage.getItem('allMovie'));
    localStorage.setItem('stateSearch', JSON.stringify(data))

    if (allMovies === null) {
      setIsLoading(true);
      moviesApi.getMovies()
        .then((res) => {
          localStorage.setItem('allMovie', JSON.stringify(res));

          const filterMovie = res.filter(movie => {
            if (data.shortMovie) {
              return movie.nameRU.toLowerCase().includes(data.searchText.toLowerCase()) && movie.duration < DURATION_FILM
            } else {
              return movie.nameRU.toLowerCase().includes(data.searchText.toLowerCase())
            }
          })

          if (filterMovie.length === 0) {
            setSearchSuccess(true);
          } else {
            setSearchSuccess(false);
          }

          setMovies(filterMovie);
          setIsProblem(false);
          localStorage.setItem('filterMovie', JSON.stringify(filterMovie));
        })

        .catch((err) => {
          console.log(`Произошла ошибка ${err.status}`);
          setIsProblem(true)
        })

        .finally(() => {
          setIsLoading(false);
        })
    } else {
      const filterMovie = allMovies.filter(movie => {
        if (data.shortMovie) {
          return movie.nameRU.toLowerCase().includes(data.searchText.toLowerCase()) && movie.duration < DURATION_FILM
        } else {
          return movie.nameRU.toLowerCase().includes(data.searchText.toLowerCase())
        }
      })

      if (filterMovie.length === 0) {
        setSearchSuccess(true);
      } else {
        setSearchSuccess(false);
      }

      setMovies(filterMovie);
      localStorage.setItem('filterMovie', JSON.stringify(filterMovie));
    }
  }

  const handelSearchSaveMovie = (data) => {
    localStorage.setItem('stateSearchForSaveMovie', JSON.stringify(data))
    const saveMovies = JSON.parse(localStorage.getItem('saveMovie'));

    const filterMovie = saveMovies.filter(movie => {
      if (data.shortMovie) {
        return movie.nameRU.toLowerCase().includes(data.searchText.toLowerCase()) && movie.duration < DURATION_FILM
      } else {
        return movie.nameRU.toLowerCase().includes(data.searchText.toLowerCase())
      }
    })

    if (filterMovie.length === 0) {
      setSaveSearchSuccess(true);
    } else {
      setSaveSearchSuccess(false);
    }

    setMyMovies(filterMovie);
  }

 const switchShortMovies = (data) => {
  localStorage.setItem('stateSearch', JSON.stringify(data))
  if(data.shortMovie) {
    const filterShortMovie = movies.filter(movie => {
      return movie.duration <= DURATION_FILM;
    })

    if(filterShortMovie.length === 0) {
      setSearchSuccess(true);
    } else {
      setSearchSuccess(false)
    }
    setMovies(filterShortMovie);
  } else {
    setMovies(JSON.parse(localStorage.getItem('filterMovie')))
    setSearchSuccess(false)
  }
 }

 const switchShortSaveMovies = (data) => {
  localStorage.setItem('stateSearchForSaveMovie', JSON.stringify(data))
  if(data.shortMovie) {
    const filterShortMovie = myMovies.filter(movie => {
      return movie.duration < DURATION_FILM;
    })

    if(filterShortMovie.length === 0) {
      setSaveSearchSuccess(true);
    } else {
      setSaveSearchSuccess(false)
    }
    setMyMovies(filterShortMovie);
  } else {
    setMyMovies(JSON.parse(localStorage.getItem('saveMovie')))
    setSaveSearchSuccess(false)
  }
 }

  return (
    <CurrentUserContext.Provider value={{ currentUser, myMovies, setMovies }}>
      <div className="App">
        {setHeader && <Header location={location} isLoggedIn={isLoggedIn} />}
        <main>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/movies' element={<ProtectedRouteElement
              isLoggedIn={isLoggedIn}
              element={Movies}
              movies={movies}
              searchMovie={handelSearchMovies}
              path={path}
              isLoading={isLoading}
              searchSuccess={searchSuccess}
              isProplem={isProplem}
              onSaveMovie={handelSaveMovie}
              onDelSaveMovie={handelDeleteMovie}
              switchShortMovies={switchShortMovies}
            />} />
            <Route path='/saved-movies' element={<ProtectedRouteElement
              isLoggedIn={isLoggedIn}
              element={SavedMovies}
              movies={myMovies}
              path={path}
              onDelSaveMovie={handelDeleteMovie}
              onSearchSaveMovie={handelSearchSaveMovie}
              saveSearchSuccess={saveSearchSuccess}
              switchShorSavetMovies={switchShortSaveMovies} />} />

            <Route path='/profile' element={<ProtectedRouteElement
              element={Profile}
              isLoggedIn={isLoggedIn}
              signOut={signOut}
              editUserProfile={editUserProfile}
              infoMessage={infoMessage}
              errMessage={errMessage} />} />

            <Route path='/signup' element={<Register registration={registration} errMessage={errMessage} isLoggedIn={isLoggedIn} />} />
            <Route path='/signin' element={<Login isLoggedIn={isLoggedIn} authorization={authorization} errMessage={errMessage} />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </main>
        {setFooter && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
