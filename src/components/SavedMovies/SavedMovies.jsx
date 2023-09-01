import Search from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import { useEffect, useState } from 'react';

export default function SavedMovies ({ movies, onMovieDislike }) {
  const [movieInput, setMovieInput] = useState('');
  const [moviesError, setMoviesError] = useState('');
  const [searchError, setSearchError] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies])

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
    setMoviesError('');
    if(!isChecked) {
      const shortMovies = filteredMovies.filter((movie) => movie.duration <= 40);
      if(shortMovies.length !== 0) {
        setFilteredMovies(shortMovies);
      } else {
        setMoviesError('Ничего не найдено');
      }
    } else {
      setFilteredMovies(movies);
    }
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!movieInput || movieInput === ' ') {
      setSearchError('Нужно ввести ключевое слово');
      return;
    }
    const sortedMovies = filteredMovies.filter((movie) => movie.nameRU.toLowerCase().includes(movieInput.toLowerCase()) || movie.nameEN.toLowerCase().includes(movieInput.toLowerCase()));
    setFilteredMovies(sortedMovies);
  }

  return (
    <>
      <Search
        movieInput={movieInput}
        setMovieInput={setMovieInput}
        handleCheckBox={handleCheckBox}
        searchError={searchError}
        setSearchError={setSearchError}
        onSubmit={handleSearchSubmit}
      />
      <MoviesCardList buttonType='delete' movies = {filteredMovies} onMovieDislike={onMovieDislike} />
    </>
  );
}
