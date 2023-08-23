import NavMobile from '../NavMobile/NavMobile';
import { Link } from 'react-router-dom';
import ('./MobileMenu.css')
import ('./_active/mobile-menu_active.css');
import ('./__close-button/mobile-menu__close-button.css');
import ('./__button/mobile-menu__button.css');

export default function MobileMenu ({navRef, handleHamburgerClick}) {
  return (
    <div className="mobile-menu" ref={navRef}>
      <button className="mobile-menu__close-button" onClick={handleHamburgerClick} />
      <NavMobile handleHamburgerClick={handleHamburgerClick}/>
      <Link to='/profile' replace={true} onClick={handleHamburgerClick} className="mobile-menu__button">Аккаунт</Link>
    </div>
  );
}
