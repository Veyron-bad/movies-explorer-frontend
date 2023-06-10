import React from 'react';
import Form from '../Form/Form';

import './Register.css';

function Register() {
    return (
        <Form
            title='Добро пожаловать!'
            btnName='Зарегистрироваться'
            nameCaption='Уже зарегистрированы?'
            link='/signin'
            linkName='Войти'>
            <div className='register__section register__section_name'>
                <label className='register__label'>Имя</label>
                <input className='register__input' name='name' type='text' placeholder='Имя' required />
            </div>
            <div className='register__section register__section_email'>
                <label className='register__label'>E-mail</label>
                <input className='register__input' name='email' type='email' placeholder='Email' required />
            </div>
            <div className='register__section register__section_password'>
                <label className='register__label'>Пароль</label>
                <input className='register__input' name='password' type='password' minLength={8} required />
                <span className='register__error-message'>Что-то пошло не так...</span>
            </div>
        </Form>
    )
}

export default Register
