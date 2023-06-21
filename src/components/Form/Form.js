import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Form.css';

function Form({ children, title, btnName, nameCaption, link, linkName, handleSubmit, registration, authorization, isValid, errMessage }) {

    const location = useLocation();

    const onSubmit = (data) => {
        if (location.pathname === '/signup') {
            registration(data);
        } else if (location.pathname === '/signin') {
            authorization(data);
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form' noValidate>
            <div className='form__content'>
                <div className='form__header'>
                    <Link to='/'>
                        <div className='form__logo' />
                    </Link>
                    <h1 className='form__title'>{title}</h1>
                </div>
                {children}
                <div className='form__submit-container'>
                    <div className='form__error'>{errMessage}</div>
                    <button type='submit' className='form__submit' disabled={!isValid} >{btnName}</button>
                    <p className='form__caption'>{nameCaption}
                        <Link to={link} className='form__caption-link'>{linkName}</Link></p>
                </div>

            </div>
        </form>
    )
}

export default Form
