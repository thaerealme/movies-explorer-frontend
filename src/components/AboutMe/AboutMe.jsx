import './AboutMe.css';
import './__grid/about__grid.css';
import './__info/about__info.css';
import './__title/about__title.css';
import './__subtitle/about__subtitle.css';
import './__description/about__description.css';
import './__link/about__link.css';
import './__image/about__image.css';

import SectionTitle from '../SectionTitle/SectionTitle';
import Portfolio from "../Portfolio/Portfolio";
import avatar from '../../images/avatar.webp'
import { Link } from 'react-router-dom';

export default function AboutMe ({ refScroll }) {
  return (
    <section className='about' ref={refScroll}>
      <SectionTitle title='Студент'/>
      <div className="about__grid">
        <div className="about__info">
          <h3 className="about__title">Артем</h3>
          <p className="about__subtitle">Фронтенд-разработчик, 24 года</p>
          <p className="about__description">
            Я родился и живу в Уфе. Имею среднее-специальное образование по инженерной профессии, но душа лежит к компьютерной сфере.
            Люблю путешествовать. Впервые познакомился с кодингом в 13 лет, был свой сервер в онлайн игре.
            После окончания курсов начал искать мелкие заказы и делать собственный сайт.
          </p>
          <Link to='https://github.com/thaerealme' target='_blank' replace={ true } className='about__link'>Github</Link>
        </div>
        <img src={avatar} alt="Фото" className='about__image'/>
      </div>
      <Portfolio />
    </section>
  );
}
