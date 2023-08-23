import { Link, NavLink } from 'react-router-dom';
import './NavMobile.css';
import './__list/nav-mobile__list.css';
import './__link/nav-mobile__link.css';
import './_active/nav-mobile_active.css';

export default function NavMobile ({ handleHamburgerClick }) {
  return (
    <nav className="nav-mobile">
      <ul className="nav-mobile__list">
        <NavLink to="/" replace={true} onClick={handleHamburgerClick} className={({isActive}) => `nav-mobile__link ${isActive ? "nav-mobile_active" : ""}`}>Главная</NavLink>
        <NavLink to="/movies" replace={true} onClick={handleHamburgerClick} className={({isActive}) => `nav-mobile__link ${isActive ? "nav-mobile_active" : ""}`}>Фильмы</NavLink>
        <NavLink to="/saved-movies" replace={true} onClick={handleHamburgerClick} className={({isActive}) => `nav-mobile__link ${isActive ? "nav-mobile_active" : ""}`}>Сохраненные фильмы</NavLink>
      </ul>
    </nav>
  )
}
