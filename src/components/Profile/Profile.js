import React, { useEffect } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { useForm } from 'react-hook-form';
import { nameRegExp, emailRegExp } from '../../utils/RegExp';
import './Profile.css';

function Profile({ signOut, editUserProfile, infoMessage, errMessage }) {
    const { currentUser } = React.useContext(CurrentUserContext);

    const { register, handleSubmit, formState: { errors, isValid }, getValues, setValue } = useForm({
        mode: 'onChange'
    });

    useEffect(() => {
    setValue('name', currentUser.name);
    setValue('email', currentUser.email);
    }, [currentUser])

    const checkName = (value) => {
        if((value === currentUser.name) && (getValues('email') === currentUser.email)) {
            return false
        } else {
            return true
        }
    }

    const checkEmail = (value) => {
        if((value === currentUser.email) && (getValues('name') === currentUser.name)) {
            return false
        } else {
            return true
        }
    }

    const onSubmit = (data) => {
        editUserProfile(data);
    }

    return (
        <div className='profile'>
            <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='profile__form'>
                <div className='profile__section profile__section-name'>
                    <label>Имя</label>
                    <input
                        className='profile__input-name'
                        placeholder='Имя'
                        {...register('name', {
                            required: 'Поле обязательно к заполнению',
                            pattern: {
                                value: nameRegExp,
                                message: 'Поле должно содержит только латиницу, кириллицу, пробел или дефис'
                            },
                            validate: (v) => checkName(v)
                        })} />
                    {errors?.name && <div className='profile__error-message'>{errors.name.message}</div>}
                </div>
                <div className='profile__section profile__section-email'>
                    <label>Email</label>
                    <input
                        className='profile__input-email'
                        type='email'
                        placeholder='email'
                        {...register('email', {
                            required: 'Поле обязательно к заполнению',
                            pattern: {
                                value: emailRegExp,
                                message: 'Поле не соответсвует формату электронной почты'
                            },
                            validate: (v) => checkEmail(v)
                        })} />
                    {errors?.email && <div className='profile__error-message'>{errors.email.message}</div>}
                </div>
                <div className='profile__buttons'>
                    <div className='profile__error-edit'>{infoMessage || errMessage}</div>
                    <button className='profile__edit' type='submit' disabled={!isValid}>Редактировать</button>
                </div>
            </form>
            <button onClick={signOut} className='profile__signout'>Выйти из аккаунта</button>
        </div>
    )
}

export default Profile
