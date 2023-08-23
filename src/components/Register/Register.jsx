import logo from '../../images/logo.svg';

import SignForm from "../SignForm/SignForm";

export default function Register ({ title }) {
  return (
    <SignForm
      children={<>
        <label className="sign-up__label">
          Имя
          <input placeholder='Имя' defaultValue="Виталий" type="text" name="name" id="name" className="sign-up__input" />
        </label>
        <label className="sign-up__label">
          E-mail
          <input placeholder='E-mail' defaultValue="pochta@yandex.ru" type="email" name="email" id="email" className="sign-up__input" required/>
          <span className="sign-up__error">Что-то пошло не так...</span>
        </label>
        <label className="sign-up__label">
          Пароль
          <input placeholder='Пароль' type="password" name="password" id="password" className="sign-up__input" required/>
          <span className="sign-up__error">Что-то пошло не так...</span>
        </label>
      </>}
      logo={ logo }
      title={ title }
      button='Зарегистрироваться'
      text='Уже зарегистрированы?'
      link='/signin'
      linkText='Войти'
    />
  );
}
