import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
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

function App() {
  const { movies, setMovies } = React.useState([]);
  const navRef = React.useRef();
  const rootRef = React.useRef();
  const handleHamburgerClick = () => {
    navRef.current.classList.toggle('mobile-menu_active')
    rootRef.current.classList.toggle('overflow')
  }

  const [isLoading, setIsLoading] = React.useState(null);

  return (
    <div className="app" ref={rootRef}>
      <Routes>
        <Route path='/' element={ <>
          <Header />
          <Main />
          <Footer />
        </> }/>
        <Route path='/movies' element={<>
          <Header loggedIn={true} handleHamburgerClick={handleHamburgerClick} />
          <Movies movies={movies} setMoves={setMovies}/>
          <Footer />
          <MobileMenu navRef={navRef} handleHamburgerClick={handleHamburgerClick} />
        </>} />
        <Route path='/saved-movies' element={<>
          <Header loggedIn={true} handleHamburgerClick={handleHamburgerClick} />
          <SavedMovies />
          <Footer />
          <MobileMenu navRef={navRef} handleHamburgerClick={handleHamburgerClick} />
        </>} />
        <Route path='/profile' element={<>
          <Header loggedIn={true} handleHamburgerClick={handleHamburgerClick} />
          <Profile />
          <MobileMenu navRef={navRef} handleHamburgerClick={handleHamburgerClick} />
        </>} />
        <Route path='/signup' element={ <Register title='Добро пожаловать!'/> } />
        <Route path='/signin' element={ <Login title='Рады видеть!'/> } />
        <Route path='*' element={ <NotFoundPage /> } />
      </Routes>
    </div>
  );
}

export default App;
