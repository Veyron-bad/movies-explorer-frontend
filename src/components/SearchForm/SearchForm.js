import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './SearchForm.css';

function SearchForm({ searchMovie, path, onSearchSaveMovie, switchShortMovies, switchShorSavetMovies }) {
    useEffect(() => {
        if ((JSON.parse(localStorage.getItem('stateSearch')) !== null) && (path === '/movies')) {
            const searchStateLocal = JSON.parse(localStorage.getItem('stateSearch'));
            setValue('searchText', searchStateLocal.searchText);
            setValue('shortMovie', searchStateLocal.shortMovie);
        } else if((JSON.parse(localStorage.getItem('stateSearchForSaveMovie')) !== null) && (path === '/saved-movies'))  {
            const searchStateLocal = JSON.parse(localStorage.getItem('stateSearchForSaveMovie'));
            setValue('searchText', searchStateLocal.searchText);
            setValue('shortMovie', searchStateLocal.shortMovie);
        } else {
            setValue('searchText', '');
            setValue('shortMovie', '');
        }
    }, [])

    const { register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
    } = useForm({
        mode: 'onChange'
    });

    const switchShort = (evt) => {
        const data = {
            searchText: getValues('searchText'),
            shortMovie: evt.target.checked,
        }
        if(path === '/movies') {
            switchShortMovies(data);
        } else if (path === '/saved-movies') {
            switchShorSavetMovies(data)
        }
    }

    const onSubmit = (data) => {
        if (path === '/movies') {
            searchMovie(data);
        } else if (path === '/saved-movies') {
            onSearchSaveMovie(data);
        }
    }

    return (
        <form className='search-form' onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className='search-form__search'>
                <div className='search-form__icon'></div>
                <input
                    className='search-form__input'
                    placeholder='Фильм'
                    {...register('searchText', {
                        required: 'Нужно ввести ключевое слово'
                    })}
                />
                <button type='submit' className='search-form__button'>Найти</button>
                {errors.searchText && <span className='search-form__error'>{errors.searchText.message}</span>}
            </div>
            <div className='search-form__filter'>
                <div className='search-form__filter-container'>
                    <input onClick={switchShort} className='search-form__filter-switch'
                        type='checkbox'
                        {...register('shortMovie')}
                    />
                    <span className='search-form__filter-name'>Короткометражки</span>
                </div>
            </div>
        </form >
    )
}

export default SearchForm
