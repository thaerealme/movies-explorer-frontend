import './NavTab.css';
import './__link/nav-tab__link.css'
import { Link } from 'react-router-dom';

export default function NavTab ({ handleTechsClick, handleAboutProjectClick, handleAboutMeClick }) {
  return (
    <ul className='nav-tab'>
      <Link className='nav-tab__link' onClick={handleAboutProjectClick}>О проекте</Link>
      <Link className='nav-tab__link' onClick={handleTechsClick}>Технологии</Link>
      <Link className='nav-tab__link' onClick={handleAboutMeClick}>Студент</Link>
    </ul>
  );
}
