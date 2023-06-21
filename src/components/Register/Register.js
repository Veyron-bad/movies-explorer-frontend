import React from 'react';
import Form from '../Form/Form';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { nameRegExp, emailRegExp } from '../../utils/RegExp';

import './Register.css';

function Register({ registration, errMessage, isLoggedIn }) {
    const { register, formState: { errors, isValid }, handleSubmit } = useForm({ mode: 'onChange' });
    return (
         isLoggedIn ? <Navigate to='/' replace={true} /> :
        <Form
            title='Добро пожаловать!'
            btnName='Зарегистрироваться'
            nameCaption='Уже зарегистрированы?'
            link='/signin'
            linkName='Войти'
            handleSubmit={handleSubmit}
            registration={registration}
            isValid={isValid}
            errMessage={errMessage} >
            <div className='register__section register__section_name'>
                <label className='register__label'>Имя</label>
                <input
                    className='register__input'
                    placeholder='Имя'
                    {...register('name', {
                        required: 'Поле обязательно к заполнению',
                        pattern: {
                            value: nameRegExp,
                            message: 'Поле должно содержит только латиницу, кириллицу, пробел или дефис'
                        }
                    })} />
                {errors?.name && <div className='register__error-message'>{errors.name.message}</div>}
            </div>
            <div className='register__section register__section_email'>
                <label className='register__label'>E-mail</label>
                <input
                    className='register__input'
                    type='email'
                    placeholder='Email'
                    {...register('email', {
                        required: 'Поле обязательно к заполнению',
                        pattern: {
                            value: emailRegExp,
                            message: 'Поле не соответсвует формату электронной почты'
                        }
                    })} />
                {errors?.email && <div className='register__error-message'>{errors.email.message}</div>}
            </div>
            <div className='register__section register__section_password'>
                <label className='register__label'>Пароль</label>
                <input
                    className='register__input'
                    type='password'
                    {...register('password', {
                        required: 'Поле обязательно к заполнению'
                    })}
                />
                {errors?.password && <div className='register__error-message'>{errors.password.message}</div>}
            </div>
        </Form>
    )
}

export default Register
