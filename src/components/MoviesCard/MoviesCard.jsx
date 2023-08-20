import movieImage from '../../images/movies/1.jpg';
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

export default function MoviesCard ({ buttonType, movie }) {
  return (
    <article className="movies__card">
      <div className="movies__head">
        <img src={movieImage} alt="" className="movies__image" />
        { movie.owner ?
          (<button className={`movies__button movies__button_type_${buttonType}`}/>)
          : (<button className="movies__button movies__button_type_save">Сохранить</button>)}
      </div>
      <div className="movies__body">
        <h2 className="movies__title">{movie.title}</h2>
        <div className="movies__duration">
          <p className="movies__duration-text">{movie.duration}</p>
        </div>
      </div>
    </article>
  );
}
