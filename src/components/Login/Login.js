import React from 'react';
import Form from '../Form/Form';
import './Login.css';

function Login() {
    return (
        <Form
            title='Рады видеть!'
            btnName='Войти'
            nameCaption='Ещё не зарегистрированы?'
            link='/signup'
            linkName='Регистрация'>
            <div className='login__section login__section_email'>
                <label className='login__label'>E-mail</label>
                <input className='login__input' name='email' type='email' placeholder='Email' required />
            </div>
            <div className='login__section login__section_password'>
                <label className='login__label'>Пароль</label>
                <input className='login__input' name='password' type='password' minLength={8} required />
            </div>
        </Form>
    )
}

export default Login
