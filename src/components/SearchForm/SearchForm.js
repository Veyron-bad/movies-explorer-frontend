import React from 'react';
import './SearchForm.css';

function SearchForm() {
    return (
        <form className='search-form'>
            <div className='search-form__search'>
                <div className='search-form__icon'></div>
                <input className='search-form__input' name='movie-name' placeholder='Фильм' type='text' required />
                <button className='search-form__button'>Найти</button>
                <span className='search-form__error'>Нужно ввести ключевое слово</span>
            </div>
            <div className='search-form__filter'>
                <div className='search-form__filter-container'>
                    <input className='search-form__filter-switch' name='filter-film' type='checkbox' />
                    <span className='search-form__filter-name'>Короткометражки</span>
                </div>
            </div>
        </form >
    )
}

export default SearchForm
