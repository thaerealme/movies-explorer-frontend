import './App.css';
import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import MobileMenu from '../MobileMenu/MobileMenu';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import { api } from '../../utils/MainApi';

function App() {
  const [movies, setMovies] = React.useState([]);
  const [shortMovies, setShortMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [signError, setSignError] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = React.useRef();
  const rootRef = React.useRef();

  React.useEffect (() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api.getUserInfo()
      .then((user) => {
        setCurrentUser(user);
        setLoggedIn(true);
      })
      .catch(console.error)
      api.getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies);
        })
        .catch(err=>console.log(err))
      navigate(location.pathname, { replace: true })
    }
  }, [])

  const handleHamburgerClick = () => {
    navRef.current.classList.toggle('mobile-menu_active')
    rootRef.current.classList.toggle('overflow')
  }
  function handleMovieLike (movie) {
    api.createMovie(movie)
      .then((newMovie) => {
        newMovie.isOwner = true;
        setSavedMovies([newMovie, ...savedMovies])
      })
      .catch(err => console.log(err))
  }
  function handleMovieDislike (movie) {
    api.deleteMovie(movie._id)
      .then((newMovie) => {
        newMovie.isOwner = false;
        setSavedMovies((state) => state.filter((c) => c.movieId !== movie.movieId))
      })
      .catch(err=> console.log(err));
  }
  function handleRegister (data) {
    api.createUser(data)
      .then(() => {
        handleLogin(data);
      })
      .catch(err => {
        setSignError(`Что-то пошло не так. ${err}`);
      })
  }
  function handleLogin (data) {
    api.login(data)
      .then((user) => {
        localStorage.setItem('jwt', user.token)
        setLoggedIn(true)
        navigate('/movies', {replace: true});
        api.getUserInfo()
          .then((res) => {
            setCurrentUser(res)
          })
          .catch(console.error);
      })
      .catch(err => {
        setSignError(`Что-то пошло не так. ${err}`)
      })
  }
  function handleLogout () {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem('jwt');
    localStorage.removeItem('search');
    navigate('/', {replace: true});
  }
  function handleEditProfile (data) {
    api.updateUser(data)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        setSignError(`Что-то пошло не так. ${err}`)
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app" ref={rootRef}>
        <Routes>
          <Route path='/' element={ <>
            <Header loggedIn={loggedIn} handleHamburgerClick={handleHamburgerClick}/>
            <main className='content'>
              <Main />
            </main>
            <Footer />
            <MobileMenu navRef={navRef} handleHamburgerClick={handleHamburgerClick} />
          </> }/>
          <Route path='/movies' element={<>
            <Header loggedIn={loggedIn} handleHamburgerClick={handleHamburgerClick} />
            <main className='content'>
              <ProtectedRouteElement element={Movies} loggedIn={loggedIn} movies={movies} onMovieDislike={handleMovieDislike} onMovieLike={handleMovieLike} setMovies={setMovies} savedMovies={savedMovies} setSavedMovies={setSavedMovies} setIsLoading={setIsLoading} shortMovies={shortMovies} setShortMovies={setShortMovies}/>
              { isLoading && <Preloader /> }
            </main>
            <Footer />
            <MobileMenu navRef={navRef} handleHamburgerClick={handleHamburgerClick} />
          </>} />
          <Route path='/saved-movies' element={<>
            <Header loggedIn={loggedIn} handleHamburgerClick={handleHamburgerClick} />
            <main className='content'>
              <ProtectedRouteElement element={SavedMovies} loggedIn={loggedIn} movies={savedMovies} setMovies={setSavedMovies} onMovieDislike={handleMovieDislike} />
            </main>
            <Footer />
            <MobileMenu navRef={navRef} handleHamburgerClick={handleHamburgerClick} />
          </>} />
          <Route path='/profile' element={<>
            <Header loggedIn={loggedIn} handleHamburgerClick={handleHamburgerClick} />
            <main className='content'>
              <ProtectedRouteElement element={Profile} loggedIn={loggedIn} onLogout={handleLogout} onEdit={handleEditProfile} signError={signError} />
            </main>
            <MobileMenu navRef={navRef} handleHamburgerClick={handleHamburgerClick} />
          </>} />
          <Route path='/signup' element={ <Register title='Добро пожаловать!' onSubmit={handleRegister} signError={signError}/> } />
          <Route path='/signin' element={ <Login title='Рады видеть!' onSubmit={handleLogin} signError={signError}/> } />
          <Route path='*' element={ <NotFoundPage /> } />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
