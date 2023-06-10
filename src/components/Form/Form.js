import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

function Form({ children, title, btnName, nameCaption, link, linkName }) {
    return (
        <form className='form'>
            <div className='form__content'>
                <div className='form__header'>
                    <Link to='/'>
                        <div className='form__logo' />
                    </Link>
                    <h1 className='form__title'>{title}</h1>
                </div>
                {children}
                <button type='submit' className='form__submit'>{btnName}</button>
                <p className='form__caption'>{nameCaption}
                    <Link to={link} className='form__caption-link'>{linkName}</Link></p>
            </div>
        </form>
    )
}

export default Form
