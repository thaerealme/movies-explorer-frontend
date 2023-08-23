import Search from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import imageCard from '../../images/movies/1.jpg';
import './SavedMovies.css';

const moviesList = [
  {
  'title': '33 слова о дизайне',
  'image': imageCard,
  'duration': '1ч 17м',
  'owner': true,
  },
  {
    'title': 'Киноальманах «100 лет дизайна»',
    'image': imageCard,
    'duration': '1ч 17м',
    'owner': true,
  },
  {
    'title': 'В погоне за Бенкси',
    'image': imageCard,
    'duration': '1ч 17м',
    'owner': true,
  }
]

export default function SavedMovies () {
  return (
    <>
      <Search />
      <MoviesCardList buttonType='delete' movies={ moviesList } />
    </>
  );
}
