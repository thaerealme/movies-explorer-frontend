import submitArrow from '../../images/submit-arrow.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import ('./Search.css');
import ('./__form/search__form.css');
import ('./__input/search__input.css');
import ('./__submit/search__submit.css');
import ('./__span-icon/search__span-icon.css');


export default function Search () {
  return (
    <section className="search">
      <form action="#" className="search__form">
        <input type="text" name="search__input" className="search__input" placeholder="Фильм" />
        <button type="submit" className="search__submit"><span className='search__span-icon'></span></button>
      </form>
      <FilterCheckbox />
    </section>
  );
}
