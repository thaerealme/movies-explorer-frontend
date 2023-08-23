import { Link } from 'react-router-dom';
import './Footer.css';
import './__description/footer__description.css';
import './__grid/footer__grid.css';
import './__copyright/footer__copyright.css';
import './__list/footer__list.css';
import './__link/footer__link.css';

export default function Footer () {
  return (
    <footer className="footer">
        <p className="footer__description">Учебный проект Яндекс.Практикум x BeatFilm.</p>
        <div className="footer__grid">
          <p className="footer__copyright">
            &#169; {new Date().getFullYear()}
          </p>
          <ul className="footer__list">
            <Link to='https://practicum.yandex.ru/' target='_blank' replace={true} className='footer__link'>Яндекс.Практикум</Link>
            <Link to='https://github.com/thaerealme' target='_blank' replace={true} className='footer__link'>Github</Link>
          </ul>
        </div>
    </footer>
  );
}
