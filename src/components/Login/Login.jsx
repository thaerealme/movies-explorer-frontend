import logo from '../../images/logo.svg';
import { useEffect, useState } from 'react';

import SignForm from "../SignForm/SignForm";

export default function Login ({ title, onSubmit, signError }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [isValidForm, setIsValidForm] = useState(false);

  function handleEmail (e) {
    if (!isValidEmail(e.target.value)) {
      setEmailError(e.target.validationMessage || 'Некорректно введён Email. Пример: mail@yandex.ru');
    } else {
      setEmailError('');
    }
    setEmail(e.target.value);
  }
  function isValidEmail (email) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  }

  function handlePassword (e) {
    setPassword(e.target.value);
  }

  function handleSubmit (e) {
    e.preventDefault();
    onSubmit({ email, password })
  }

  useEffect(() => {
    if(emailError || !email || !password) {
      setIsValidForm(false);
    } else {
      setIsValidForm(true);
    }
  }, [email, emailError, password])

  return (
    <SignForm
      children={<>
        <label className="sign-up__label">
          E-mail
          <input placeholder='E-mail' onChange={handleEmail} value={email} type="email" name="email" id="email" className="sign-up__input" required/>
          {emailError && <span className="sign-up__error">{emailError}</span>}
        </label>
        <label className="sign-up__label">
          Пароль
          <input placeholder='Пароль' onChange={handlePassword} value={password} type="password" name="password" id="password" className="sign-up__input" required/>
          {/* <span className="sign-up__error">Что-то пошло не так...</span> */}
        </label>
      </>}
      logo={ logo }
      title={ title }
      button='Войти'
      text='Ещё не зарегистрированы?'
      link='/signup'
      linkText='Регистрация'
      onSubmit={handleSubmit}
      isValid={isValidForm}
      signError={signError}
    />
  );
}
