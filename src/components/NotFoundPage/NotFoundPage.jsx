import { Link, useNavigate } from 'react-router-dom';
import './NotFoundPage.css';
import './__body/not-found__body.css'
import './__title/not-found__title.css';
import './__subtitle/not-found__subtitle.css';
import './__link/not-found__link.css';

export default function NotFoundPage () {
  const navigate = useNavigate();
  return (
    <section className="not-found">
      <div className="not-found__body">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <Link onClick={() => navigate(-1)} className="not-found__link">Назад</Link>
    </section>
  );
}
