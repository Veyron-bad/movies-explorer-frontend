import React from 'react';
import { useForm } from 'react-hook-form';
import './SearchForm.css';

function SearchForm() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='search-form'>
            <div className='search-form__search'>
                <div className='search-form__icon'></div>
                <input
                    className='search-form__input'
                    placeholder='Фильм'
                    {...register('movie', { required: 'Нужно ввести ключевое слово' })} />
                <button className='search-form__button'>Найти</button>
                {errors?.movie && <span className='search-form__error'>{errors?.movie?.message}</span>}
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
