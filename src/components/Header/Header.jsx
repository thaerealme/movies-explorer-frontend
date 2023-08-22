import React from 'react';
import './Header.css';
import './__status/header__status.css';
import './__sign-button/header__sign-button.css';
import './__sign-button/_colored/header__sign-button_colored.css';
import './__button/header__button.css';
import './__hamburger/header__hamburger.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

export default function Header({ loggedIn, handleHamburgerClick }) {
  return (
    <header className='header'>
      <Logo />
      { loggedIn ?
        (<>
          <Navigation/>
          <Link to='/profile' replace={true} className="header__button">Аккаунт</Link>
          <button className="header__hamburger" onClick={handleHamburgerClick} />
        </>)
        :
        (<>
          <div className='header__status'>
            <Link to='/signup' className='header__sign-button'>Регистрация</Link>
            <Link to='/signin' className='header__sign-button header__sign-button_colored'>Войти</Link>
          </div>
        </>
        )
      }
    </header>
  );
};
