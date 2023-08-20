import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import { useRef } from 'react';

export default function Main() {
  const techsRef = useRef();
  const aboutProjectRef = useRef();
  const aboutMeRef = useRef();

  const handleTechsClick = () => {
    techsRef.current.scrollIntoView({behavior: 'smooth'});
  }
  const handleAboutProjectClick = () => {
    aboutProjectRef.current.scrollIntoView({behavior: 'smooth'});
  }
  const handleAboutMeClick = () => {
    aboutMeRef.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <main className="main">
      <Promo
        handleTechsClick={handleTechsClick}
        handleAboutProjectClick={handleAboutProjectClick}
        handleAboutMeClick={handleAboutMeClick}/>
      <AboutProject refScroll={aboutProjectRef}/>
      <Techs refScroll={techsRef}/>
      <AboutMe refScroll={aboutMeRef}/>
    </main>
  );
}
