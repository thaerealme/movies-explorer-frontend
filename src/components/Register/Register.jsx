import { useState, useEffect } from 'react';
import logo from '../../images/logo.svg';

import SignForm from "../SignForm/SignForm";

export default function Register ({ title, onSubmit, signError }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [isValidForm, setIsValidForm] = useState(false);

  function handleName (e) {
    if(isValidName(e.target.value)) {
      setNameError('Поле может содержать: Кириллица, латиница, пробелы и дефисы');
    } else {
      setNameError('');
    }
    setName(e.target.value);
  }
  function isValidName (name) {
    return /[^a-zA-Zа-яА-ЯёЁ\s\-\s]/g.test(name);
  }

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
    onSubmit({name, password, email})
  }

  useEffect(() => {
    if(emailError || nameError || !email || !password || !name) {
      setIsValidForm(false);
    } else {
      setIsValidForm(true);
    }
  }, [name, nameError, email, emailError, password])

  return (
    <SignForm
      children={<>
        <label className="sign-up__label">
          Имя
          <input placeholder='Имя' onChange={handleName} value={name} type="text" name="name" id="name" className="sign-up__input" minLength={2} maxLength={30}/>
          {nameError && <span className="sign-up__error">{nameError}</span>}
        </label>
        <label className="sign-up__label">
          E-mail
          <input placeholder='E-mail' onChange={handleEmail} value={email} type="email" name="email" id="email" className="sign-up__input" required/>
          {emailError && <span className="sign-up__error">{emailError}</span>}
        </label>
        <label className="sign-up__label">
          Пароль
          <input placeholder='Пароль' onChange={handlePassword} value={password} type="password" name="password" id="password" className="sign-up__input" required/>
        </label>
      </>}
      logo={ logo }
      title={ title }
      button='Зарегистрироваться'
      text='Уже зарегистрированы?'
      link='/signin'
      linkText='Войти'
      onSubmit={handleSubmit}
      isValid={isValidForm}
      signError={signError}
    />
  );
}
