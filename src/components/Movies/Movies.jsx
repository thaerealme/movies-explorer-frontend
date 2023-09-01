import { useState, useEffect } from 'react';
import Search from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesMore from "../MoviesMore/MoviesMore";
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { moviesApi } from '../../utils/MoviesApi';
import ('./Movies.css');

export default function Movies ({ movies, setMovies, setIsLoading, onMovieLike, onMovieDislike, savedMovies, shortMovies, setShortMovies, loggedIn }) {
  const [movieInput, setMovieInput] = useState('');
  const [moviesError, setMoviesError] = useState('');
  const [searchError, setSearchError] = useState('');
  const [screenWidth, setScreenWidth] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [counter, setCounter] = useState(0);
  const slice = movies.slice(0, counter);
  const shortSlice = shortMovies.slice(0, counter);

  useEffect(() => {
    const searchHistory = JSON.parse(localStorage.getItem('search')) || false;

    if(searchHistory) {
      setIsChecked(searchHistory.isChecked);
      setMovieInput(searchHistory.input);
      const moviesList = searchHistory.movies;
      moviesList.forEach((movie) => {
        savedMovies.forEach((savedMovie) => {
          if(savedMovie.movieId === movie.id) movie.isOwner = true;
        })
      })
      setMovies(moviesList);
      setShortMovies(searchHistory.shortMovies);
    }
  }, [])

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    if(screenWidth > 1279) {
      setCounter(12);
    } else if (screenWidth > 767 && screenWidth < 1280) {
      setCounter(8)
    } else {
      setCounter(5)
    }

    function handleScreenResize () {
      setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 1000)
    }
    window.addEventListener('resize', handleScreenResize);

    return () => {
      window.removeEventListener('resize', handleScreenResize);
    }
  }, [screenWidth])

  function handleCheckBox () {
    setMoviesError('');
    setIsChecked(!isChecked);
    if(!isChecked && shortMovies.length < 1) setMoviesError('Ничего не найдено');
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if(!movieInput) return setSearchError('Нужно ввести ключевое слово');
    setIsLoading(true);
    moviesApi.getMovies()
      .then((movies) => {
        const filteredMovies = movies.filter((movie) => movie.nameRU.toLowerCase().includes(movieInput.toLowerCase()) || movie.nameEN.toLowerCase().includes(movieInput.toLowerCase()));
        filteredMovies.forEach((movie) => {
          savedMovies.forEach((savedMovie) => {
            if(savedMovie.movieId === movie.id) movie.isOwner = true;
          })
        })
        const shortList = filteredMovies.filter((movie) => movie.duration <= 40);
        setShortMovies(shortList);

        localStorage.setItem('search', JSON.stringify({
          input: movieInput,
          isChecked: isChecked,
          movies: filteredMovies,
          shortMovies: shortList,
        }))

        if(filteredMovies.length !== 0) {
          setMovies(filteredMovies);
          setMoviesError('');
        } else {
          setMovies([]);
          setMoviesError('Ничего не найдено')
        }
      })
      .catch(() => setMoviesError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'))
      .finally(() => setIsLoading(false));
  }

  const loadMore = () => {
    if(screenWidth > 1279) {
      setCounter(counter + 3);
    } else {
      setCounter(counter + 2)
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
        isChecked={isChecked}
      />
      { movies.length !== 0 &&
        (<>
          <MoviesCardList
            buttonType='saved'
            totalMovies={isChecked ? shortMovies : movies}
            movies={isChecked ? shortSlice : slice}
            counter={counter}
            more={<MoviesMore onClick={loadMore}/>}
            onMovieLike={onMovieLike}
            onMovieDislike={onMovieDislike}
            savedMovies={savedMovies}
          />
        </>)
      }
      {moviesError && <ErrorMessage message={moviesError} />}
    </>
  );
}
