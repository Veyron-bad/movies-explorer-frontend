import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './SearchForm.css';

function SearchForm({ onSearchMovies, onFilterShortFilm, filter, text }) {

    const [isFilter, setIsFilter] = useState(false);

    const [search, setSearch] = useState('');
    const [submit, setSubmit] = useState(false);

    const data = {
        text: search,
        stateFilter: isFilter
    }

    const handelFilter = (evt) => {
        const { checked } = evt.target;
        setIsFilter(checked);
        onFilterShortFilm(checked);
    }

    const handlerInput = (evt) => {
        setSearch(evt.target.value);

        if (evt.target.value.length > 0) {
            setSubmit(false);
        } else {
            setSubmit(true)
        }
    }

    const onSubmit = (evt) => {
        evt.preventDefault();

        setSubmit(true);

        if (search.length > 0) {
            onSearchMovies(data);
            setSubmit(false);
        }
    }
    return (
        <form onSubmit={onSubmit} className='search-form' noValidate>
            <div className='search-form__search'>
                <div className='search-form__icon'></div>
                <input
                    defaultValue={data.text}
                    onChange={handlerInput}
                    className='search-form__input'
                    placeholder='Фильм'
                    required
                />
                <button type='submit' className='search-form__button'>Найти</button>
                {(submit) && <span className='search-form__error'>Нужно ввести ключевое слово</span>}
            </div>
            <div className='search-form__filter'>
                <div className='search-form__filter-container'>
                    <input className='search-form__filter-switch' name='filter-film' type='checkbox' onChange={handelFilter} checked={filter} />
                    <span className='search-form__filter-name'>Короткометражки</span>
                </div>
            </div>
        </form >
    )
}

export default SearchForm
