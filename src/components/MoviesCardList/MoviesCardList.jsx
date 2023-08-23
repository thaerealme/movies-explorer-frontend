import MoviesCard from "../MoviesCard/MoviesCard";
import ('./MoviesCardList.css');
import ('./__grid/movies__grid.css');

export default function MoviesCardList ({ buttonType, movies, more }) {
  return (
    <section className="movies">
      <div className="movies__grid">
        { movies.map((movie, i) => (
          <MoviesCard
            key={i}
            buttonType={buttonType}
            movie={movie}/> ))
        }
      </div>
      {more && more}
    </section>
  );
}
