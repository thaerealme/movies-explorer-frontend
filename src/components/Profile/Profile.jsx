import './Profile.css';
import './__title/profile__title.css';
import './__body/profile__body.css';
import './__info/profile__info.css';
import './__key/profile__key.css';
import './__value/profile__value.css';
import './__footer/profile__footer.css';
import './__button/profile__button.css';
import './__button/_colored/profile__button_colored.css';

export default function Profile () {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <div className="profile__body">
        <div className="profile__info">
          <p className="profile__key">Имя</p>
          <p className="profile__value">Виталий</p>
        </div>
        <div className="profile__info">
          <p className="profile__key">E-mail</p>
          <p className="profile__value">pochta@yandex.ru</p>
        </div>
      </div>
      <div className="profile__footer">
        <button className="profile__button opacity">Редактировать</button>
        <button className="profile__button profile__button_colored">Выйти из аккаунта</button>
      </div>
    </section>
  );
}
