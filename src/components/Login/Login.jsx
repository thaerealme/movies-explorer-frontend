import logo from '../../images/logo.svg';

import SignForm from "../SignForm/SignForm";

export default function Login ({ title }) {
  return (
    <SignForm
      children={<>
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
      button='Войти'
      text='Ещё не зарегистрированы?'
      link='/signup'
      linkText='Регистрация'
    />
  );
}
