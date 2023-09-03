import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import ('./Search.css');
import ('./__form/search__form.css');
import ('./__input/search__input.css');
import ('./__submit/search__submit.css');
import ('./__span-icon/search__span-icon.css');


export default function Search ({
  movieInput,
  setMovieInput,
  handleCheckBox,
  searchError,
  setSearchError,
  onSubmit,
  isChecked }) {

  const handleChangeMovie = (e) => {
    if(e.target.value) {
      setSearchError('');
    }
    setMovieInput(e.target.value);
  }
  return (
    <section className="search">
      <form action="#" className="search__form" onSubmit={onSubmit}>
        <input type="text" name="search__input" className="search__input" placeholder="Фильм" value={movieInput || ''} onChange={handleChangeMovie} />
        <button type="submit" className="search__submit"><span className='search__span-icon'></span></button>
      </form>
      {searchError && <ErrorMessage message={searchError}/>}
      <FilterCheckbox isChecked={isChecked} onClick={handleCheckBox} />
    </section>
  );
}
