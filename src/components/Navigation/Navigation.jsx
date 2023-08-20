import React from "react";
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import './__list/navigation__list.css'
import './__link-item/navigation__link-item.css';
import './__link-item/_active/navigation__link-item_active.css';

export default function Navigation ({ navRef, showNavbar, isMobile }) {
  return (
    <nav className="navigation" ref={navRef}>
      <ul className="navigation__list">
        <NavLink to="/movies" replace={true} className={({isActive}) => `navigation__link-item ${isActive ? "navigation__link-item_active" : ""}`}>Фильмы</NavLink>
        <NavLink to="/saved-movies" replace={true} className={({isActive}) => `navigation__link-item ${isActive ? "navigation__link-item_active" : ""}`}>Сохраненные фильмы</NavLink>
      </ul>
    </nav>
  );
}
