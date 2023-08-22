import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

export default function Logo () {
  return(
    <Link to='/' className="logo"><img src={logo} alt="Логотип" className="logo__image" /></Link>
  );
}
