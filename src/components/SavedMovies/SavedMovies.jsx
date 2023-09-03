import Search from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import { useEffect, useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function SavedMovies ({ movies, onMovieDislike }) {
  const [movieInput, setMovieInput] = useState('');
  const [moviesError, setMoviesError] = useState('');
  const [searchError, setSearchError] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies])

  useEffect(() => {

  }, [filteredMovies, moviesError])

  function handleCheckBox () {
    setIsChecked(!isChecked);
    setShortMovies(filteredMovies.filter((movie) => movie.duration <= 40))
  }

  function handleSearchSubmit (e) {
    e.preventDefault();
    if (!movieInput) return setSearchError('Нужно ввести ключевое слово');
    const sortedMovies = movies.filter((movie) => movie.nameRU.toLowerCase().includes(movieInput.toLowerCase()) || movie.nameEN.toLowerCase().includes(movieInput.toLowerCase()));
    if(sortedMovies.length !== 0) {
      setMoviesError('');
      setFilteredMovies(sortedMovies);
    } else {
      setFilteredMovies([]);
      setMoviesError('Ничего не найдено');
    }

    if (isChecked) {
      setFilteredMovies(filteredMovies.filter((movie) => movie.duration <= 40));
    }

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
      <MoviesCardList buttonType='delete' movies = {isChecked ? shortMovies : filteredMovies} onMovieDislike={onMovieDislike}  />
      { moviesError && <ErrorMessage message={moviesError} /> }
    </>
  );
}
