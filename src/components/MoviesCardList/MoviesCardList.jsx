import React, { useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import ('./MoviesCardList.css');
import ('./__grid/movies__grid.css');

export default function MoviesCardList ({ buttonType, movies, more, counter, totalMovies, onMovieLike, onMovieDislike, savedMovies}) {
  return (
    <section className="movies">
      <div className="movies__grid">
        { movies.map((movie) => (
          <MoviesCard
            key={movie.id || movie._id}
            buttonType={buttonType}
            movie={movie}
            onMovieLike={onMovieLike}
            onMovieDislike={onMovieDislike}
            savedMovies={savedMovies}
          /> ))
        }
      </div>
      {more && (totalMovies.length > counter) && more}
    </section>
  );
}
