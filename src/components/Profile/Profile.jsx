import './Profile.css';
import './__title/profile__title.css';
import './__body/profile__body.css';
import './__info/profile__info.css';
import './__key/profile__key.css';
import './__value/profile__value.css';
import './__footer/profile__footer.css';
import './__button/profile__button.css';
import './__button/_colored/profile__button_colored.css';
import './__input/profile__input.css';
import './__success/profile__success.css';

import { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Profile ({ onLogout, onEdit, signError, updateSuccess }) {
  const currentUser = useContext(CurrentUserContext);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [formError, setFormError] = useState('');
  const [editForm, setEditForm] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [])

  function handleName (e) {
    if(isValidName(e.target.value)) {
      setNameError('Поле может содержать: Кириллица, латиница, пробелы и дефисы');
    }
    else {
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
    }
    else {
      setEmailError('');
    }
    setEmail(e.target.value);
  }
  function isValidEmail (email) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  }

  useEffect(() => {
    if(name === currentUser.name && email === currentUser.email) {
      setFormError('Новые данные должны отличаться от текущих')
    } else {
      setFormError('');
    }
    if(formError || emailError || nameError || !email|| !name) {
      setIsValidForm(false);
    } else {
      setIsValidForm(true);
    }
  }, [name, nameError, email, emailError, formError])

  function handleEditClick () {
    setEditForm(true);
  }
  function handleSave () {
    onEdit({ name, email })
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <div className="profile__body">
        <div className="profile__info">
          <p className="profile__key">Имя</p>
          {editForm ?
            (<input className="profile__input" name='name' type='text' onChange={handleName} placeholder={currentUser.name} defaultValue={currentUser.name} required />) :
            (<p className="profile__value">{currentUser.name}</p>)
          }
        </div>
        <div className="profile__info">
          <p className="profile__key">E-mail</p>
          {editForm ?
            (<input className="profile__input" name='email' type='email' onChange={handleEmail} placeholder={currentUser.email} defaultValue={currentUser.email} required />) :
            (<p className="profile__value">{currentUser.email}</p>)
          }
        </div>
      </div>
      <div className="profile__footer">
        {editForm ? (<>
          { updateSuccess && <span className="profile__success">{ updateSuccess }</span> }
          { signError && <span className="sign-up__error">{ signError }</span> }
          { emailError && <span className="sign-up__error">{ emailError }</span> }
          { nameError && <span className="sign-up__error">{ nameError }</span> }
          { formError && <span className="sign-up__error">{ formError }</span> }
          <button className="sign-up__button" onClick={handleSave} disabled={isValidForm ? false : true}>Сохранить</button>
        </>)
          : (<>
          <button className="profile__button opacity" onClick={handleEditClick}>Редактировать</button>
          <button className="profile__button profile__button_colored" onClick={onLogout}>Выйти из аккаунта</button>
        </>)}
      </div>
    </section>
  );
}
