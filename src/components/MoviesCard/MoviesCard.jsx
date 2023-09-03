import { useEffect, useState } from 'react';

import ('./MoviesCard.css');
import ('./__card/movies__card.css');
import ('./__head/movies__head.css');
import ('./__image/movies__image.css');
import ('./__button/movies__button.css');
import ('./__button/_type/movies__button_type_save.css');
import ('./__button/_type/movies__button_type_saved.css');
import ('./__button/_type/movies__button_type_delete.css');
import ('./__body/movies__body.css');
import ('./__title/movies__title.css');
import ('./__duration/movies__duration.css');
import ('./__duration-text/movies__duration-text.css');

export default function MoviesCard ({ buttonType, movie, onMovieLike, onMovieDislike, savedMovies }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {

  }, [liked])

  function getHoursAndMinutes(mins) {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    return `${hours}ч ${minutes < 10 ? `0${minutes}` : `${minutes}`}м`;
  }
  function handleCardLike() {
    onMovieLike(movie);
    setLiked(true);
  }
  function handleCardRemove() {
    onMovieDislike(movie);
    movie.isOwner = false;
  }
  function handleCardDislike() {
    const currentMovie = savedMovies.find((savedMovie) => savedMovie.movieId ===  movie.id)
    onMovieDislike(currentMovie);
    setLiked(false);
  }
  function handleMovieClick() {
    window.open(movie.trailerLink, '_blank');
  }

  return (
    <article className="movies__card">
      <div className="movies__head">
        <img src={movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : `${movie.image}`} onClick={handleMovieClick} alt="Фото фильма" className="movies__image" />
          { movie.isOwner || movie.owner || liked ?
            <button onClick={buttonType === 'delete' ? handleCardRemove : handleCardDislike} className={`movies__button movies__button_type_${buttonType}`} />
            : <button onClick={handleCardLike} className='movies__button movies__button_type_save'>Сохранить</button>
          }
      </div>
      <div className="movies__body">
        <h2 className="movies__title">{movie.nameRU}</h2>
        <div className="movies__duration">
          <p className="movies__duration-text">{getHoursAndMinutes(movie.duration)}</p>
        </div>
      </div>
    </article>
  );
}
