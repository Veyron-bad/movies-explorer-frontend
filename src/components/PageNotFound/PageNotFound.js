import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PegeNotFound.css'

function PageNotFound() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className='page-not-found'>
        <h1 className='page-not-found__title'>404</h1>
        <p className='page-not-found__text'>Страница не найдена</p>
        <button onClick={goBack} className='page-not-found__btn'>Назад</button>
    </div>
  )
}

export default PageNotFound
