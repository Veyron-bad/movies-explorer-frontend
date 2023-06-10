import React from 'react';
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
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {
  const location = useLocation();
  const path = location.pathname;
  const setFooter = (path === '/') || (path === '/movies') || (path === '/saved-movies');
  const setHeader = (path === '/') || (path === '/movies') || (path === '/saved-movies') || (path === '/profile');

  return (
    <div className="App">
      <InfoTooltip />
      {setHeader && <Header location={location} />}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      {setFooter && <Footer />}
    </div>
  );
}

export default App;
