import './Promo.css';
import './__title/promo__title.css'
import NavTab from '../NavTab/NavTab';

export default function Promo({ handleTechsClick, handleAboutProjectClick, handleAboutMeClick }) {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <NavTab
        handleTechsClick={handleTechsClick}
        handleAboutProjectClick={handleAboutProjectClick}
        handleAboutMeClick={handleAboutMeClick} />
    </section>
  );
}
