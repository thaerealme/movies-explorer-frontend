import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

import ('./SignForm.css');
import ('./__header/sign-up__header.css');
import ('./__title/sign-up__title.css');
import ('./__form/sign-up__form.css');
import ('./__label/sign-up__label.css');
import ('./__input/sign-up__input.css');
import ('./__error/sign-up__error.css');
import ('./__button/sign-up__button.css');
import ('./__footer/sign-up__footer.css');
import ('./__text/sign-up__text.css');
import ('./__link/sign-up__link.css');

export default function SignForm ({ title, children, button, text, link, linkText, onSubmit, isValid, signError }) {

  return (
    <section className="sign-up">
       <div className="sign-up__header">
         <Logo />
         <h1 className="sign-up__title">{ title }</h1>
       </div>
       <form className="sign-up__form" onSubmit={onSubmit}>
         { children }
         { signError && <span className="sign-up__error">{signError}</span> }
        <button disabled={isValid ? false : true} className="sign-up__button">{ button }</button>
       </form>
       <div className="sign-up__footer">
         <p className="sign-up__text">{ text }</p>
         <Link to={ link } replace={true} className='sign-up__link'>{ linkText }</Link>
       </div>
     </section>
  );
}
