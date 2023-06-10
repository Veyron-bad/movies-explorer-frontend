import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
    const navigete = useNavigate();
    const goSignIn = () => navigete('/signin', { replace: true });
  return (
    <div className='profile'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form className='profile__form'>
            <div className='profile__section profile__section_name'>
                <label>Имя</label>
                <input className='profile__input-name' type='text' placeholder='Имя'required />
            </div>
            <div className='profile__section profile__section_email'>
                <label>Email</label>
                <input className='profile__input-email' type='email' placeholder='email' required />
            </div>
            <div className='profile__buttons'>
                <button className='profile__edit' type='submit'>Редактировать</button>
                <button onClick={goSignIn} className='profile__signout'>Выйти из аккаунта</button>
            </div>
        </form>
    </div>
  )
}

export default Profile
