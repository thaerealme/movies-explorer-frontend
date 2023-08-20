import Search from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import imageCard from '../../images/movies/1.jpg';
import MoviesMore from "../MoviesMore/MoviesMore";
import ('./Movies.css');

const moviesList = [
  {
    'title': '33 слова о дизайне',
    'image': imageCard,
    'duration': '1ч 17м'},
  {
    'title': 'Киноальманах «100 лет дизайна»',
    'image': imageCard,
    'duration': '1ч 17м',
    'owner': true,
  },
  {
    'title': 'В погоне за Бенкси',
    'image': imageCard,
    'duration': '1ч 17м'
  },
  {
    'title': 'Баския: Взрыв реальности',
    'image': imageCard,
    'duration': '1ч 17м'
  },
  {
    'title': 'Бег это свобода',
    'image': imageCard,
    'duration': '1ч 17м'
  },
  {
    'title': 'Книготорговцы',
    'image': imageCard,
    'duration': '1ч 17м',
    'owner': true,
  },
  {
    'title': 'Когда я думаю о Германии ночью',
    'image': imageCard,
    'duration': '1ч 17м'
  },
  {
    'title': 'Gimme Danger: История Игги и The Stooges',
    'image': imageCard,
    'duration': '1ч 17м'
  },
  {
    'title': 'Дженис: Маленькая девочка грустит',
    'image': imageCard,
    'duration': '1ч 17м'
  },
  {
    'title': 'Соберись перед прыжком',
    'image': imageCard,
    'duration': '1ч 17м'
  },
  {
    'title': 'Пи Джей Харви: A dog called money',
    'image': imageCard,
    'duration': '1ч 17м'
  },
  {
    'title': 'По волнам: Искусство звука в кино',
    'image': imageCard,
    'duration': '1ч 17м'
  },
]

export default function Movies () {
  return (
    <>
      <Search />
      <MoviesCardList buttonType = 'saved' movies={moviesList} more={<MoviesMore />}/>
    </>
  );
}
