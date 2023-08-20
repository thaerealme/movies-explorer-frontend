import { Link } from 'react-router-dom';
import arrow from '../../images/arrow.svg';
import ('./Portfolio.css');
import ('./__title/portfolio__title.css');
import ('./__list/portfolio__list.css');
import ('./__link/portfolio__link.css');
import ('./__span-image/portfolio__span-image.css');


export default function Portfolio () {
  return (
    <div className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__list">
        <Link to='https://github.com/thaerealme/how-to-learn' target='_blank' replace={true} className='portfolio__link'>Статичный сайт<img src={arrow} alt='Стрелка' className='portfolio__span-image' /></Link>
        <Link to='https://thaerealme.github.io/russian-travel/' target='_blank' replace={true} className='portfolio__link'>Адаптивный сайт<img src={arrow} alt='Стрелка' className='portfolio__span-image' /></Link>
        <Link to='https://thaerealme.github.io/react-mesto-auth/' target='_blank' replace={true} className='portfolio__link'>Одностраничное приложение<img src={arrow} alt='Стрелка' className='portfolio__span-image' /></Link>
      </ul>
    </div>
  );
}
