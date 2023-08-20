import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

import ('./Register.css');
import ('./__header/sign-up__header.css');
import ('./__logo/sign-up__logo.css');
import ('./__title/sign-up__title.css');
import ('./__form/sign-up__form.css');
import ('./__label/sign-up__label.css');
import ('./__input/sign-up__input.css');
import ('./__error/sign-up__error.css');
import ('./__button/sign-up__button.css');
import ('./__footer/sign-up__footer.css');
import ('./__text/sign-up__text.css');
import ('./__link/sign-up__link.css');

export default function Register ({ title }) {
  return (
    <section className="sign-up">
      <div className="sign-up__header">
        <img src={logo} alt="Логотип" className="sign-up__logo" />
        <h1 className="sign-up__title">{title}</h1>
      </div>
      <form className="sign-up__form">
        <label className="sign-up__label">
          Имя
          <input defaultValue="Виталий" type="text" name="name" id="name" className="sign-up__input" />
        </label>
        <label className="sign-up__label">
          E-mail
          <input defaultValue="pochta@yandex.ru" type="email" name="email" id="email" className="sign-up__input" required/>
        </label>
        <label className="sign-up__label">
          Пароль
          <input defaultValue="вводимсюдапароль" type="password" name="password" id="password" className="sign-up__input" required/>
          <span className="sign-up__error">Что-то пошло не так...</span>
        </label>
        <button className="sign-up__button opacity">Зарегистрироваться</button>
      </form>
      <div className="sign-up__footer">
        <p className="sign-up__text">Уже зарегистрированы?</p>
        <Link to='/sign-in' replace={true} className='sign-up__link opacity'>Войти</Link>
      </div>
    </section>
  );
}
