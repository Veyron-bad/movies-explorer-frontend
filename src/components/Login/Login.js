import Form from '../Form/Form';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { emailRegExp } from '../../utils/RegExp';
import './Login.css';

function Login({ isLoggedIn, authorization, errMessage }) {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });

    return (
        isLoggedIn ? <Navigate to='/movies' replace={true} /> :
        <Form
            title='Рады видеть!'
            btnName='Войти'
            nameCaption='Ещё не зарегистрированы?'
            link='/signup'
            linkName='Регистрация'
            handleSubmit={handleSubmit}
            isValid={isValid}
            authorization={authorization}
            errMessage={errMessage} >

            <div className='login__section login__section-email'>
                <label className='login__label'>E-mail</label>
                <input
                    className='login__input'
                    type='email'
                    placeholder='Email'
                    {...register('email', {
                        required: 'Поле обязательно к заполнению',
                        pattern: {
                            value: emailRegExp,
                            message: 'Поле не соответсвует формату электронной почты'
                        }
                    })} />
                {errors?.email && <div className='login__error-message'>{errors.email.message}</div>}
            </div>
            <div className='login__section login__section-password'>
                <label className='login__label'>Пароль</label>
                <input
                    className='login__input'
                    type='password'
                    placeholder='Пароль'
                    {...register('password', {
                        required: 'Поле обязательно к заполнению'
                    })} />
                    {errors?.password && <div className='login__error-message'>{errors.password.message}</div>}
            </div>
        </Form>
    )
}

export default Login
